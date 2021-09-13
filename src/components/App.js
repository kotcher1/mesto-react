import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import React from 'react';

class App extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isEditAvatarPopupOpen: false,
    }
  }

  handleEditAvatarClick = () => {
    this.setState({ isEditAvatarPopupOpen: true });
    // document.querySelector('.popup_type_avatar').classList.add('popup_opened');
  }

  handleEditProfileClick = () => {
    this.setState({ isEditProfilePopupOpen: true });
    // document.querySelector('.popup_type_edit').classList.add('popup_opened');
  }

  handleAddPlaceClick = () => {
    this.setState({ isAddPlacePopupOpen: true });
    // document.querySelector('.popup_type_add').classList.add('popup_opened');
  }

  

  render() {
    return (
      <div className="page">
        <Header/>
        <Main onEditProfile={this.handleEditProfileClick} 
              onAddPlace={this.handleAddPlaceClick} 
              onEditAvatar={this.handleEditAvatarClick}
              isEditAvatarPopupOpen={this.state.isEditAvatarPopupOpen}
              isEditProfilePopupOpen={this.state.isEditProfilePopupOpen}
              isAddPlacePopupOpen={this.state.isAddPlacePopupOpen}/>
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
    );
  }

}

export default App;
