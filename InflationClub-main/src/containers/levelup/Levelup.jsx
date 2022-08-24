import React, { Component } from "react";
import Mybox from "../../assets/texture/mytexture/box.png";
import Myfloor from "../../assets/texture/mytexture/floor.jpg";
import Myplayer from "../../assets/texture/mytexture/Player.webp";
import Mywall from "../../assets/texture/mytexture/wall.jpg";
import Mytarget from "../../assets/texture/mytexture/target.webp";
import Myplayer_changed from "../../assets/inflation_logo.png"
import Mypigbox_changed_1 from "../../assets/texture/mytexture/pig_change_1.png"
import Mypigbox_changed_2 from "../../assets/texture/mytexture/pig_change_2.png"
import Mypigbox_changed_3 from "../../assets/texture/mytexture/pig_change_3.png"
import Mypigbox_changed_4 from "../../assets/texture/mytexture/pig_change_4.png"
import Mypigbox_changed_5 from "../../assets/texture/mytexture/pig_change_5.png"
import Mypigbox_changed_6 from "../../assets/texture/mytexture/pig_change_6.png"
import Mypigbox_changed_7 from "../../assets/texture/mytexture/pig_change_7.png"
import leveluppic from '../../assets/levelup.png'


import './levelup.css';


class team extends Component {


    componentDidMount() {
        
    
    }

        

    render() {
        return (
            <div>
                <div className="gradient-pushing"></div>
                {/* <div className='pushing-box'>
                    
                    <div >
                        <canvas  width="700" height="700" id="canvas"></canvas>
                    </div>
                </div> */}
                <div className='a-intro'>
                    <div className='team-intro'>
                        <img src={leveluppic} alt="ceo"/>

                    </div>
                </div>

            </div>
        
    )
    }
}

export default team