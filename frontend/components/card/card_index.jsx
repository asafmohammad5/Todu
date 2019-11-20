import React from 'react';


class CardIndex extends React.Component {

  componentDidMount() {
    this.props.fetchCards(this.props.boardId, this.props.listId)
  }
  
  render() {
    if (!this.props.cards) {
      return null
    }

    const card_list = this.props.cards.map( card => 
      <div className="card-index-box" key={card.id}>
          {card.card_name} 
      </div>  
    )
    return (
      <div>
        {card_list} 
      </div>
    )
  }
}

export default CardIndex;