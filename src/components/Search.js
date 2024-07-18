import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import Form from "react-bootstrap/Form";
import Cards from "./Cards";
import Set from "./Set";
import AddResturantModel from "./model/AddResturant";
import { defaultImage } from "../assets/imageUrl";
import {
  addRestaurant,
  deleteRestaurant,
  modifyRestaurant,
} from "../redux/resturantSlice";
import { zomatologo } from "../assets/imageUrl";

const Search = () => {
  const [copydata, setCopyData] = useState([]);
  //   const [isAddResturantModelOpen, setIsAddResturantModelOpen] = useState(true);
  const [resturantName, setResturantName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.restaurants);

  const isAddResturantModelOpen = useRef(false);
  const [, setRender] = useState(0);
  const forceUpdate = () => setRender((prev) => prev + 1);

  // useEffetc to load initial data
  useEffect(() => {
    setCopyData(data);
  }, [data]);
  // onChange Method for add Resturant

  const onChangeResturantName = (e) => {
    setResturantName(e.target.value);
  };
  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const onChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  // Resturant CRUD Operation
  const handleAddResturant = () => {
    const newRestaurant = {
      id: data.length + 1,
      rname: "New Restaurant",
      imgdata: defaultImage,
      address: "",
      delimg: "",
      somedata: "500 + order placed from here recently",
      price: "1000 Per person",
      rating: "4.5",
      arrimg: "",
    };
    // console.log("New Resturant added", newRestaurant);
    dispatch(addRestaurant(newRestaurant));
  };

  const handleDelete = (id) => {
    dispatch(deleteRestaurant(id));
  };

  const handleModify = (restaurant) => {
    dispatch(modifyRestaurant(restaurant));
  };

  //   Search Resturant

  const chanegData = (e) => {
    let getchangedata = e.toLowerCase();

    if (getchangedata === "") {
      setCopyData(data);
    } else {
      let storedata = copydata.filter((ele, k) => {
        return ele.rname.toLowerCase().match(getchangedata);
      });

      setCopyData(storedata);
    }
  };

  const openAddResturantModel = () => {
    isAddResturantModelOpen.current = true;
    forceUpdate();
  };
  const closeAddResturantModel = () => {
    // setIsAddResturantModelOpen(false);
    isAddResturantModelOpen.current = false;
    // forceUpdate();
  };

  console.log("Resturant Data", isAddResturantModelOpen);
  console.log("Parents components");
  return (
    <>
      <div className="container d-flex justify-content-between align-items-center">
        <img
          src={zomatologo}
          style={{
            width: "8rem",
            position: "relative",
            left: "2%",
            cursor: "pointer",
          }}
          alt=""
        />
      </div>

      <Form className="d-flex justify-content-center align-items-center mt-3">
        <Form.Group className=" mx-2 col-lg-4" controlId="formBasicEmail">
          <Form.Control
            type="text"
            onChange={(e) => chanegData(e.target.value)}
            placeholder="Search Restaurant"
          />
        </Form.Group>

        <button
          type="button"
          className="btn text-light col-lg-1"
          style={{ background: "#ed4c67" }}
          onClick={openAddResturantModel}
        >
          Add Restaurant
        </button>
      </Form>

      <section className="iteam_section mt-4 container">
        <h2 className="px-4" style={{ fontWeight: 400 }}>
          Restaurants in Bihar Open now
        </h2>

        <div className="row mt-2 d-flex justify-content-around align-items-center">
          {copydata && copydata.length ? (
            <Cards
              data={copydata}
              handleDelete={handleDelete}
              handleModify={handleModify}
            />
          ) : (
            <Set sdata={data} />
          )}
        </div>
      </section>
      <AddResturantModel
        isAddResturantModelOpen={isAddResturantModelOpen.current}
        resturantName={resturantName}
        onChangeResturantName={onChangeResturantName}
        description={description}
        onChangeDescription={onChangeDescription}
        address={address}
        onChangeAddress={onChangeAddress}
        closeAddResturantModel={closeAddResturantModel}
        handleAddResturant={handleAddResturant}
      />
    </>
  );
};

export default Search;
