import { TrackballControls } from './jsm/controls/TrackballControls.js';
import { CSS3DRenderer, CSS3DObject } from './jsm/renderers/CSS3DRenderer.js';
import { WebView } from 'react-native';
import './social.css';
import '../../css_shake.css';
import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";

import FluidAnimation from 'react-fluid-animation'

import { Atomfluid} from '../index.js';{/* <ul class="shake-trigger">
<li class="shake-slow">2</li>
<li>1</li>
<li>2</li>
<li class="shake-hard">3</li>
<li></li>
<li class="shake"></li>
</ul> */}


// const Dapps = () => (
//   <div id='dapps'>      
//   </div>
// );
// export default Dapps;


// class Dapps extends Component {
//   componentDidMount() {
//     var scene = new THREE.Scene();
//     var camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );

//     var renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     this.mount.appendChild(renderer.domElement);

//     var geometry = new THREE.BoxGeometry(1, 1, 1);
//     var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//     var cube = new THREE.Mesh(geometry, material);
//     scene.add(cube);

//     camera.position.z = 5;

//     var animate = function() {
//       requestAnimationFrame(animate);

//       cube.rotation.x += 0.01;
//       cube.rotation.y += 0.01;

//       renderer.render(scene, camera);
//     };

//     animate();
//   }
//   render() {
//     return <div ref={ref => (this.mount = ref)} />;
//   }
// }


// export default Dapps;




class Dapps extends Component {
  componentDidMount() {
    let camera, scene, renderer;
    let controls;

    function Element( id, x, y, z, ry ) {

      const div = document.createElement( 'div' );
      div.style.width = '480px';
      div.style.height = '360px';
      div.style.backgroundColor = '#000';

      const iframe = document.createElement( 'iframe' );
      iframe.style.width = '480px';
      iframe.style.height = '360px';
      iframe.style.border = '0px';
      iframe.src = [ 'https://www.youtube-nocookie.com/embed/', id,'?&autoplay=1&mute=1&loop=1&modestbranding=1&playlist=',id ].join( '' );

      div.appendChild( iframe );

      const object = new CSS3DObject( div );
      object.position.set( x, y, z );
      object.rotation.y = ry;

      return object;

    }

    init();
    animate();
    var isMouseDown = false;

    function init() {

      const container = document.getElementById( 'container' );

      camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 5000 );
      camera.position.set( 500, 350, 750 );

      scene = new THREE.Scene();

      renderer = new CSS3DRenderer();
      renderer.setSize( window.innerWidth/2, window.innerHeight );
      container.appendChild( renderer.domElement );

      const group = new THREE.Group();
      group.add( new Element( '9Xuj7rpFOrI', 0, 0, 240, 0 ) );
      group.add( new Element( 'YHbMpPFkCrQ', 240, 0, 0, Math.PI / 2 ) );
      group.add( new Element( 'R9Zuy9CaBJ0', 0, 0, - 240, Math.PI ) );
      group.add( new Element( '9ubytEsCaS0', - 240, 0, 0, - Math.PI / 2 ) );
      scene.add( group );
      

      controls = new TrackballControls( camera, renderer.domElement, );
      controls.noZoom = true
      controls.rotateSpeed = 4;

      // window.addEventListener( 'resize', onWindowResize );

      // Block iframe events when dragging camera

      const blocker = document.getElementById( 'blocker' );
      blocker.style.display = 'none';

      // controls.addEventListener( 'start', function () {
      window.addEventListener('mousedown', onMouseDown);
      window.addEventListener('mouseup', onMouseUp);
      //   blocker.style.display = '';

      // } );
      // controls.addEventListener( 'end', function () {

      //   blocker.style.display = 'none';

      // } );

    }

    // function onWindowResize() {

    //   camera.aspect = window.innerWidth / window.innerHeight;
    //   camera.updateProjectionMatrix();
    //   renderer.setSize( window.innerWidth, window.innerHeight );

    // }
    function onMouseDown(){
      isMouseDown = true;
  }
  
  function onMouseUp(){
      isMouseDown = false;
  }
    function animate() {
      
      // scene.rotation.y = scene.rotation.y+0.005
      if(!isMouseDown){scene.rotation.y = scene.rotation.y+0.005}
      // scene.rotation.x = scene.rotation.x+0.005
      // scene.rotation.z = scene.rotation.z+0.005

      requestAnimationFrame( animate );
      controls.update();
      renderer.render( scene, camera );

    }
  }
  render() {
    return (
    <div>
    {/* <div className='Atom_main'>
         <FluidAnimation
        style={{ height: '100vh' }}
        />
    </div> */}

      <Atomfluid/>

      <div className="youtube-gradient"></div>
      <div id="container" className='social-container'></div>
      
        <div ref={ref => (this.mount = ref)} />
        <div className='comming-soon-wrp'>
          <div  className='discord'>
            <div class="discord-icon"></div>
            <div class="discord-text">DISCORD INVITE</div>
            <a href="https://discord.gg/bEk7Vxckqw" rel="noopener noreferrer" target="_blank"><h2 class="btn-transition">JOIN DISCORD</h2></a>
          </div>
        </div>

      <div id="blocker"></div>


    </div>
    
   



    );
  }

}


export default Dapps;