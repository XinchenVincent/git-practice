import React, {Component} from 'react';
import background_video from './assets/background.mp4'
import logo from './assets/inflation_logo44.png'
import { Navbar} from './components';
import { Header, Intro, Poster, Social, Team, Digitalsoul,Ownership,Levelup} from './containers/index.js';
import './index.css';

import $ from 'jquery' 
import './jquery.pagepiling';
import './jquery.pagepiling.css';
// import Atom_fluid_page from './containers/atomfluid/Atomfluid'


// On use
class App extends Component {
    componentDidMount(){
        $(document).ready(function() {
            $('#pagepiling').pagepiling({
                keyboardScrolling: false,
                anchors: ['sec1', 'sec2', 'sec3', 'sec4'],
                navigation: {
                    'textColor': '#fff',
                    'bulletsColor': '#fff',
                    'position': 'right',
                    'tooltips': ['section1', 'section2', 'section3', 'section4']
                }
            })
        })
    }
    render() {
      return (
        <div className='App'>
            <Navbar />
            
            <div id='pagepiling'>
                <div class='section sec1'>
                    <div>
                        <video className="home__background-video" autoPlay loop muted>
                            <source src={background_video} type="video/mp4"/>
                        </video>
                    </div>
                    <Header/>
                </div>
                
                {/* <div  class='section sec3' id='sec3'><Poster/></div> */}
                <div class='section sec2' id='sec2'><Intro/></div> 
                <div class='section sec3' id='sec3'><Digitalsoul/></div> 
                {/* <div class='section sec4' id='sec4'><Team/></div>    */}
                <div class='section sec4' id='sec4'><Ownership/></div>   
                <div class='section sec5' id='sec5'><Levelup/></div>  
                <div  class='section sec6' id='sec6'><Social/></div>     
                {/* <div  class='section sec5' id='sec5'><Atomfluid/></div>      */}

            </div>

            {/* <div  class='dapps' id='dapps'><Dapps/></div>   */}
        </div>
      )
    }
  }
  export default App;


















// const slidesData = [
//   {
//     image: image1,
//     title: "Segovia",
//     meta: "Spain / Castile and León"
//   },
//   {
//     image: image2,
//     title: "Barcelona",
//     meta: "Spain / Catalonia"
//   },
//   {
//     image: image3,
//     title: "Málaga",
//     meta: "Spain / Andalusia"
//   },
//   {
//     image: image4,
//     title: "Pamplona",
//     meta: "Spain / Navarre"
//   },
//   {
//     image: image5,
//     title: "Bilbao",
//     meta: "Spain / Biscay"
//   }
// ];

  
// function sleep(time) {
//         const now = Date.now();

//         while(Date.now() - now <= time * 1000) {

//         }
//     }

//   // On Test
//   class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//           isLoadedAll: true
//         }
//       }

//     componentWillMount() {
//         this.state = {
//             isLoadedAll: true
//           }
        
//     }

//     componentDidMount(){
//         const slides = new Slides(slidesData);
//         const container = document.getElementById("container");
//         const cursor = new Cursor(document.querySelector(".cursor"));

//         const showcase = new Showcase(slidesData, {
//             onActiveIndexChange: activeIndex => {
//             slides.onActiveIndexChange(activeIndex);
//             },
//             onIndexChange: index => {
//             slides.onMove(index);
//             },
//             onZoomOutStart: ({ activeIndex }) => {
//             cursor.enter();
//             slides.appear();
//             },
//             onZoomOutFinish: ({ activeIndex }) => {},
//             onFullscreenStart: ({ activeIndex }) => {
//             cursor.leave();
//             slides.disperse(activeIndex);
//             },
//             onFullscreenFinish: ({ activeIndex }) => {}
//         });
//         console.log('component already mount')
//         this.handleShowOrHide();
//         this.render();
//         this.state = {
//             isLoadedAll: true
//           }
//           this.setState();
//         $(document).ready(function() {
//             $('#pagepiling').pagepiling({
//                 anchors: ['sec1', 'sec2', 'sec3'],
//                 navigation: {
//                     'textColor': '#fff',
//                     'bulletsColor': '#fff',
//                     'position': 'right',
//                     'tooltips': ['section1', 'section2', 'section3']
//                 }
//             })
//         })

//         showcase.mount(container);
//         slides.mount(container);
//         showcase.render();

//         window.addEventListener("resize", function() {
//         showcase.onResize();
//         });

//         window.addEventListener("mousemove", function(ev) {
//         showcase.onMouseMove(ev);
//         });
//     }

//     handleShowOrHide () {
//     this.setState({
//         isLoadedAll: true
//     })
//     }

      
    
//       render () {


//         return (
//             <div>
//             {
//                 this.state.isLoadedAll ?
//         <div>
//             <div>
//             <Navbar />
//                 <div id='pagepiling'>
//                     <div class='section sec1'>
//                         <div>
//                             <video className="home__background-video " autoPlay loop muted>
//                                 <source src={background_video} type="video/mp4"/>
//                             </video>
//                         </div>
//                         <Header/>
//                     </div>
//                     <div  class='section sec2' id='sec2'><Dapps/></div>   
//                     <div  class='section sec3' id='sec3'>
//                         <div className='cursor'>
//                             <div className='cursor__inner cursor__inner--circle'>
//                                 <div className='App cursor__inner cursor__inner--dot'> 
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     {/* <div class='section sec4' id='sec4'><div id='container'/></div>                              */}
            
//                 </div>
//             </div>
//         </div> : <div background='red'>wow</div>
//       }
//         </div>
//         )
//       }
//     }

  
  
//   export default App;






// const slidesData = [
//     {
//       image: background_video,
//       title: "Segovia",
//       meta: "Spain / Castile and León"
//     },
//     {
//       image: image2,
//       title: "Barcelona",
//       meta: "Spain / Catalonia"
//     },
//     {
//       image: image3,
//       title: "Málaga",
//       meta: "Spain / Andalusia"
//     },
//     {
//       image: image4,
//       title: "Pamplona",
//       meta: "Spain / Navarre"
//     },
//     {
//       image: image5,
//       title: "Bilbao",
//       meta: "Spain / Biscay"
//     }
//   ];
  
  
//     // On Test
//     class App extends React.Component {
  
//       componentDidMount(){
//           const slides = new Slides(slidesData);
//           const container = document.getElementById("container123");
//           const cursor = new Cursor(document.querySelector(".cursor"));
  
//           const showcase = new Showcase(slidesData, {
//               onActiveIndexChange: activeIndex => {
//               slides.onActiveIndexChange(activeIndex);
//               },
//               onIndexChange: index => {
//               slides.onMove(index);
//               },
//               onZoomOutStart: ({ activeIndex }) => {
//               cursor.enter();
//               slides.appear();
//               },
//               onZoomOutFinish: ({ activeIndex }) => {},
//               onFullscreenStart: ({ activeIndex }) => {
//               cursor.leave();
//               slides.disperse(activeIndex);
//               },
//               onFullscreenFinish: ({ activeIndex }) => {}
//           });
//           console.log('component already mount')
//           this.render();
//           this.state = {
//               isLoadedAll: true
//             }  
//           showcase.mount(container);
//           slides.mount(container);
//           showcase.render();
  
//           window.addEventListener("resize", function() {
//           showcase.onResize();
//           });
  
//           window.addEventListener("mousemove", function(ev) {
//           showcase.onMouseMove(ev);
//           });
//       }
  
        
      
//         render () {
  
  
//           return (
//           <div>
//               <div>
//                   <div>
//                       <div >
//                       </div>
//                       <div ></div>   
//                       <div>
//                           <div id="container123">
//                             <div className='mytestdiv'> 22131 </div>
//                           </div>
//                           <div className='cursor'>
//                               <div className='cursor__inner cursor__inner--circle'>
//                                   <div className='App cursor__inner cursor__inner--dot'> 
//                                   </div>
//                               </div>
//                           </div>
//                       </div>              
//                   </div>
//               </div>
//           </div>
//           )
//         }
//       }
  
    
    
//     export default App;
  
  
  
  
  
  
  