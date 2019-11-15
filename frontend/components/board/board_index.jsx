import React from 'react';
import {Link} from 'react-router-dom';
import {BoardIndexItem}  from './board_index_item';
import Modal from './modal_container';

class BoardIndex extends React.Component {
  componentDidMount () {
    this.props.fetchBoards();
  }

  render () {
    const boards = this.props.boards.map( (board) => <Link to={`/boards/${board.id}`} key={board.id}> <BoardIndexItem board={board} /> </Link>)
    return (
        <div className="board-index">

          <div className="board-create">
            <button className="board-index-create" onClick={() => this.props.openModal('create')}>Create board</button>
          </div>

          <Modal />

          <div className="created-boards">
            <h2 className="board-heading">My Boards</h2>
              <ul className="board-index-list">
               {boards}
              </ul>
          </div>

          <div className="joined-boards">
            <h2 className="board-heading">Joined Boards</h2>
          </div>

        </div>
    )
  }
}


export default BoardIndex;