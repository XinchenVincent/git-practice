import React, {useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/inflation_logo.png';
import twittericon from '../../assets/twitter-icon.png';
import insicon from '../../assets/ins-icon.png';
import discordicon from '../../assets/discord-icon.png';
import youtubeicon from '../../assets/youtube-icon.png';
// import {Link} from 'react-router-dom'
// import { Header, Dapps, Poster, Social, Team} from './containers/index.js';

const Menu = () => (
  <nav>
  <ul>
  <li className='center'><a href='/dapps' className='menu-item' >LAISSEZTIMES</a></li>
  {/* <li className='center'><Link to='./dapps/Dapps'></Link></li> */}
  <li className='center'><a href='/dapps' className='menu-item' >LAISSEZPASSER</a></li>
  <li className='center'><a href='/dapps' className='menu-item'>PIGDESTRAIN</a></li>
  </ul>
  </nav>
)

function Navbar() {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='ic3__navbar'>
      <div className='ic3__navbar-bg-glass'></div>
      <div className='ic3__navbar-links'>
        <div className='ic3__navbar-links_logo'>

        

          
        <a href='/'  >
          <img src={logo} alt="logo" />
        </a>
        </div>
        <div className='ic3__navbar-links_container'>
          <Menu/>
        </div>
      </div>

      <div className='ic3__navbar-social-media'>
        <li><a href="https://twitter.com/InflationClub" rel="noopener noreferrer" target="_blank">
          <img  src={twittericon} alt="twitter" /> </a></li>
          
          <li><a href="https://www.instagram.com/inflationClub" rel="noopener noreferrer" target="_blank">
            <img src={insicon} alt="instgram"/></a></li>
          
          <li><a href="https://discord.gg/bEk7Vxckqw" rel="noopener noreferrer" target="_blank">
            <img src={discordicon} alt="discord"/></a></li>

          <li><a href="https://www.youtube.com/channel/UCmWxRjJxaAgq2jG6_cBXJcg" rel="noopener noreferrer" target="_blank">
            <img src={youtubeicon} alt="youtube"/></a></li>

      </div>

      <div className='ic3__navbar-sign'>
        <button type='button'>Connect Wallet</button>
      </div>
      <div className='ic3__navbar-menu'>
        {toggleMenu
         ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false) }/>
         : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true) }/>
        }
        {
          toggleMenu && (
            <div className='ic3__navbar-menu_container scale-up-center'>
              <div className='ic3__navbar-menu_container-links'>
                <Menu />
                <div className='ic3__navbar-menu_container-links-sign'>
                  <p> Sign in</p>
                  <button type='button'>Sign up</button>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar

