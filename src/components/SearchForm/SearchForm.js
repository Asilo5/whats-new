import React, { Component } from 'react';
import './SearchForm.css';


class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
        headline: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name] : e.target.value })
  }

  findArticle = (e) => {
    e.preventDefault();

    this.props.findNews(e, this.state.headline);

    this.setState({
        headline: ''
    })
  }

  render () {
    return (
      <form>
        <input 
          className='search-input'
          type='text' 
          name='headline'
          placeholder='Search for news article here.'
          value={this.state.headline}
          onChange={e => this.handleChange(e)}
        />
        <button className='search-button' onClick={this.findArticle}> Search Now </button>
      </form>
    )
  }
}

export default SearchForm;