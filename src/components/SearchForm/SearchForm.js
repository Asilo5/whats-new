import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
        local: ''
    }
  }

  render () {
    return (
      <form>
        <input 
          className='search-input'
          type='text' 
          name='title'
          placeholder='Search for news article here.'
          value=''
        />
        <button className='search-button'> Search Now </button>
      </form>
    )
  }
}

export default SearchForm;