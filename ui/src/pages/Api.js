import React from 'react';
import './Api.css';

function Api() {
  return (
  <div className='api-container'>
      <h3 className="api-head">Visit Github Project to know more</h3>
      <div className="api-box-container">
        <i className="fab fa-github-square"></i>
        <a href='https://github.com/AlwinGC/file-share' className='api-link'>Click Here To Visit</a>
      </div>
  </div>
  );
}

export default Api;
