import React from 'react'
import './App.css'
import styled from 'styled-components'
import axios from 'axios'
import PokeCard from './Components/PokeCard'

const Tela = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
    background-color: #233e63;
    width: 800px;
    height: 600px;
    border: solid 5px black;
    border-radius: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export default class App extends React.Component {
    
    render() {
        return <Tela>
            <Container>
                <PokeCard />
                <h1>X</h1>
                <PokeCard />
               
                <button>Fight</button>
                
            </Container>
        </Tela>
    }
}