import React from 'react'
import TweeteLogo from '../../assets/img/twitter-logo.png';

import './Header.scss';

export const Header = () => {
    return (
      <div className='header'>
          <img src={TweeteLogo} alt="Tweet Simulator" />
          <h1>Tweet Simulator</h1>
      </div>
    )
}
