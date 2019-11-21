import React from 'react';
import CardIndex from '../card/card_index_container';


class ListIndex extends React.Component {
  constructor(props) {
    super(props)
  
    this.openModal = this.openModal.bind(this)
  }

  openModal (boardId, listId) {
    return e => {
    this.props.openModal({modal: 'card-create', boardId: boardId, listId: listId})
    }
  }
  
  render () {
    if (!this.props.lists) {
      return null
    }

    const board_lists = this.props.lists.map(list => 
      <div key={list.id}>
        <button className="list-index-button" onClick={() => this.props.deleteList(this.props.boardId, list.id)}>Delete</button>
        <div className="list-index-box">
          <div className="list-index-item">{list.list_name}</div>
            <ul>
              <CardIndex boardId={this.props.boardId} listId={list.id} />
            </ul>
          <button className="card-index-create" onClick={this.openModal(this.props.boardId, list.id)}>Add card...</button>
          </div> 
      </div>
      )

  
    const board_lists1 = this.props.lists.map(list =>
      <div key={list.id}>
        <div className="list-index-box">
          <div className="list-index-item">{list.list_name}</div>
          <ul>
            <CardIndex boardId={this.props.boardId} listId={list.id} />
          </ul>
          </div>
      </div>)

    if (this.props.board.owner_id === this.props.user.id ) {
      return (
        <div className="list-index-list">
          {board_lists} 
        </div>  
      ) 
     } else {
        return (
          <div className="list-index-list">
            {board_lists1}
          </div> 
        )
      }
  }
}

export default ListIndex;