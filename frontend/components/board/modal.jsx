import React from 'react';
import CreateBoard from './create_board_container';
import CreateCard from '../card/create_card_container';
import UpdateCard from '../card/edit_card_form';

function Modal({ modal, closeModal, boardId, listId, cardId }) {
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
    case 'card-update':
      component = <UpdateCard boardId={boardId} listId={listId} cardId={cardId} />
      break;
    default:
      return null;
  }
  if (modal === 'create' ) {
    return (
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          {component}
        </div>
      </div>
    );
    } else {
      return (
        <div className="modal-background" onClick={closeModal}>
          <div className="modal-child-1" onClick={e => e.stopPropagation()}>
            {component}
          </div>
        </div>
      );
    }
}

export default Modal;