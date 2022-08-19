import React from 'react';
import './SearchBar.css';

const SearchBarName=`Search`;
class SearchBar extends React.Component {
	handleSearch = (e) => {
        this.setState (() => {
            this.props.onSearch(e.target.value.toLowerCase());
        })
      }

render () {
  return (
    <>
		<form id="searchForm">
		  <div className="search-menu">
		    <div className="search-bar">
		     <input type="search" className="search-box" placeholder='Search notes'
			   onChange={(event) => {this.handleSearch(event)}}  />
		     </div>
		   <button type="button" className="search-button">{SearchBarName}</button>	  
		  </div>
		</form>
    </>
  )
 }
}

export default SearchBar;
