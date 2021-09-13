import React from 'react'
import avatar from '../images/kusto.jpg'
import PopupWithForm from './PopupWithForm'
import ImageForm from './ImageForm'

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.handleEditAvatarClick = props.onEditAvatar;
    this.handleEditProfileClick = props.onEditProfile;
    this.handleAddPlaceClick = props.onAddPlace;
    this.isEditAvatarPopupOpen = props.isEditAvatarPopupOpen;
    this.isEditProfilePopupOpen = props.isEditProfilePopupOpen;
    this.isAddPlacePopupOpen = props.isAddPlacePopupOpen;
    console.log(props)
  }

  render() {

    console.log(this, 'this')

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
      <PopupWithForm title='Редактировать профиль' name='edit' buttonTitle='Сохранить' isOpen={this.isEditProfilePopupOpen}>
        <input className="popup__input" type="text" defaultValue="Жак-Ив Кусто" placeholder="Имя" id="name" name="fullname" required minLength="2" maxLength="40" />
        <span className="popup__input-error">
        </span>
        <input className="popup__input" type="text" defaultValue="Исследователь океана" placeholder="Род деятельности" id="job" name="job" required minLength="2" maxLength="200" />
        <span className="popup__input-error">
        </span>
      </PopupWithForm>
      <PopupWithForm title='Новое место' name='add' buttonTitle='Создать' isOpen={this.isAddPlacePopupOpen}>
        <input className="popup__input" type="text" defaultValue="" placeholder="Название" id="pictureName" name="pictureName" minLength="2" maxLength="30" required />
        <span className="popup__input-error">
        </span>
        <input className="popup__input" type="url" defaultValue="" placeholder="Ссылка на картинку" id="link" name="link" required />
        <span className="popup__input-error">
        </span>
      </PopupWithForm>
      <PopupWithForm title='Вы уверены?' name='delete' buttonTitle='Да'/>
      <PopupWithForm title='Обновить аватар' name='avatar' buttonTitle='Сохранить' isOpen={this.isEditAvatarPopupOpen}>
        <input className="popup__input" type="url" defaultValue="" placeholder="Ссылка" id="pictureLink" name="link" required />
        <span className="popup__input-error">
        </span>
      </PopupWithForm>
      <ImageForm />
    </main>
    )
  }
}

export default Main