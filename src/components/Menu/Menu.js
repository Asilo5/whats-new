import React from 'react';
import './Menu.css'

const Menu = (props) => {
    
    return (
      <div className='menu'>
        <h1>What's <span className='new-h1'>New?</span></h1>

        <button onClick={(e) => props.changeNews(e, 'local')} className='menu-button'>Local News</button>
        <button onClick={(e) => props.changeNews(e, 'technology')} className='menu-button'>Technology</button>
        <button onClick={(e) => props.changeNews(e, 'entertainment')} className='menu-button'>Entertainment</button>
        <button onClick={(e) => props.changeNews(e, 'science')}  className='menu-button'>Science</button>
        <button onClick={(e) => props.changeNews(e, 'health')}  className='menu-button'>Health</button>
      </div>
    )
}


export default Menu;