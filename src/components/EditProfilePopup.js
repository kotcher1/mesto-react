import React from 'react'
import PopupWithForm from './PopupWithForm'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

class EditProfilePopup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '', 
    }
  }

  static contextType = CurrentUserContext

  handleNameChange = (e) => {
    this.setState({name: e.target.value})
  }

  handleDescriptionChange = (e) => {
    this.setState({description: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onUpdateUser({
      name: this.state.name,
      about: this.state.description,
    });
  }

  componentDidMount() {
    this.setState({name: this.context.name, description: this.context.about})
  }

  render() {

    return (
      <PopupWithForm onSubmit={this.handleSubmit}  title='Редактировать профиль' name='edit' buttonTitle='Сохранить' isOpen={this.props.isOpen} onClose={this.props.onClose}>
        <input className="popup__input" type="text" placeholder="Имя" id="name" defaultValue="" name="fullname" required minLength="2" maxLength="40" onChange={this.handleNameChange}/>
        <span className="popup__input-error">
        </span>
        <input className="popup__input" type="text" defaultValue="" placeholder="Род деятельности" id="job" name="job" required minLength="2" maxLength="200" onChange={this.handleDescriptionChange}/>
        <span className="popup__input-error">
        </span>
    </PopupWithForm>
    )
  }
}

export default EditProfilePopup