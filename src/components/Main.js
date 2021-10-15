import React from 'react'
import PopupWithForm from './PopupWithForm'
import EditProfilePopup from './EditProfilePopup'
import EditAvatarPopup from './EditAvatarPopup'
import ImagePopup from './ImagePopup'
import Card from './Card'
import {api} from '../utils/Api.js'
import { CurrentUserContext } from '../contexts/CurrentUserContext' 

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.handleEditAvatarClick = props.onEditAvatar;
    this.handleEditProfileClick = props.onEditProfile;
    this.handleAddPlaceClick = props.onAddPlace;
    this.closeAllPopups = props.closeAllPopups;
    this.handleCardClick = props.onOpenPopup;
    this.onUpdateUser = props.onUpdateUser;
    this.onUpdateAvatar = props.onUpdateAvatar;
    this.state = {
      cards: [],
    }
  }

  static contextType = CurrentUserContext;

  getCard() {
    api.getInitialCards()
    .then((apiCards) => {
      this.setState({cards: apiCards})
    })
  }

  componentDidMount() {
    this.getCard();
  }

  handleCardLike = (card) => {
    const isLiked = card.likes.some(i => i._id === this.context._id);
    const apiMethod = isLiked ? "DELETE" : "PUT";
    api.likeCard(card._id, apiMethod)
    .then((newCard) => {
      this.setState({cards: this.state.cards.map((c) => c._id === card._id ? newCard : c)});
    });
  } 

  handleCardDelete = (card) => {
    api.deleteCard(card._id)
    .then(() => {
      this.setState({cards: this.state.cards.filter((c) => c._id !== card._id)});
    })
  }

  render() {

    return (

      <main>
        <section className="profile">
          <div className="profile__block">
            <div className="profile__avatar-block">
              <img className="profile__avatar" src={this.context.avatar} alt="Фото" />
              <button className="profile__avatar-button" onClick={this.handleEditAvatarClick} type="button">
              </button>
            </div>
            <div className="profile__info">
              <div className="profile__name-line">
                <h1 className="profile__name">
                  {this.context.name}
                </h1>
                <button className="profile__edit" onClick={this.handleEditProfileClick} type="button">
                </button>
              </div>
              <p className="profile__profession">
                {this.context.about}
              </p>
            </div>
          </div>
          <button className="profile__add" onClick={this.handleAddPlaceClick} type="button">
          </button>
        </section>
        <section className="places">
          {this.state.cards.map((card, index) => {
            return (
              <Card card={card} key={index + 1} onCardClick={this.handleCardClick} onCardLike={this.handleCardLike} onCardDelete={this.handleCardDelete}/>
            )
          })}
        </section>
        <EditProfilePopup onUpdateUser={this.onUpdateUser} isOpen={this.props.isEditProfilePopupOpen} onClose={this.closeAllPopups} />
        <PopupWithForm title='Новое место' name='add' buttonTitle='Создать' isOpen={this.props.isAddPlacePopupOpen} onClose={this.closeAllPopups}>
          <input className="popup__input" type="text" defaultValue="" placeholder="Название" id="pictureName" name="pictureName" minLength="2" maxLength="30" required />
          <span className="popup__input-error">
          </span>
          <input className="popup__input" type="url" defaultValue="" placeholder="Ссылка на картинку" id="link" name="link" required />
          <span className="popup__input-error">
          </span>
        </PopupWithForm>
        <PopupWithForm title='Вы уверены?' name='delete' buttonTitle='Да' onClose={this.closeAllPopups}/>
        <EditAvatarPopup onUpdateAvatar={this.onUpdateAvatar} isOpen={this.props.isEditAvatarPopupOpen} onClose={this.closeAllPopups} />
        <ImagePopup card={this.props.isCardSelected} onClose={this.closeAllPopups}/>
      </main>
    )
  }
}

export default Main