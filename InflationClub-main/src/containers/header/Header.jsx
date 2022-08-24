import React from 'react';
import './header.css';
import w_logo from '../../assets/w_logo.png';

function Header() {
  return (
    <div class="home__info">


        <div className='home__my-slogan-name'>
          <img src={w_logo} alt="logo" />
        </div>
	    <div class="app-sub-title home__sub-title">
			A Smoother Connection  
		    
	    </div>
	    <div class="app-small-title app-small-title--with-block home__small-title">
			For your digital soul
	    </div>
	    <div class="app-small-text home__small-text-1">
			InflationClub creates a unique digital soul network
		    <br/>
		    {/* with sustainable economy */}
	    </div>
	    <div class="app-small-text home__small-text-2">
			enabling on-chain credit through AI-powered standardized
		    <br/>
			verification tools and cross-verification.
	    </div>
    </div>

  )
}

export default Header