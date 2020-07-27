import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import './App.css'
import PlayerOnFooter from './Components/PlayerOnFooter'
import MainContainer from './Components/MainContainer'


const Tela = styled.div`
  background-color: #1d1e1d;
  width: 100%;
  height: 100vh;
`
export default class App extends React.Component {
  state = {
    
  }


  render() {

    return <Tela>
      <MainContainer />
      <PlayerOnFooter />
    </Tela>
  }
}