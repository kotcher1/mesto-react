import React from 'react'

class PopupWithForm extends React.Component {

  constructor(props) {
    super(props);
    this.title = props.title;
    this.name = props.name;
    this.children = props.children;
  }

  render() {
    return (
      <section className={`popup popup_type_${this.name}`}>
        <div className="popup__container">
          <h2 className="popup__title">
            {this.title}
          </h2>
          <form className="popup__form" name={`${this.name}`}>
            {this.children}
            <button type="submit" className="popup__submit">
              Сохранить
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