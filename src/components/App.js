import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import React from 'react'
import {api} from '../utils/Api.js'
import { CurrentUserContext } from '../contexts/CurrentUserContext' 

class App extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isEditAvatarPopupOpen: false,
      selectedCard: {},
      currentUser: {},
    }
  }

  handleEditAvatarClick = () => {
    this.setState({ isEditAvatarPopupOpen: true });
  }

  handleEditProfileClick = () => {
    this.setState({ isEditProfilePopupOpen: true });
  }

  handleAddPlaceClick = () => {
    this.setState({ isAddPlacePopupOpen: true });
  }

  closeAllPopups = () => {
    this.setState({ isAddPlacePopupOpen: false, isEditProfilePopupOpen: false, isEditAvatarPopupOpen: false, selectedCard: {}});
  }

  handleCardClick = (card) => {
    this.setState({ selectedCard: card });
  }

  handleUpdateUser = ({name, about}) => {
    api.setUserInfo(name, about)
      .then((user) => {
        this.setState({currentUser: user});
        this.closeAllPopups();
      })
  }

  handleUpdateAvatar = ({avatar}) => {
    api.changeAvatar(avatar)
      .then((user) => {
        this.setState({currentUser: user});
        this.closeAllPopups();
      })
  }

  getUserInfo() {
    api.getUserInfo()
      .then((user) => {
        this.setState({currentUser: user});
      })
  }

  componentDidMount() {
    this.getUserInfo();
  }

  render() {
    return (
      <CurrentUserContext.Provider value={this.state.currentUser}>
        <div className="page">
          <Header/>
          <Main onEditProfile={this.handleEditProfileClick} 
                onAddPlace={this.handleAddPlaceClick} 
                onEditAvatar={this.handleEditAvatarClick}
                isEditAvatarPopupOpen={this.state.isEditAvatarPopupOpen}
                isEditProfilePopupOpen={this.state.isEditProfilePopupOpen}
                isAddPlacePopupOpen={this.state.isAddPlacePopupOpen}
                isCardSelected={this.state.selectedCard}
                closeAllPopups={this.closeAllPopups}
                onOpenPopup={this.handleCardClick}
                onUpdateUser={this.handleUpdateUser}
                onUpdateAvatar={this.handleUpdateAvatar}/>
          <Footer />
          <template id="card-template">
            <div className="places__card">
              <img className="places__image" src="#" alt=" " />
              <div className="places__name-line">
                <p className="places__name">
                </p>
                <div className="places__like-container">
                  <div className="places__like">
            
                  </div>
                  <p className="places__like-number">
                    0
                  </p>
                </div>
              </div>
              <button className="places__delete-button" type="button">
              </button>
            </div>
          </template>
        </div>
      </CurrentUserContext.Provider>
    );
  }

}

export default App;
