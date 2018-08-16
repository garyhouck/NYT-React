import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
    render() {
        return (
            <div id="container">
            <h2>Search</h2>
            <form>
                <label> Topic </label><br />
                <input type="text" /><br />
                <label> Start Year </label><br />
                <input type="text" /><br />
                <label> End Year </label><br />
                <input type="text" /><br />
                <input type="button" value="SUBMIT" id="search" />
                </form>
            </div>
        )
     
    }
  }

export default Search;