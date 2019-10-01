import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';
import NewsContainer from '../NewsContainer/NewsContainer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      news: local
    }
  }

changeNews = (e, chosenNews) => {
  e.preventDefault();
  chosenNews = technology;
  this.setState({
    news: chosenNews
  })
}

  render () {
    console.log(this.state.local);
    return (
      <section className="app">
          <Menu changeNews={this.changeNews} />
          <section className='main-news'>
            <SearchForm />
            <NewsContainer news={this.state.news} />
          </section>
      </section>
    );
  }
}

export default App;
