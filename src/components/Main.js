import React from 'react'
import avatar from '../images/kusto.jpg'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'
import Card from './Card'
import {api} from '../utils/Api.js'

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.handleEditAvatarClick = props.onEditAvatar;
    this.handleEditProfileClick = props.onEditProfile;
    this.handleAddPlaceClick = props.onAddPlace;
    this.closeAllPopups = props.closeAllPopups;
    this.handleCardClick = props.onOpenPopup;
    this.state = {
      userName: 'Жак-Ив Кусто',
      userDescription: 'Исследователь океана',
      userAvatar: avatar,
      cards: [],
    }
  }

  getInfo() {
    api.getUserInfo()
    .then((info) => {
      this.setState({ userName : info.name, userDescription: info.about, userAvatar: info.avatar })
    })
  }

  getCard() {
    api.getInitialCards()
    .then((apiCards) => {
      this.setState({cards: apiCards})
    })
  }

  componentDidMount() {
    this.getInfo();
    this.getCard();
  }

  render() {

    return (
      <main>
      <section className="profile">
        <div className="profile__block">
          <div className="profile__avatar-block">
            <img className="profile__avatar" src={this.state.userAvatar} alt="Фото" />
            <button className="profile__avatar-button" onClick={this.handleEditAvatarClick} type="button">
            </button>
          </div>
          <div className="profile__info">
            <div className="profile__name-line">
              <h1 className="profile__name">
                {this.state.userName}
              </h1>
              <button className="profile__edit" onClick={this.handleEditProfileClick} type="button">
              </button>
            </div>
            <p className="profile__profession">
              {this.state.userDescription}
            </p>
          </div>
        </div>
        <button className="profile__add" onClick={this.handleAddPlaceClick} type="button">
        </button>
      </section>
      <section className="places">
        {this.state.cards.map((card, index) => {
          return <Card card={card} key={index + 1} onCardClick={this.handleCardClick}/>
        })}
      </section>
      <PopupWithForm title='Редактировать профиль' name='edit' buttonTitle='Сохранить'isOpen={this.props.isEditProfilePopupOpen} onClose={this.closeAllPopups}>
        <input className="popup__input" type="text" defaultValue="Жак-Ив Кусто" placeholder="Имя" id="name" name="fullname" required minLength="2" maxLength="40" />
        <span className="popup__input-error">
        </span>
        <input className="popup__input" type="text" defaultValue="Исследователь океана" placeholder="Род деятельности" id="job" name="job" required minLength="2" maxLength="200" />
        <span className="popup__input-error">
        </span>
      </PopupWithForm>
      <PopupWithForm title='Новое место' name='add' buttonTitle='Создать' isOpen={this.props.isAddPlacePopupOpen} onClose={this.closeAllPopups}>
        <input className="popup__input" type="text" defaultValue="" placeholder="Название" id="pictureName" name="pictureName" minLength="2" maxLength="30" required />
        <span className="popup__input-error">
        </span>
        <input className="popup__input" type="url" defaultValue="" placeholder="Ссылка на картинку" id="link" name="link" required />
        <span className="popup__input-error">
        </span>
      </PopupWithForm>
      <PopupWithForm title='Вы уверены?' name='delete' buttonTitle='Да' onClose={this.closeAllPopups}/>
      <PopupWithForm title='Обновить аватар' name='avatar' buttonTitle='Сохранить' isOpen={this.props.isEditAvatarPopupOpen} onClose={this.closeAllPopups}>
        <input className="popup__input" type="url" defaultValue="" placeholder="Ссылка" id="pictureLink" name="link" required />
        <span className="popup__input-error">
        </span>
      </PopupWithForm>
      <ImagePopup card={this.props.isCardSelected} onClose={this.closeAllPopups}/>
    </main>
    )
  }
}

export default Main