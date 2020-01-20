import React from 'react';


class CardIndex extends React.Component {
  constructor(props) {
    super(props)

    this.openModall = this.openModall.bind(this)
  }


  openModall(boardId, listId, cardId) {
    return e => {
      this.props.openModal({modal: 'card-update', boardId: boardId, listId: listId, cardId: cardId }) 
    }
  }

  render() {
    if (!this.props.cards) {
      return null
    }

  const card_list = this.props.cards.map( card => {
      let cardChecklists; 
      let editcardbutton;
      if (card.checklists) {
        cardChecklists = Object.values(card.checklists)
        for (let i = 0; i < cardChecklists.length; i++) {
          if (cardChecklists[i].checked !== true) {
            editcardbutton = "edit-card-button";
            break;
         } else {
           editcardbutton = "edit-card-button-1" 
        }  
      }
    } else {
        editcardbutton = "edit-card-button" 
    }
    return <div className="card-index-box" key={card.id}>
            <button className={editcardbutton} onClick={this.openModall(this.props.boardId, this.props.listId, card.id)}>{card.card_name}</button>
            <button className="delete-card" onClick={() => this.props.deleteCard(this.props.boardId, this.props.listId, card.id)}>X</button>
          </div>  
    }
  )

    const card_list1 = this.props.cards.map(card => {
      let buttonFunc;
      let buttonName;
      if (card.memberIds.includes(this.props.user.id)) {
        buttonFunc = () => this.props.removeMember(this.props.boardId, this.props.listId, card.id, this.props.user.id);
        buttonName = 'leave';
      } else if (!card.memberIds.includes(this.props.user.id)) {
        buttonFunc = () => this.props.addMember(this.props.boardId, this.props.listId, card.id, this.props.user.id);
        buttonName = 'join';
      };
      let cardChecklists;
      let editcardbutton;
      if (card.checklists) {
        cardChecklists = Object.values(card.checklists)
        for (let i = 0; i < cardChecklists.length; i++) {
          if (cardChecklists[i].checked !== true) {
            editcardbutton = "edit-card-button";
            break;
          } else {
            editcardbutton = "edit-card-button-1"
          }
        }
      } else {
        editcardbutton = "edit-card-button"
      }
        return (
        <div className="card-index-box" key={card.id}>
          <button className={editcardbutton} onClick={this.openModall(this.props.boardId, this.props.listId, card.id)}>{card.card_name}</button>
          <button className="join-card" onClick={buttonFunc}>{buttonName}</button>
         </div>
        )
    })

    if (this.props.user.id === this.props.board.owner_id) {
      return (
        <div>
          {card_list}
        </div>
      )
    } else {
      return (
        <div>
          {card_list1}
        </div>
      )
    }
  }
}

export default CardIndex;