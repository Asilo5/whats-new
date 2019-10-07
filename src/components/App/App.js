import React, { Component } from 'react';
import './App.css';

import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';
import NewsContainer from '../NewsContainer/NewsContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allNews: '',
      news: ''
    }
  }

componentDidMount = () => {
  fetch(`https://whats-new-api.herokuapp.com/api/v1/news`)
  .then(response => response.json())
  .then(data => this.setState({ allNews: data, news: data.local}))
  .catch(error => console.log())
}  

changeNews = (chosenNews) => {
  this.setState({
    news: chosenNews
  })
}

findNews = (title) => {
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
          <Menu allNews={this.state.allNews} changeNews={this.changeNews} />
          <section className='main-news'>
            <SearchForm  findNews={this.findNews} />
            {this.state.news && <NewsContainer news={this.state.news} />}
          </section>
      </section>
    );
  }
}

export default App;
