import React from 'react';
import './Menu.css'

const Menu = () => {
    return (
      <div className='menu'>
        <h1>What's <span className='new-h1'>New?</span></h1>
        <button className='menu-button'>Local News</button>
        <button className='menu-button'>Technology</button>
        <button className='menu-button'>Entertainment</button>
        <button className='menu-button'>Science</button>
        <button className='menu-button'>Health</button>
      </div>
    )
}


export default Menu;