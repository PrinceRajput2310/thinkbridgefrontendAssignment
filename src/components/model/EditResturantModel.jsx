import React from 'react';


const EditResturantModel = ({
  newResturantName,
  onChangeNewResturant,
   handleModify,
  newAddress,
  onChangeNewAddress,
  isOpenEditModel,
  closeEditModel,
  newResponse,
  onChangeNewResponse,
  editId

}) => {
  // useEffect(() => {
  //   const handleOutsideClick = event => {
  //     if (
  //       isOpenEditModel &&
  //       event.target.closest('.editSuggestedPrompt-model-popup-content') ===
  //         null
  //     ) {
  //     closeEditModel();
  //     }
  //   };

  //   if (isOpenEditModel) {
  //     document.addEventListener('click', handleOutsideClick);
  //   }

  //   return () => {
  //     document.removeEventListener('click', handleOutsideClick);
  //   };
  // }, [isOpenEditModel,closeEditModel]);

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
              placeholder="Enter Resturant Name"
              className="editModel-userMessage-formContainer-inputbox"
              value={newResturantName}
              onChange={onChangeNewResturant}
            />
           
        
              <div>
                <span className="editModel-userMessage-formContainer-label-text-2">
                  Description
                </span>
                <textarea
                  value={newResponse}
                  onChange={onChangeNewResponse}
                  placeholder="Enter Description"
                  className="editModel-userMessage-formContainer-textarea"
                />
              </div>

               <span className="editModel-userMessage-formContainer-label-text">
              Address
            </span>
            <input
              placeholder="Enter Address"
              className="editModel-userMessage-formContainer-inputbox"
              value={newAddress}
              onChange={onChangeNewAddress}
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '20px',
              }}
            >
              <button
                type="button"
                onClick={closeEditModel}
                className="editUserSuggestedPrompt-cancel-button"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={ ()=>handleModify(editId)}
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
