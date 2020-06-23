import React from 'react'
import styled from 'styled-components'


const Home = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(https://static.vecteezy.com/system/resources/previews/000/278/190/original/galaxy-background-landscape-vector.jpg) no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const ButtonLogin = styled.button`
    width: 200px;
    height: 50px;
    background: transparent;
    transition: 0.5s;
    color: white;
    font-size: 22px;
    font-family: Arial;
    :hover {
        transition: 0.5s;
        background-color: blue;
    }
`

const ButtonPublic = styled.button`
    width: 200px;
    height: 50px;
    background: transparent;
    margin-top: 50px;
    transition: 0.5s;
    color: white;
    
    font-family: Arial;
    :hover {
        transition: 0.5s;
        background: purple;
    }
`

const HomePage = () => {

    return <Home>
        <ButtonLogin>Login</ButtonLogin>
        <ButtonPublic>Quero me cadastrar para uma viagem</ButtonPublic>
    </Home>
}

export default HomePage