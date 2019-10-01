import React from 'react';
import './Menu.css'

const Menu = () => {
    return (
      <div className='menu'>
        <h1>What's <span className='new-h1'>New</span></h1>
        <button>Local News</button>
        <button>Technology</button>
        <button>Entertainment</button>
        <button>Science</button>
        <button>Health</button>
      </div>
    )
}


export default Menu;