import React from 'react';
const DeleteResturant = ({
  isDeleteModelOpen,
  closeDeleteModel,
  closeDeleteUserPromptModel,
  deleteUserSuggestedPrompt,
  newLevel,
}) => {
console.log("inside delete model value",isDeleteModelOpen)

  return (
    <div>
      {isDeleteModelOpen && (
        <div className="deleteSuggestedPrompt-model-popup">
          <div className="deleteSuggestedPrompt-model-popup-content">
            <span
              className="deleteSuggestedPrompt-model-close-btn"
              role="button"
              onClick={closeDeleteModel}
              tabIndex={0}
              onKeyDown={closeDeleteModel}
            >
              &times;
            </span>
            <div className="deleteUserSuggestedPropmt-model-text">
              Are you sure?
            </div>
            <div className="deleteUserSuggestedPropmt-model-text2">
              You are going to delete this Resturant ‘<b>{newLevel} </b>
              ’.
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'end',
                marginTop: '20px',
              }}
            >
              <button
                type="button"
                onClick={closeDeleteModel}
                className="editUserSuggestedPrompt-cancel-button"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={closeDeleteModel}
                className="editUserSuggestedPrompt-saveChanges-button"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteResturant;
