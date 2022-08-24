import Parallax from 'parallax-js';
import Styled from "styled-components";
import { useEffect } from "react";

import './poster.css';

// Images
import Bg05 from "../../assets/svg/BG-Layered_cropped-1-01.svg";
import Bg04 from "../../assets/svg/BG-Layered_cropped-1-02.svg";
import Bg03 from "../../assets/svg/BG-Layered_cropped-1-03.svg";
import Bg02 from "../../assets/svg/BG-Layered_cropped-1-04.svg";
import Bg01 from "../../assets/svg/BG-Layered_cropped-1-05.svg";
import Planet01 from "../../assets/svg/bg_planet01.svg";
import Planet02 from "../../assets/svg/bg_planet02.svg";
import Foreground01 from "../../assets/svg/fg-02.svg";
import Foreground02 from "../../assets/svg/fg-03.svg";
import Foreground03 from "../../assets/svg/fg-04.svg";

const Scene = Styled.ul`
  margin:0;
  padding:0;
	width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-items: end;
	overflow: hidden;
  background: rgb(54,42,88);
  background: linear-gradient(180deg, rgba(54,42,88,1) 0%, rgba(107,69,116,1) 12%, rgba(183,119,152,1) 30%, rgba(255,202,172,1) 67%);

  & li {
    width: 110vw;
    height: 105%;
    margin-left: -5vw;
    overflow: hidden;
    display: grid;
    justify-content: center;
    align-items: end;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center bottom;
  }

  & li:nth-child(2){ background-image: url(${Bg05}); }
  & li:nth-child(3){ background-image: url(${Bg04}); }
  & li:nth-child(4){ background-image: url(${Bg03}); }
  & li:nth-child(5){ background-image: url(${Bg02}); }
  & li:nth-child(6){ background-image: url(${Bg01}); }

  & .planet1{
    width:75vw;
    max-width: 500px;
    position: absolute;
    top: 9vh;
    left: 10vw; 
  }

  & .planet2{
    width:15vw;
    max-width: 100px;
    position: absolute;
    top: 30vh;
    right: 15vw; 
  }

  & .FG1{
    width:100vw;
    position: absolute;
    bottom: 0px;
  }
`;

export default function Background() {
  useEffect(() => {
    const scene = document.getElementById("scene");
    new Parallax(scene);
  });

  const multiplyer = 0.075;

  return (
    <Scene id="scene">
      
      {/* <div class="TestDiv">
        <div class="app-sub-title home__sub-title poster_words">
        Your Digital Soul Is Coming 
        </div>
        <div class="app-small-title app-small-title--with-block home__small-title poster_words">
        Empowering Metaworlds
        </div>
        <div class="app-small-text home__small-text-1 poster_words">
        Inflation Club, IC in short, is a DID ecosystem
        <br/>
        with sustainable economy
        </div>
        <div class="app-small-text home__small-text-2 poster_words">
        The scope of the project covers the Editor, the Infra,
        <br/>
        and the Econs
        </div>
      </div> */}
        
      <div class="manifesto-wrp"><h2>MANIFESTO</h2><p> Halo my dear Pigdestrians, long way traveling here (What took you so long to be here)? Well welcome to the year of 2023! Now come take a sneak peek into this extreme magic realism world, where every single pigtizen, including you who are curious about the future and this world, is being suffered by ignited inflation: the soaring prices of daily life and go-crazy interest rates has squeezed every tiny penny out of pocket, Pigple have no means to live. This could also be your future my Pigdestrians, Awaken pigs are united to build this Inflation Pigs community. Together, Inflation Pigs can fight against hyperinflation, greedy filthy Wall Street bankers and also this uncontrollable inflation numbers game. </p><p> Inflation Pigs vowed to win back their own rights and power from these greedy filthy bloodsuckers, and forming a brand-new financial system, the Pig FED, which provides a reformative Defi DAPP and its Membership. All the member Pigs of the Pig Fed will have its own financial system and algorithmic stable currency, while Membership will provide Pigs' rights, such as allowing pigs to borrow cheaper, bloodless money on the chain; have its own music NFT, its own PFP, creating and embracing its own cultural NFTs, etc. </p><p> Now, what are you still waiting for my little Pigdestrians? Do you hear the Pigple sing? </p></div>

      <li data-depth={multiplyer * 0.3}>
                
        {/*slogan*/}

        <img className="planet1" src={Planet01} />
        <img className="planet2" src={Planet02} />
      </li>
      <li data-depth={multiplyer * 2}></li>
      <li data-depth={multiplyer * 1}></li>
      <li data-depth={multiplyer * 0}></li>
      <li data-depth={multiplyer * -1}></li>
      <li data-depth={multiplyer * -2}></li>
      <li data-depth={multiplyer * -3}>
        <img className="FG1" src={Foreground01} />
      </li>
      <li data-depth={multiplyer * -3.5}>
        <img className="FG1" src={Foreground02} />
      </li>
      <li data-depth={multiplyer * -3.75}>
        <img className="FG1" src={Foreground03} />
      </li>
    </Scene>
  );
}
