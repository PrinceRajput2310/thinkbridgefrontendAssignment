import React, { useEffect } from 'react';
const DeleteResturant = ({
  isDeleteUserPromptModelOpen,
  closeDeleteUserPromptModel,
  deleteUserSuggestedPrompt,
  newLevel,
}) => {
  useEffect(() => {
    const handleOutsideClick = event => {
      if (
        isDeleteUserPromptModelOpen &&
        event.target.closest('.deleteSuggestedPrompt-model-popup-content') ===
          null
      ) {
        closeDeleteUserPromptModel();
      }
    };

    if (isDeleteUserPromptModelOpen) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isDeleteUserPromptModelOpen, closeDeleteUserPromptModel]);

  return (
    <div>
      {isDeleteUserPromptModelOpen && (
        <div className="deleteSuggestedPrompt-model-popup">
          <div className="deleteSuggestedPrompt-model-popup-content">
            <span
              className="deleteSuggestedPrompt-model-close-btn"
              role="button"
              onClick={closeDeleteUserPromptModel}
              tabIndex={0}
              onKeyDown={closeDeleteUserPromptModel}
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
                onClick={closeDeleteUserPromptModel}
                className="editUserSuggestedPrompt-cancel-button"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={deleteUserSuggestedPrompt}
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
