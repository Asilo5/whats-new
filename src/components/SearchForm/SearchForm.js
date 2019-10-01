import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render () {
    return (
      <form>
        <input />
        <button className='search-button'> Search Now </button>
      </form>
    )
  }
}

export default SearchForm;