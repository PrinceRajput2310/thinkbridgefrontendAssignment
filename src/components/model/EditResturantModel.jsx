import React, { useEffect } from 'react';


const EditResturantModel = ({
  isOpenEditModel,
  closeEditModel,
  newLevel,
  newResponse,
  onChangeNewLevel,
  onChangeNewResponse,


}) => {
  useEffect(() => {
    const handleOutsideClick = event => {
      if (
        isOpenEditModel &&
        event.target.closest('.editSuggestedPrompt-model-popup-content') ===
          null
      ) {
      closeEditModel();
      }
    };

    if (isOpenEditModel) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpenEditModel,closeEditModel]);

  return (
    <div>
   
      {isOpenEditModel && (
        <div className="editSuggestedPrompt-model-popup">
          <div className="editSuggestedPrompt-model-popup-content">
            <span
              className="editSuggestedPrompt-model-close-btn"
              role="button"
              onClick={closeEditModel}
              tabIndex={0}
              onKeyDown={closeEditModel}
            >
              &times;
            </span>
            <div className="editUserSuggestedPropmt-model-text">
              Edit Resturant
            </div>
            <div className="editUserSuggestedPrompt-image-containerWithText">
             
              
            
            </div>
            <span className="editModel-userMessage-formContainer-label-text">
              Name
            </span>
            <input
              placeholder="Define label for user message"
              className="editModel-userMessage-formContainer-inputbox"
              value={newLevel}
              onChange={onChangeNewLevel}
            />
           
        
              <div>
                <span className="editModel-userMessage-formContainer-label-text-2">
                  Description
                </span>
                <textarea
                  value={newResponse}
                  onChange={onChangeNewResponse}
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
              value={newLevel}
              onChange={onChangeNewLevel}
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '20px',
              }}
            >
              {/* <button
                type="button"
                onClick={closeEditModel}
                className="editUserSuggestedPrompt-cancel-button"
              >
                Cancel
              </button> */}
              <button
                type="button"
                onClick={closeEditModel}
                className="editUserSuggestedPrompt-saveChanges-button"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditResturantModel;
