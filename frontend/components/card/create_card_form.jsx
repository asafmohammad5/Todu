import React from "react"

class CreateCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      card_name: '',
      description: '',
      comments: '',
      due_date: ''
    }

    this.submit = this.submit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  submit(e) {
    e.preventDefault();
    this.props.createCard(this.state).then(this.props.closeModal)
  }


  render() {
    return (
      <div>
        <form className="modal-form" onSubmit={this.submit}>
          <h3>Card info</h3>
      
          <div onClick={this.props.closeModal} className="close-x">X</div>
         
          <div>
            <label>
              <input
                className="modal-card-name"
                type="text"
                value={this.state.card_name}
                onChange={this.update('card_name')}
                placeholder="Card name"
              />
            </label>

            <label>
              <input
                className="modal-card-description"
                type="text"
                value={this.state.description}
                onChange={this.update('description')}
                placeholder="Description"
              />
            </label>

            <label>
              <input
                className="modal-card-duedate"
                type="date"
                value={this.state.due_date}
                onChange={this.update('due_date')}
                placeholder="Date"
              />
            </label>

            <label>
              Add Comments
              <textarea 
              placeholder="Enter comment"
              value={this.state.comments}
              onChange={this.update('comments')}
             />
            </label>

            <button className="modal-create-card">Create Card</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateCard;