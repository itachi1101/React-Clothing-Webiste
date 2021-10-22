import React from "react";


// this is a higher order component 
import {withRouter} from 'react-router-dom'

import "./menu-item.styles.scss";
const MenuItem = ({ title, imageUrl, size,history,linkUrl,match }) => (
  <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

// this is passing it in higher order component
// we are returned modified component having location, history and other properties which are earlier not present
export default withRouter(MenuItem);
