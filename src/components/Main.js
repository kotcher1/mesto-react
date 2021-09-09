import React from 'react'
import avatar from '../images/kusto.jpg'
import PopupWithForm from './PopupWithForm'
import ImageForm from './ImageForm'

class Main extends React.Component {



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
      <PopupWithForm title='Редактировать профиль' name='edit' buttonTitle='Сохранить'>
        <input className="popup__input" type="text" value="Жак-Ив Кусто" placeholder="Имя" id="name" name="fullname" required minlength="2" maxlength="40" />
        <span className="popup__input-error">
        </span>
        <input className="popup__input" type="text" value="Исследователь океана" placeholder="Род деятельности" id="job" name="job" required minlength="2" maxlength="200" />
        <span className="popup__input-error">
        </span>
      </PopupWithForm>
      <PopupWithForm title='Новое место' name='add' buttonTitle='Создать'>
        <input className="popup__input" type="text" value="" placeholder="Название" id="pictureName" name="pictureName" minlength="2" maxlength="30" required />
        <span className="popup__input-error">
        </span>
        <input className="popup__input" type="url" value="" placeholder="Ссылка на картинку" id="link" name="link" required />
        <span className="popup__input-error">
        </span>
      </PopupWithForm>
      <PopupWithForm title='Вы уыерены?' name='delete' buttonTitle='Да'/>
      <PopupWithForm title='Обновить аватар' name='avatar' buttonTitle='Сохранить'>
        <input className="popup__input" type="url" value="" placeholder="Ссылка" id="pictureLink" name="link" required />
        <span className="popup__input-error">
        </span>
      </PopupWithForm>
      <ImageForm />
    </main>
    )
  }
}

export default Main