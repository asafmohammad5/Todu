import React from 'react';
import { connect } from 'react-redux';
import CreateCard from './create_card_form';
import { updateCard, fetchCard } from '../../actions/card_actions';
import { closeModal } from "../../actions/modal_actions";
import { cardCollaborators } from '../../reducers/selectors';

class UpdateCard extends React.Component {
  componentDidMount () {
    this.props.fetchCard(this.props.boardId, this.props.listId, this.props.cardId)
  }

  render () {
    if (!this.props.card) return null;

    return (
      <CreateCard 
        action={this.props.action}
        card={this.props.card}
        closeModal={this.props.closeModal}
        formType={this.props.formType}
        boardId={this.props.boardId}
        listId={this.props.listId}
        cardId={this.props.cardId}
        state={this.props.state}
        board={this.props.board}
        users={this.props.users}
      />
    )
  }
}

const msp = (state, ownProps) => {
  let card = state.entities.cards[ownProps.cardId]
  let users;
  if (card) {
    users = cardCollaborators(state, card)
  }
  return {
    boardId: ownProps.boardId,
    listId: ownProps.listId,
    cardId: ownProps.cardId,
    formType: 'Update card',
    state,
    board: state.entities.boards[ownProps.boardId],
    card,
    users
  }
}

const mdp = dispatch => ({
  action: (boardId, listId, card) => dispatch(updateCard(boardId, listId, card)),
  fetchCard: (boardId, listId, cardId) => dispatch(fetchCard(boardId, listId, cardId)),
  closeModal: () => dispatch(closeModal())
})

export default connect(msp, mdp)(UpdateCard)