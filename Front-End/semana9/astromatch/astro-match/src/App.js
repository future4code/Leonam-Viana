import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import './App.css'
import Home from './components/Home';
import TelaMatches from './components/TelaMatches'


const Container = styled.div`   
    width: 400px;
    height: 600px;
    text-align: center;
    border: solid 1px black;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`


function App() {
  const [home, setHome] = useState(true)


    const clearAll = () => {
        axios
            .put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonam-moura/clear`)
            .then((response) => {
            console.log(response)
            })
    }

    const goToMatches = () => {
      setHome(false)
    }

    const goToHome = () => {
    setHome(true)
    }

    
    return home ?  <Home mudaState={goToMatches} /> : <TelaMatches mudaState={goToHome} limpaTudo={clearAll}/>

}

export default App;
