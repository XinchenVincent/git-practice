import React, { Component } from "react";
import './digitalsoul.css';
import twitter_icon from '../../assets/twitter-color.png'
import discord_icon from '../../assets/discord-color.png'
import reddit_icon from '../../assets/reddit.png'
import spotify_icon from '../../assets/spotify.png'
import ins_icon from '../../assets/instagram-color.png'
import Steam_icon from '../../assets/Steam_icon_logo.svg.png'

import phone_icon from '../../assets/phone.png'
import car_icon from '../../assets/car.png'
import house_icon from '../../assets/house.png'
import pigbank_icon from '../../assets/pigbank.png'

import inflation_logo from '../../assets/inflation_logo.png'
import profileimg from '../../assets/card.png'

class team extends Component {

 
    
    

        

    render() {
        return (
            <div className='intrp' >

<                   div className="gradient-digitalsoul"></div>


                    <div className='gradient-digitalsoul'>
                        <h1>digitalsoul</h1>
                    </div>
                    <div className='gradient-digitalsoul'>
                        <h1>digitalsoul</h1>
                    </div>

                    <div className='left-digitalsoul'>
                        

                        <h1>Levels</h1>
                        <li>Digital identity impact: Reflect Your Identity of Diversity and Density through Level.(Both Web2 and Web3)</li>
                        <li>Ownership: Own your identity and make it profitable</li>
                        <h1>Upgrade</h1>
                        <li>Simple and Reliable Verification with on-Chain and Off Chain Activities</li>
                        <h1>Badges</h1>
                        <li>Obtain Badges :Through Special Event and Activities.</li>
                        <li>Membership:It represent Your Community Contribution and Incentive Voucher</li>
                        <h1>Benefits</h1>
                        <li>Gain rights and benefits based on your level</li>

                    </div>

                    <div className='right-digitalsoul'>
                        <div className='digitalsoul-cardfield'>
                            <div className='dapps-feature-wrp1' >
                            <div className='profile'> <img  className='profileimg' src={profileimg} alt="profileimg"/> </div>
                            </div>

                        </div>
                        <div className='expfiled'>
                            {/* <img src={inflation_logo} alt="inflation_logo"/> */}
                            {/* <div className='web3-text1'><h1>Web3</h1></div> */}
                            {/* <div className='web3-text2'>
                            <h1>Defi</h1>
                            <h1>NFT</h1>
                            <h1>Games</h1>
                            <h1>Profile</h1></div> */}
                            <div  className='dapps-discord'>
                            <a href="https://discord.gg/bEk7Vxckqw" rel="noopener noreferrer" target="_blank"><h2 class="btn-transition">Connect Digital Soul</h2></a>
                            </div>

                        </div>
                    </div>

            </div>
        
    )
    }
}

export default team