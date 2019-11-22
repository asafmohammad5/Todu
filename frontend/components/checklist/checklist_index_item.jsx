import React from "react"

class CheckListIndexItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.props.checklist

    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
  }

  handleCheckboxChange(e) {
    this.setState({
      ...this.state,
      checked: e.currentTarget.checked,
    }, () => {
      this.props.updateChecklist(this.props.boardId, this.props.listId, this.props.cardId, this.state) 
    });
  }

  render () {
    return (
          <label>
            <input
              type="checkbox"
              name={this.props.checklist.name}
              checked={this.state.checked}
              onChange={this.handleCheckboxChange}
            />
            {this.props.checklist.name}
          </label>
    ) 
  }
}

export default CheckListIndexItem;