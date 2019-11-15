import React from "react"

class CreateBoard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      project_name: ''
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
    this.props.createBoard(this.state).then(this.props.closeModal)
  }

  
  render () {
    return (
      <div>
        <form className="modal-form" onSubmit={this.submit}>
          <h3>Choose a name</h3>
         <div onClick={this.props.closeModal} className="close-x">X</div>
          <div>
            <label>
             <input 
             className="modal-project-name"
              type="text" 
              value={this.state.project_name}
              onChange={this.update('project_name')}
              placeholder="Project name"
             />
            </label>

            <button className="modal-create-board">Create Board</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateBoard;