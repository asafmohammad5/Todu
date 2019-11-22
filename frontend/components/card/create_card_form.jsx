import React from "react";
import ChecklistIndex from '../checklist/checklist_index_container';

class CreateCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = { card: this.props.card, checklist: { name: "" } }
    this.submit = this.submit.bind(this);
  }
  
  updateCard(field) {
    return e => {
      let card = Object.assign({}, this.state.card, { [field]: e.currentTarget.value})
      this.setState({
      card: card
    });
  }}

  updateChecklist(field) {
    
    return e => {
     
      this.setState({ checklist: { [field]: e.currentTarget.value } });
      }
    }


  submit(e) {
    e.preventDefault();
    this.props.action(this.props.boardId, this.props.listId, this.state.card).then(this.props.closeModal)
  }

  render() {
    let cardName;
    if (this.props.card.card_name === '') {
      cardName = this.props.formType
    } else {
      cardName = this.props.card.card_name
    }


    const cardUsers = this.props.users.map( user => 
      <div key={user.id} className="card-users">
       <div className="card-user">{user.username}</div>
      </div>
     )

    if (this.props.state.session.id === this.props.board.owner_id && this.props.card.card_name === '') {
      return (
        <div>
          <form className="modal-form-card" onSubmit={this.submit}>
            <h3>{cardName}</h3>
        
            <div onClick={this.props.closeModal} className="close-x">X</div>
          
            <div className="modal-form-card-div">
              <div className="top-level-div">
               <div className="modal-card-name-input">
                <input
                  className="modal-card-name"
                  type="text"
                  value={this.state.card.card_name}
                  onChange={this.updateCard('card_name')}
                  placeholder="Card name"
                />
               </div>
              <div className="modal-form-top-part">
               
                <label className="due-date-label">
                    <div className="due-date">Due Date</div>
                  <input
                    className="modal-card-duedate"
                    type="date"
                    value={this.state.card.due_date}
                    onChange={this.updateCard('due_date')}
                    placeholder="Date"
                  />
                </label>
              </div>
              </div>

              <label className="description">
                <div className="description-1">Description</div>
                <input
                  className="modal-card-description"
                  type="text"
                  value={this.state.card.description}
                  onChange={this.updateCard('description')}
                  placeholder="Description"
                />
              </label>

              <label className="comments">
                <div className="comment">Add Comment</div>
                <textarea
                className="textarea-create" 
                placeholder="Enter comment"
                value={this.state.card.comments}
                onChange={this.updateCard('comments')}
              />
              </label>

              <button className="modal-create-card-0">{this.props.formType}</button>
            </div>
          </form>
        </div>
      )
    } else if (this.props.state.session.id === this.props.board.owner_id) {
      return (
        <div>
          <form className="modal-form-card" onSubmit={this.submit}>
            <h3>{cardName}</h3>

            <div onClick={this.props.closeModal} className="close-x">X</div>

            <div className="modal-form-card-div">
              <div className="top-level-div">
                <div className="modal-card-name-input">
                  <input
                    className="modal-card-name"
                    type="text"
                    value={this.state.card.card_name}
                    onChange={this.updateCard('card_name')}
                    placeholder="Card name"
                  />
                </div>
                <div className="modal-form-top-part">
                  <label className="members-label">
                    <div className="members-head">Members</div>
                    <div className="members">{cardUsers}</div>
                  </label>

                  <label className="due-date-label-1">
                    <div className="due-date-1">Due Date</div>
                    <input
                      className="modal-card-duedate"
                      type="date"
                      value={this.state.card.due_date}
                      onChange={this.updateCard('due_date')}
                      placeholder="Date"
                    />
                  </label>
                </div>
              </div>

              <label className="description">
                <div className="description-2">Description</div>
                <input
                  className="modal-card-description"
                  type="text"
                  value={this.state.card.description}
                  onChange={this.updateCard('description')}
                  placeholder="Description"
                />
              </label>

              
                <h2 className="checklist-heading">Checklist</h2>
                 <div className="checklist-index"><ChecklistIndex boardId={this.props.boardId} listId={this.props.listId} cardId={this.props.card.id}/></div>
                 <div>
                  <div className="checklist-input-add">
                   <input 
                      className="checklist-input"
                      type="text"
                      placeholder="Add checklist"
                      onChange={this.updateChecklist('name')}
                    />
                    <button className="checklist-add-button" onClick={() => this.props.createChecklist(this.props.boardId, this.props.listId, this.props.cardId, this.state.checklist)}>Add checklist</button>
                  </div>
                </div>
              

              <label className="comments">
                <div className="comment">Add Comment</div>
                <textarea
                  className="textarea-create"
                  placeholder="Enter comment"
                  value={this.state.card.comments}
                  onChange={this.updateCard('comments')}
                />
              </label>

              <button className="modal-create-card">{this.props.formType}</button>
            </div>
          </form>
        </div>
      )
    } else {
      return (
        <div>
          <form className="modal-form-card" onSubmit={this.submit}>
            <h3>{this.props.card.card_name}</h3>

            <div onClick={this.props.closeModal} className="close-x">X</div>

            <div className="modal-form-card-div">
              <div className="top-level-div-1">

                <label className="member-label">
                  <div className="members-head-1">Members</div>
                  <div className="members">{cardUsers}</div>
                </label>
                
                <label className="due-date-label-2">
                  <div className="due-date-2">Due Date</div>
                    <p className="due-date-p">{this.state.card.due_date}</p>
                </label>
              </div>

              <label className="description">
                <div className="description-3">Description</div>
                
                <p className="modal-card-description-1">{this.state.card.description}</p>
              </label>

              
              <h2 className="checklist-heading">Checklist</h2>
              <div className="checklist-index"><ChecklistIndex boardId={this.props.boardId} listId={this.props.listId} cardId={this.props.card.id} /></div>
              

              <label className="comments">
                <div className="comment">Add Comment</div>
                <textarea
                  className="textarea-create"
                  placeholder="Enter comment"
                  value={this.state.card.comments}
                  onChange={this.updateCard('comments')}
                />
              </label>

              <button className="modal-create-card-2">{this.props.formType}</button>
            </div>
          </form>
        </div>
      )
    }
  }
}

export default CreateCard;