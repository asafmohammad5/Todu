import React from 'react';
import CheckListIndexItem from './checklist_index_item';

class ChecklistIndex extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render () {
    if (!this.props.checklists) {
      return null
    }

    const checklists = this.props.checklists.map( checklist => {
         return (
          <li key={checklist.id}>
            <CheckListIndexItem 
            checklist={checklist} 
            updateChecklist={this.props.updateChecklist} 
            boardId={this.props.boardId}
            listId={this.props.listId}
            cardId={this.props.cardId}
            />
             <button className="delete-checklist-button" onClick={() => this.props.deleteChecklist(this.props.boardId, this.props.listId, this.props.cardId, checklist.id)}>remove</button>
           </li>
         )
    })

    const checklists1 = this.props.checklists.map(checklist => {
      return (
        <li className="checklist-index-item">
          <CheckListIndexItem
            checklist={checklist}
            updateChecklist={this.props.updateChecklist}
            boardId={this.props.boardId}
            listId={this.props.listId}
            cardId={this.props.cardId}
          />
       </li>
      )
    })
    if (this.props.board.owner_id === this.props.user.id ) {
      return (
        <ul className="checklist-ul">
          {checklists}
        </ul>
      )
    } else {
      return (
       <ul className="checklist-ul">
          {checklists1}
      </ul>
      )
    }
  }
}

export default ChecklistIndex;

