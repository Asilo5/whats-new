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
// import { all } from 'q';


class App extends Component {
  constructor() {
    super();
    this.state = {
      news: local
    }
  }

changeNews = (chosenNews) => {

  this.setState({
    news: chosenNews
  })
}

findNews = (e, title) => {
  e.preventDefault();

  let newState = this.state.news.filter((article) => {
    let lowerCaseArticle = article.headline.toLowerCase()
    return lowerCaseArticle.includes(title.toLowerCase())
  });

  this.setState({
    news: newState
  })
}

  render () {
    return (
      <section className="app">
          <Menu changeNews={this.changeNews} />
          <section className='main-news'>
            <SearchForm changeNews={this.changeNews} findNews={this.findNews} />
            <NewsContainer news={this.state.news} />
          </section>
      </section>
    );
  }
}

export default App;
