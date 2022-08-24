import React, { Component } from "react";
import './intro.css';
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

class team extends Component {

 
    
    

        

    render() {
        return (
            <div className='intrp' >

<                   div className="gradient-intro"></div>


                    <div className='gradient-problem'>
                        <h1>Solution</h1>
                    </div>
                    <div className='gradient-solution'>
                        <h1>Problem</h1>
                    </div>

                    <div className='left-Problem'>
                        

                        <h1>The Growth of Web3 is limited</h1>
                        <h1>a lack of Identity Verification</h1>
                        <li>There are no method to gain on-chain reputation and rights by mapping off-chain assets</li>
                        <li>Blank addresses can only acquire equity through a large amount of on-chain collateral or on-chain assets</li>
                        <li>Low cost of Sybil attack</li>
                    </div>

                    <div className='right-Solution'>
                        <div className='icon-field'>
                            <div className='web2-app'>
                                <h1>Web2-App</h1>
                                <img src={twitter_icon} alt="twitter"/>
                                <img src={discord_icon} alt="discord"/>
                                <img src={reddit_icon} alt="reddit"/>
                                <img src={spotify_icon} alt="steam"/>
                                <img src={ins_icon} alt="spotify"/>
                                <img src={Steam_icon} alt="instagram"/>
                            </div>

                            <div className='web2-asset'>
                                <h1>Web2-Asset</h1>
                                <img src={phone_icon} alt="phone_icon"/>
                                <img src={car_icon} alt="car_icon"/>
                                <img src={house_icon} alt="house_icon"/>
                                <img src={pigbank_icon} alt="pigbank_icon"/>
                            </div>
                        </div>
                        <div className='expfiled'>
                            <img src={inflation_logo} alt="inflation_logo"/>
                            <div className='web3-text1'><h1>Web3</h1></div>
                            <div className='web3-text2'>
                            <h1>Defi</h1>
                            <h1>NFT</h1>
                            <h1>Games</h1>
                            <h1>Profile</h1></div>
                        </div>


                    </div>

            </div>
        
    )
    }
}

export default team