import React  from "react";

const AddResturantModel = ({
  isAddResturantModelOpen,
  resturantName,
   onChangeResturantName,
     address,
             onChangeAddress,
  closeAddResturantModel,
   description,
           onChangeDescription,
  handleAddResturant

}) => {

  console.log("inside add resturant popup",isAddResturantModelOpen);
  // useEffect(() => {
  //   const handleOutsideClick = (event) => {
  //     if (
  //       isAddResturantModelOpen &&
  //       event.target.closest(".editSuggestedPrompt-model-popup-content") ===
  //         null
  //     ) {
  //       closeAddResturantModel();
  //     }
  //   };

  //   if (isAddResturantModelOpen) {
  //     document.addEventListener("click", handleOutsideClick);
  //   }

  //   return () => {
  //     document.removeEventListener("click", handleOutsideClick);
  //   };
  // }, [isAddResturantModelOpen,closeAddResturantModel]);

  return (
    <div>
      {isAddResturantModelOpen && (
        <div className="editSuggestedPrompt-model-popup">
          <div className="editSuggestedPrompt-model-popup-content">
            <span
              className="editSuggestedPrompt-model-close-btn"
              role="button"
              onClick={closeAddResturantModel}
              tabIndex={0}
              onKeyDown={closeAddResturantModel}
            >
              &times;
            </span>
            <div className="editUserSuggestedPropmt-model-text">
              Add Resturant
            </div>
            <div className="editUserSuggestedPrompt-image-containerWithText"></div>
            <span className="editModel-userMessage-formContainer-label-text">
              Name
            </span>
            <input
              placeholder="Enter Resturant Name"
              className="editModel-userMessage-formContainer-inputbox"
              value={resturantName}
              onChange={onChangeResturantName}
            />

            <div>
              <span className="editModel-userMessage-formContainer-label-text-2">
                Description
              </span>
              <textarea
                value={description}
                onChange={onChangeDescription}
                placeholder="Add Resturant Description"
                className="editModel-userMessage-formContainer-textarea"
              />
            </div>

            <span className="editModel-userMessage-formContainer-label-text">
              Address
            </span>
            <input
              placeholder="Enter Address"
              className="editModel-userMessage-formContainer-inputbox"
              value={address}
              onChange={onChangeAddress}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <button
                type="button"
                onClick={closeAddResturantModel}
                className="editUserSuggestedPrompt-cancel-button"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleAddResturant}
                className="editUserSuggestedPrompt-saveChanges-button"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddResturantModel;
