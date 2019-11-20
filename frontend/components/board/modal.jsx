import React from 'react';
import CreateBoard from './create_board_container';
import CreateCard from '../card/create_card_container';

function Modal({ modal, closeModal, boardId, listId }) {
  if (!modal) {
    return null;
  }
  
  let component;
  switch (modal) {
    case 'create':
      component = <CreateBoard />;
      break;
    case 'card-create':
      component = <CreateCard boardId={boardId} listId={listId}/>;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

export default Modal;