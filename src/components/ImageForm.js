import React from 'react'

class ImageForm extends React.Component {
  
 render() {
   return (
    <section className="popup popup_type_image" id="imagePopup">
      <div className="popup__container popup__container_type_image">
        <img className="popup__image" src="#" alt=" " />
        <p className="popup__image-title">
        </p>
        <button className="popup__close-button" type="button">
        </button>
      </div>
  </section>
   )
 }
}

export default ImageForm 