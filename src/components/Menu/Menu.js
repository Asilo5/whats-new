import React from 'react';
import './Menu.css'
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';

const Menu = (props) => {
    
    return (
      <div className='menu'>
        <h1>What's <span className='new-h1'>New?</span></h1>

        <button onClick={() => props.changeNews(local)} className='menu-button'>Local News</button>
        <button onClick={() => props.changeNews(technology)} className='menu-button'>Technology</button>
        <button onClick={() => props.changeNews(entertainment)} className='menu-button'>Entertainment</button>
        <button onClick={() => props.changeNews(science)}  className='menu-button'>Science</button>
        <button onClick={() => props.changeNews(health)}  className='menu-button'>Health</button>
      </div>
    )
}


export default Menu;