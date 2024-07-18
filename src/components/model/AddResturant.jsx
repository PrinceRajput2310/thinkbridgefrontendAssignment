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
  handleAddResturant,
  resturantNameError,
  addressError,
  descriptionError

}) => {

  console.log("inside add resturant popup",isAddResturantModelOpen);
 

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
            <span style={{
              color:'red',
              textAlign:'justify',
              display:'block'
            }}
            >{resturantNameError}</span>
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
              <span style={{
              color:'red',
              textAlign:'justify',
              display:'block'
            }}>{descriptionError}</span>
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
            <span style={{
              color:'red',
              textAlign:'justify',
              display:'block'
            }}>{addressError}</span>

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
