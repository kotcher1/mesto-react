import React from 'react'

class PopupWithForm extends React.Component {

  constructor(props) {
    super(props);
    this.title = props.title;
    this.name = props.name;
    this.children = props.children;
    this.buttonTitle = props.buttonTitle;
    this.state = {
      isOpen: props.isOpen,
    }
  }

  render() {
    console.log(this.state.isOpen, 'jjjj')
    return (
      <section className={`popup popup_type_${this.name} ${this.state.isOpen === true ? 'popup_opened' : ''}`}>
        <div className="popup__container">
          <h2 className="popup__title">
            {this.title}
          </h2>
          <form className="popup__form" name={`${this.name}`}>
            {this.children}
            <button type="submit" className="popup__submit">
              {this.buttonTitle}
            </button>
          </form>
          <button className="popup__close-button" type="button">
          </button>
        </div>
      </section>
    )
  }
}

export default PopupWithForm