import React from 'react';
import './Menu.css';

const Menu = ({allNews, changeNews}) => {
    return (
      <div className='menu'>
        <h1>What's <span className='new-h1'>New?</span></h1>

        <button onClick={() => changeNews(allNews.local)} className='menu-button'>Local News</button>
        <button onClick={() => changeNews(allNews.technology)} className='menu-button'>Technology</button>
        <button onClick={() => changeNews(allNews.entertainment)} className='menu-button'>Entertainment</button>
        <button onClick={() => changeNews(allNews.science)}  className='menu-button'>Science</button>
        <button onClick={() => changeNews(allNews.health)}  className='menu-button'>Health</button>
      </div>
    )
}


export default Menu;