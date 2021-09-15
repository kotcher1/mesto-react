import React from 'react'

export default class Card extends React.Component {

  constructor(props) {
    super(props);
    this.card = props.card;
    this.onCardClick = props.onCardClick;
  }

  handleClick = () => {
    this.props.onCardClick(this.props.card);
  }  
  
  render() {
    return (
      <div className="places__card">
        <img className="places__image" src={this.card.link} alt=" " onClick={this.handleClick} />
        <div className="places__name-line">
          <p className="places__name">
            {this.card.name}
          </p>
          <div className="places__like-container">
            <div className="places__like">
      
            </div>
            <p className="places__like-number">
              {this.card.likes.length}
            </p>
          </div>
        </div>
        <button className="places__delete-button" type="button">
        </button>
      </div>
    )
  }
}