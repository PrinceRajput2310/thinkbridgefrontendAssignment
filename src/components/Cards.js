import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
//import DropdownButton from "react-bootstrap/DropdownButton";
// import AddResturantModel from "./model/AddResturant";
import Card from "react-bootstrap/Card";
import { ThreeDotsVertical } from "react-bootstrap-icons";
import EditResturantModel from "./model/EditResturantModel";

const Cards = ({ data, handleEdit, handleDelete }) => {
  const [isEditModelOpen, setIsEditModelOpen] = useState(false);

  const openEditModel = () => {
    setIsEditModelOpen(true);
  };
  const closeEditModel = () => {
    setIsEditModelOpen(false);
  };
  console.log("Child components");
  return (
    <>
      {data.map((element, k) => {
        return (
          <Card
            key={k}
            style={{ width: "22rem", border: "none" }}
            className="hove mb-4"
          >
            <Card.Img variant="top" className="cd" src={element.imgdata} />

            <div className="card_body" style={{ position: "relative" }}>
              <Dropdown drop="down" align="end">
                <Dropdown.Toggle
                  as={ThreeDotsVertical}
                  id={`dropdown-${element.id}`}
                  style={{
                    cursor: "pointer",
                    marginTop: "-168%",
                    marginLeft: "97%",
                  }}
                ></Dropdown.Toggle>

                <Dropdown.Menu align={"end"}>
                  <Dropdown.Item
                    as="button"
                    onClick={openEditModel}
                    // onClick={() => handleEdit(element.id)}
                  >
                    Edit
                  </Dropdown.Item>
                  <Dropdown.Item
                    as="button"
                    onClick={() => handleDelete(element.id)}
                  >
                    Delete
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <div className="upper_data d-flex justify-content-between align-items-center">
                <h4 className="mt-2">{element.rname}</h4>
                <span>{element.rating}&nbsp;★</span>
              </div>

              <div className="lower_data d-flex justify-content-between">
                <h5>{element.address}</h5>
                <span>{element.price}</span>
              </div>

              <div className="extra"></div>

              <div className="last_data d-flex justify-content-between align-items-center">
                <img src={element.arrimg} className="limg" alt="" />
                <p>{element.somedata}</p>
                <img src={element.delimg} className="laimg" alt="" />
              </div>
            </div>
          </Card>
        );
      })}

      <EditResturantModel
        isOpenEditModel={isEditModelOpen}
        openEditModel={openEditModel}
        closeEditModel={closeEditModel}
      />
    </>
  );
};

export default Cards;
