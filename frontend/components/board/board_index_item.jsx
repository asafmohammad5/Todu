import React from 'react';

export const BoardIndexItem = props => (
  <h1 className="board-index-item">
    <div className="board-index-project"> {props.board.project_name} </div>
  </h1>
)
