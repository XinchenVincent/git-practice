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
import ceopic from '../../assets/ceo.png'


import './team.css';


class team extends Component {

    constructor () {
        super();
        this.state = {
            Mybox: Mybox, 
            Myfloor: Myfloor,
            Myplayer: Myplayer,
            Mywall: Mywall,
            Mytarget: Mytarget,
            Mypigbox_changed_1: Mypigbox_changed_1,
            Mypigbox_changed_2: Mypigbox_changed_2,
            Mypigbox_changed_3: Mypigbox_changed_3,
            Mypigbox_changed_4: Mypigbox_changed_4,
            Mypigbox_changed_5: Mypigbox_changed_5,
            Mypigbox_changed_6: Mypigbox_changed_6,
            Mypigbox_changed_7: Mypigbox_changed_7
        }
      }

    componentDidMount() {
        const floor = new Array(9).fill(new Array(9).fill('X'))

        const walls = [
        ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', ' '],
        ['X', ' ', ' ', ' ', ' ', ' ', ' ', 'X', ' '],
        ['X', ' ', ' ', ' ', ' ', ' ', ' ', 'X', ' '],
        ['X', ' ', ' ', ' ', ' ', ' ', ' ', 'X', ' '],
        ['X', ' ', ' ', ' ', ' ', ' ', ' ', 'X', ' '],
        ['X', ' ', ' ', ' ', ' ', ' ', ' ', 'X', 'X'],
        ['X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X'],
        ['X', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X'],
        ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
        ]

        const targets = [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', 'X', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', 'X', ' ', ' '],
        [' ', 'X', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', 'X', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', 'X', ' ', ' ', ' ', 'X', ' '],
        [' ', ' ', ' ', ' ', 'X', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        ]

        const boxes = [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', 'X', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', 'X', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', 'X', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', 'X', ' ', 'X', 'X', 'X', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        ]

        const player = [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', 'X', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        ];


        const box_afterwin_1 = [
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', 'X', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        ];
    

        const box_afterwin_2 = [
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', 'X', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        ];

        const box_afterwin_3 = [
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', 'X', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        ];

        const box_afterwin_4 = [
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', '', ' ', ' '],
            [' ', ' ', ' ', ' ', 'X', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        ];

        const box_afterwin_5 = [
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', 'X', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        ];

        const box_afterwin_6 = [
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        ];

        const box_afterwin_7 = [
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', 'X', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        ];
        
        



        let playerX = 2
        let playerY = 2

        /**
         * Renders a grid of blocks with a given texture
         * @param blocks
         * @param textureImage
         * @param canvas
         * @returns {Promise<unknown>}
         */
        const renderBlocks = (blocks, textureImage, canvas) => {
        const pixelWidthBlock = canvas.width / blocks[0].length
        const pixelHeightBlock = canvas.height / blocks.length
        const context = canvas.getContext('2d')
        // context.globalAlpha = 0.1

        blocks.forEach((row, y) => {
            row.forEach((cell, x) => {
            if (cell === 'X') {
                context.drawImage(
                textureImage,
                x * pixelWidthBlock,
                y * pixelHeightBlock,
                pixelWidthBlock,
                pixelHeightBlock
                )
            }
            })
        })
        }

        /**
         * Determines if the game was won
         * @param targets
         * @param boxes
         * @returns {boolean}
         */
        const hasWon = (targets, boxes) => {
        for (let y = 0; y < targets.length; y++) {
            for (let x = 0; x < targets[0].length; x++) {
            if (targets[y][x] !== boxes[y][x]) {
                // Some box is not aligned with a target.
                return false
            }
            }
        }

        return true
        }

        /**
         * Loads a texture async
         * @param texture
         * @returns {Promise<unknown>}
         */
        const loadTexture = texture => new Promise(resolve => {
        const image = new Image()
        image.addEventListener('load', () => {
            resolve(image)
        })

        image.src = texture
        })

        Promise.allSettled([
        loadTexture(this.state.Myfloor),
        loadTexture(this.state.Mywall),
        loadTexture(this.state.Mytarget),
        loadTexture(this.state.Mybox),
        loadTexture(this.state.Myplayer),
        loadTexture(this.state.Mypigbox_changed_1),
        loadTexture(this.state.Mypigbox_changed_2),
        loadTexture(this.state.Mypigbox_changed_3),
        loadTexture(this.state.Mypigbox_changed_4),
        loadTexture(this.state.Mypigbox_changed_5),
        loadTexture(this.state.Mypigbox_changed_6),
        loadTexture(this.state.Mypigbox_changed_7),
        ]).then(results => {
        const [
            floorTexture,
            wallTexture,
            targetTexture,
            boxTexture,
            catTexture,
            Mypigbox_changed_1_texture,
            Mypigbox_changed_2_texture,
            Mypigbox_changed_3_texture,
            Mypigbox_changed_4_texture,
            Mypigbox_changed_5_texture,
            Mypigbox_changed_6_texture,
            Mypigbox_changed_7_texture,
        ] = results.map(result => result.value)

        const canvas = document.getElementById('canvas')

        const render = () => {
            // renderBlocks(floor, floorTexture, canvas)
            renderBlocks(walls, wallTexture, canvas)
            renderBlocks(targets, targetTexture, canvas)
            renderBlocks(boxes, boxTexture, canvas)
            renderBlocks(player, catTexture, canvas)
        }

        render()

        window.addEventListener('keydown', event => {
            
            let xMovement = 0
            let yMovement = 0

            switch (event.key) {
            case 'ArrowUp':
                yMovement = -1
                break
            case 'ArrowDown':
                yMovement = 1
                break
            case 'ArrowLeft':
                xMovement = -1
                break
            case 'ArrowRight':
                xMovement = 1
                break
            }

            const newPlayerX = playerX + xMovement
            const newPlayerY = playerY + yMovement

            // Collision with end of playing field
            if (
            newPlayerX < 0
            || newPlayerY < 0
            || newPlayerX > floor[0].length - 1
            || newPlayerY > floor.length - 1
            ) {
            return
            }

            // Wall collision
            if (walls[newPlayerY][newPlayerX] === 'X') {
            return
            }

            // Box collision
            if (boxes[newPlayerY][newPlayerX] === 'X') {
            if (
                boxes[newPlayerY + yMovement][newPlayerX + xMovement] === 'X'
                || walls[newPlayerY + yMovement][newPlayerX + xMovement] === 'X'
            ) {
                return
            }

            boxes[newPlayerY][newPlayerX] = ' '
            boxes[newPlayerY + yMovement][newPlayerX + xMovement] = 'X'
            }

            player[playerY][playerX] = ' '
            player[newPlayerY][newPlayerX] = 'X'
            playerX = newPlayerX
            playerY = newPlayerY



            if (hasWon(targets, boxes)) {
            // document.getElementById('message').innerHTML = 'You\'ve won!'
            
            this.setState(
                {
                    Myplayer: Myplayer_changed
                }
            )
            Promise.allSettled([
                loadTexture(this.state.Myfloor),
                loadTexture(this.state.Mywall),
                loadTexture(this.state.Mytarget),
                loadTexture(this.state.Mybox),
                loadTexture(this.state.Myplayer),
                // loadTexture(this.state.Mypigbox_changed_1),
                // loadTexture(this.state.Mypigbox_changed_2),
                // loadTexture(this.state.Mypigbox_changed_3),
                // loadTexture(this.state.Mypigbox_changed_4),
                // loadTexture(this.state.Mypigbox_changed_5),
                // loadTexture(this.state.Mypigbox_changed_6),
                // loadTexture(this.state.Mypigbox_changed_7),
                ]).then(results => {
                const [
                    floorTexture,
                    wallTexture,
                    targetTexture,
                    boxTexture,
                    catTexture,
                    // Mypigbox_changed_1_texture,
                    // Mypigbox_changed_2_texture,
                    // Mypigbox_changed_3_texture,
                    // Mypigbox_changed_4_texture,
                    // Mypigbox_changed_5_texture,
                    // Mypigbox_changed_6_texture,
                    // Mypigbox_changed_7_texture,
                ] = results.map(result => result.value)
        
                const canvas = document.getElementById('canvas')
        
                const render = () => {
                    // renderBlocks(floor, floorTexture, canvas)
                    renderBlocks(walls, wallTexture, canvas)
                    renderBlocks(targets, targetTexture, canvas)
                    renderBlocks(boxes, boxTexture, canvas)
                    renderBlocks(player, catTexture, canvas)
                    renderBlocks(box_afterwin_1,  Mypigbox_changed_1_texture, canvas)
                    renderBlocks(box_afterwin_2,  Mypigbox_changed_2_texture, canvas)
                    renderBlocks(box_afterwin_3,  Mypigbox_changed_3_texture, canvas)
                    renderBlocks(box_afterwin_4,  Mypigbox_changed_4_texture, canvas)
                    renderBlocks(box_afterwin_5,  Mypigbox_changed_5_texture, canvas)
                    renderBlocks(box_afterwin_6, Mypigbox_changed_6_texture, canvas)
                    renderBlocks(box_afterwin_7, Mypigbox_changed_7_texture, canvas)
                }
                canvas.height = canvas.height;
                render()
            })
            
            return 
            }
            // 1. 最简单的方法：由于canvas每当高度或宽度被重设时，画布内容就会被清空，因此可以用以下方法清空：
            canvas.height = canvas.height;
            render()
        })
        })
    
    }

        

    render() {
        return (
            <div>
                <div className="gradient-pushing"></div>
                <div className='pushing-box'>
                    
                    <div >
                        <canvas  width="700" height="700" id="canvas"></canvas>
                    </div>


                    
                    {/* <div id="message">
                    Use arrow keys to move the boxes around.
                    </div> */}

                    {/* <script src="./blockPushingGame.js"></script> */}
                </div>
                <div className='a-intro'>
                    <div className='team-intro'>
                        <img src={ceopic} alt="ceo"/>

                    </div>
                </div>

            </div>
        
    )
    }
}

export default team