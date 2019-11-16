import React from 'react';


class SearchResultItem extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick() {
    this.props.addMember(this.props.boardId, this.props.user.id).then(() => this.props.clearSearchTerm())
  }

  render () {
    return (
      <li onClick={this.handleClick}>
        {this.props.user.username}
      </li>
      )
  }
}

export default SearchResultItem;