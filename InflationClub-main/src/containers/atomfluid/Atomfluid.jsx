import React, { Component } from 'react'
// import '../../../node_modules/react-dat-gui/dist/index.css'
import '../../../node_modules/react-dat-gui/build/react-dat-gui.css'
import DatGui, { DatNumber, DatSelect, DatButton } from 'react-dat-gui'
import './atom_fluid.css'
import FluidAnimation from 'react-fluid-animation'
import GitHubCorner from 'react-github-corner'

// import image from './lena.png'

const defaultConfig = {
  textureDownsample: 1,
  densityDissipation: 0.98,
  velocityDissipation: 0.99,
  pressureDissipation: 0.8,
  pressureIterations: 25,
  curl: 30,
  splatRadius: 0.005
}

export default class Atomfluid extends Component {

        _animationRef = (ref) => {
        this._animation = ref
        }
    
        _onUpdate = (config) => {
        this.setState({ config })
        }
    
        _onClickRandomSplats = () => {
        this._animation.addSplats(1000 + Math.random() * 500 | 0)
        }
    
        _onReset = () => {
        this.setState({ config: { ...defaultConfig } })
        }
    

        test = () => {
            this._animation.addRandomSplats(5)
            console.log(this._animation.addSplats(5))
        }

        state = {
            config: {
            ...defaultConfig
            }
        }


    componentDidMount() {
        this.timer = setInterval(
            ()=>{this._animation.addRandomSplats(3+Math.random()*20)},
            1000 + Math.random() * 3000 
        );
    }


  render () {
    const {
      config
    } = this.state

    return (
      <div
        style={{
          height: '100vh'
        }}
      >
        <FluidAnimation
          config={config}
          animationRef={this._animationRef}
        />

        <div
          style={{
            position: 'absolute',
            zIndex: 100,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            padding: '1em',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            fontFamily: 'Quicksand, "Helvetica Neue", sans-serif',
            pointerEvents: 'none'
          }}
        >
          {/* <h1
            style={{
              fontSize: '3em',
              textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)'
            }}
          >
            React Fluid Animation
          </h1> */}
        </div>

        <button 
            label='Random Splats'
            onClick={this.test}
            className='randomsplatsbutton'
        >
            click me
        </button>
      </div>
    )
  }


//   addSplat(splat) {
//     this._splatStack.push([ splat ])
//   }

//   addSplats(splats) {
//     this._splatStack.push(Array.isArray(splats) ? splats : [ splats ])
//   }

//   addRandomSplats(count) {
//     const splats = []

//     for (let i = 0; i < count; ++i) {
//       splats.push(this._getRandomSplat())
//     }

//     this.addSplats(splats)
//   }


}