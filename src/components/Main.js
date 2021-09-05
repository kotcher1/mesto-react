import React from 'react'
import avatar from '../images/kusto.jpg'
import PopupWithForm from './PopupWithForm'

class Main extends React.Component {

  handleEditAvatarClick = () => {
    document.querySelector('.popup_type_avatar').classList.add('popup_opened');
  }

  handleEditProfileClick = () => {
    document.querySelector('.popup_type_edit').classList.add('popup_opened');
  }

  handleAddPlaceClick = () => {
    document.querySelector('.popup_type_add').classList.add('popup_opened');
  }

  render() {

    return (
      <main>
      <section className="profile">
        <div className="profile__block">
          <div className="profile__avatar-block">
            <img className="profile__avatar" src={avatar} alt="Фото" />
            <button className="profile__avatar-button" onClick={this.handleEditAvatarClick} type="button">
            </button>
          </div>
          <div className="profile__info">
            <div className="profile__name-line">
              <h1 className="profile__name">
                Жак-Ив Кусто
              </h1>
              <button className="profile__edit" onClick={this.handleEditProfileClick} type="button">
              </button>
            </div>
            <p className="profile__profession">
              Исследователь океана
            </p>
          </div>
        </div>
        <button className="profile__add" onClick={this.handleAddPlaceClick} type="button">
        </button>
      </section>
      <section className="places">
      </section>
      <PopupWithForm title='Редактировать профиль' name='edit'>
        <input className="popup__input" type="text" value="Жак-Ив Кусто" placeholder="Имя" id="name" name="fullname" required minlength="2" maxlength="40" />
        <span className="popup__input-error">
        </span>
        <input className="popup__input" type="text" value="Исследователь океана" placeholder="Род деятельности" id="job" name="job" required minlength="2" maxlength="200" />
        <span className="popup__input-error">
        </span>
      </PopupWithForm>
      {/* <PopupWithForm title='Новое место' name='add'/>
      <PopupWithForm title='Вы уыерены?' name='delete'/>
      <PopupWithForm title='Обновить аватар' name='avatar'/> */}
      {/* <section className="popup" id="popupEdit">
        <div className="popup__container">
          <h2 className="popup__title">
            Редактировать профиль
          </h2>
          <form className="popup__form" name="form" id="formName" novalidate>
            <input className="popup__input" type="text" value="Жак-Ив Кусто" placeholder="Имя" id="name" name="fullname" required minlength="2" maxlength="40" />
            <span className="popup__input-error">
            </span>
            <input className="popup__input" type="text" value="Исследователь океана" placeholder="Род деятельности" id="job" name="job" required minlength="2" maxlength="200" />
            <span className="popup__input-error">
            </span>
            <button type="submit" className="popup__submit">
              Сохранить
            </button>
          </form>
          <button className="popup__close-button" type="button">
          </button>
        </div>
      </section> */}
      {/* <section className="popup" id="popupAdd">
        <div className="popup__container">
          <h2 className="popup__title">
            Новое место
          </h2>
          <form className="popup__form" name="form" id="formPlace">
            <input className="popup__input" type="text" value="" placeholder="Название" id="pictureName" name="pictureName" minlength="2" maxlength="30" required />
            <span className="popup__input-error">
            </span>
            <input className="popup__input" type="url" value="" placeholder="Ссылка на картинку" id="link" name="link" required />
            <span className="popup__input-error">
            </span>
            <button type="submit" className="popup__submit">
              Создать
            </button>
          </form>
          <button className="popup__close-button" type="button">
          </button>
        </div>
      </section> */}
      <section className="popup popup_type_image" id="imagePopup">
        <div className="popup__container popup__container_type_image">
          <img className="popup__image" src="#" alt=" " />
          <p className="popup__image-title">
          </p>
          <button className="popup__close-button" type="button">
          </button>
        </div>
      </section>
      {/* <section className="popup" id="popupDelete">
        <div className="popup__container">
          <h2 className="popup__title">
            Вы уверены?
          </h2>
          <button type="button" className="popup__submit">
            Да
          </button>
          <button className="popup__close-button" type="button">
          </button>
        </div>
      </section> */}
      {/* <section className="popup" id="popupAvatar">
        <div className="popup__container">
          <h2 className="popup__title">
            Обновить аватар
          </h2>
          <form className="popup__form" name="form" id="formAvatar">
            <input className="popup__input" type="url" value="" placeholder="Ссылка" id="pictureLink" name="link" required />
            <span className="popup__input-error">
            </span>
            <button type="submit" className="popup__submit">
              Сохранить
            </button>
          </form>
          <button className="popup__close-button" type="button">
          </button>
        </div>
      </section> */}
    </main>
    )
  }
}

export default Main