import React from 'react';
import './InfoBar.css';
import closeIcon from '../../icons/closeIcon.png'
import onlineIcon from '../../icons/onlineIcon.png'
const InforBar = ({room}) =>(
    <div className="infoBar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src={onlineIcon} alt="online image"/>
            <h3>{room}</h3>
        </div>  
        <div  className="rightInnerContainer">
        <a href="/">
            <img style={{
            width:"20px"
              }}
            src={closeIcon}
            alt="close image"
              />
        </a>
        </div>
    </div>
)
export default InforBar;