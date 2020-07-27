import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Anterior from './icons/anterior.svg'
import Play from './icons/play.svg'
import Proximo from './icons/proximo.svg'

const Player = styled.footer`
    background-color: #171717;
    width: 100%;
    height: 20vh;
    position: sticky;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
        display: flex;
        width: 100%;
        max-width: 300px;
        justify-content: space-between;
    }

    img {
        width: 50px;
        height: 50px;
        cursor: pointer;
    }
`

export default class PlayerOnFooter extends React.Component {
    state = {

    }


    render() {

        return <Player>
            
            <div>
                <a><img src={Anterior}/></a>
                <a><img src={Play}/></a>
                <a><img src={Proximo}/></a>
            </div>
        </Player>
    }
}