import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import ImgLogo from './assets/astromatch.png'
import Loyalty from '@material-ui/icons/LoyaltyOutlined'
import Matches from '@material-ui/icons/Reply'
import Close from '@material-ui/icons/Close'


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
const Header = styled.header`
    border-bottom: solid 1px #c2c1be;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;

`

const Logo = styled.img`
    width: 148px;
    height: 50px;
`

const StyledMatches = styled(Matches)`
    cursor: pointer;
    color: green;
    position: absolute;
    left: 0;

    :hover {
        -webkit-transform: scale(1.3);
        -ms-transform: scale(1.3);
        transform: scale(1.3);
    }
    
`
const Person = styled.div`
    width: 100%;
    height: 60px;
   
    display: flex;
    align-items: center;
    margin-top: 8px;
`

const SmallPhoto = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    padding-left: 10px;
`
const Name = styled.p`
    font-size: 1.2rem;
    color: #934bdb;
    padding-left: 10px;
`

const ClearButton = styled.button`
    position: absolute;
    bottom: 20px;
    width: 100px;
    height: 40px;
    background-color: transparent;
    font-size: 12px;
    transition: 0.5s;

    :hover {
        transition: 0.5s;
        background-color: red;
        color: white;
    }
`


const TelaMatches = (props) => {
    const [matches, setMatches] = useState([])

    useEffect(() => {
        getMatches()
    }, [])

    const getMatches = () => {
        axios
            .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonam-moura/matches`)
            .then((response) => {
                setMatches(response.data.matches)
                console.log(response.data.matches)
            })    
    }
//end of function getMatches

    return <Container>
        <Header>
            <StyledMatches onClick={props.mudaState} alt="Voltar"/>
            <Logo src={ImgLogo} />
            
        </Header>

        {matches.map((person) => {
            return <Person>
                <SmallPhoto src={person.photo}/>
                <Name>{person.name}</Name>
            </Person>
        })}
        <ClearButton onClick={props.limpaTudo}>Limpar todos os matches</ClearButton>
    </Container>
}

export default TelaMatches