import React from 'react';

class ListIndex extends React.Component {
  render () {
    if (!this.props.lists) {
      return null
    }

    const board_lists = this.props.lists.map(list => 
      <div>
        <button className="list-index-button" onClick={() => this.props.deleteList(this.props.boardId, list.id)}>Delete</button>
        <div className="list-index-box">
          <div className="list-index-item">{list.list_name}</div>
          </div> 
      </div>)

    const board_lists1 = this.props.lists.map(list =>
      <div>
        <div className="list-index-box">
          <div className="list-index-item">{list.list_name}</div>
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