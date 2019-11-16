import React from 'react'
import SearchResults from './search_results';

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {searchTerm: ""}
    this.update = this.update.bind(this)
    this.clearSearchTerm = this.clearSearchTerm.bind(this)
  }

  update(e) {
     this.setState({ searchTerm: e.currentTarget.value });
  }

 clearSearchTerm () {
   this.setState({searchTerm: ''})
 }

  render () {
    let results;
    if (this.state.searchTerm.length > 0) {
      results = <SearchResults 
        searchTerm={this.state.searchTerm} 
        searchUsers={this.props.searchUsers} 
        users={this.props.users}
        clearSearchResults={this.props.clearSearchResults}
        boardId={this.props.boardId}
        addMember={this.props.addMember}
        clearSearchTerm={this.clearSearchTerm}
      />
    }
    return (
      <div>
        <input
         type="text"
         placeholder="Search user"
         value={this.state.searchTerm}
         onChange={this.update}
        />
        {results}
      </div>
    )
  }
}

export default Search;