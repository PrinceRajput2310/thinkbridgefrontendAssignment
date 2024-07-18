import React, { useEffect } from "react";

const AddResturantModel = ({
  isAddResturantModelOpen,
  // newLevel,
  // newResponse,
  // onChangeNewLevel,
  // onChangeNewResponse,
  closeAddResturantModel,
  handleAddResturant

}) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isAddResturantModelOpen &&
        event.target.closest(".editSuggestedPrompt-model-popup-content") ===
          null
      ) {
        closeAddResturantModel();
      }
    };

    if (isAddResturantModelOpen) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isAddResturantModelOpen,closeAddResturantModel]);

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
              placeholder="Define label for user message"
              className="editModel-userMessage-formContainer-inputbox"
              // value={newLevel}
              // onChange={onChangeNewLevel}
            />

            <div>
              <span className="editModel-userMessage-formContainer-label-text-2">
                Description
              </span>
              <textarea
                // value={newResponse}
                // onChange={onChangeNewResponse}
                placeholder="Define a bot task and give context"
                className="editModel-userMessage-formContainer-textarea"
              />
            </div>

            <span className="editModel-userMessage-formContainer-label-text">
              Address
            </span>
            <input
              placeholder="Define label for user message"
              className="editModel-userMessage-formContainer-inputbox"
              // value={newLevel}
              // onChange={onChangeNewLevel}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              {/* <button
                type="button"
                onClick={closeAddResturantModel}
                className="editUserSuggestedPrompt-cancel-button"
              >
                Cancel
              </button> */}
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
