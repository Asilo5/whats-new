import React, { Component } from 'react';
import './SearchForm.css';
// import entertainment from '../../data/entertainment';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
        news: ''
    }
  }

  findArticle = (e) => {
    e.preventDefault();

    this.props.changeNews(e, e.target.value)
  }

  render () {
    return (
      <form>
        <input 
          className='search-input'
          type='text' 
          name=''
          placeholder='Search for news article here.'
          value={this.state.news}
          onChange={e => this.findArticle}
        />
        <button className='search-button'> Search Now </button>
      </form>
    )
  }
}

export default SearchForm;