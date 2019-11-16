import React from 'react';
import SearchResultItem from './search_result_item'

class SearchResults extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount () {
    this.props.searchUsers(this.props.searchTerm)
  }

  componentWillUnmount () {
    this.props.clearSearchResults();
  }


  render () {
    if (!this.props.users) {
      return null;
    }
   let usersLi = this.props.users.map( user => {
     return <SearchResultItem 
        user={user}
        addMember={this.props.addMember} 
        boardId={this.props.boardId}
        clearSearchResults={this.props.clearSearchResults}
        clearSearchTerm={this.props.clearSearchTerm}
      />
    })
    return (
      <ul>
        {usersLi}
      </ul>
    )
  }
}

export default SearchResults;