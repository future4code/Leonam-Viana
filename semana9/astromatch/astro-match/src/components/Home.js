import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import ImgLogo from './assets/astromatch.png'
import Loyalty from '@material-ui/icons/LoyaltyOutlined'
import Matches from '@material-ui/icons/HowToReg'
import Close from '@material-ui/icons/Close'

const StyledMatches = styled(Matches)`
    cursor: pointer;
    color: green;
    position: absolute;
    right: 0;
    
    :hover {
        -webkit-transform: scale(1.3);
        -ms-transform: scale(1.3);
        transform: scale(1.3);
    }
`

const Container = styled.div`   
    width: 400px;
    height: 600px;
    text-align: center;
    border: solid 1px black;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .like {
        position: absoute;
        bottom: 0px;
        width: 50px;
        height: 50px;
        background: transparent;
        color: green;
        border: solid 1px green;
        border-radius: 50%;
        font-size: 32px;
        cursor: pointer;
        transition: 0.8s;
        outline: none;
    }

    .like:hover {
        transition: 0.8s;
        background: green;
        color: white;
        border: none;
    }

    .deslike {
        width: 50px;
        height: 50px;
        background: transparent;
        color: red;
        border: solid 1px red;
        border-radius: 50%;
        font-size: 22px;
        cursor: pointer;
        transition: 0.8s;
        outline: none;
    }

    .deslike:hover {
        transition: 0.8s;
        background: red;
        color: white;
        border: none;
    }

`

const Header = styled.header`
    border-bottom: solid 1px #c2c1be;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;

`

const Photo = styled.img`
    width: 100%;
    max-width: 350px;
    height: 400px;
    border-radius: 10px;
`

const Logo = styled.img`
    width: 148px;
    height: 50px;
`

const Title = styled.div`
    color: #934bdb;
    font-size: 1.4rem
`

const Description = styled.div`
    width: 100%;
    max-width: 380px;

    
    
    
`

const ActionButtons = styled.div`
    width: 100%;
    max-width: 200px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 12px;
`

const Loader = styled.div`
    animation: is-rotating 1s infinite;
    border: 6px solid #e5e5e5;
    border-radius: 50%;
    border-top-color: #51d4db;
    height: 50px;
    width: 50px;

    @keyframes is-rotating {
        to {
          transform: rotate(1turn);
        }
      }
`




const Home = (props) => {
    const [user, setUser] = useState({ })
    //const [loading, setLoading] = useState()

    //begin of useEffect
    useEffect(() => {
        getProfileToChoose()
    }, [])
    //end of useEffeft

    //begin of function getProfileToChoose
    const getProfileToChoose = () => {
        axios
            .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonam-moura/person`)
            .then((response) => {
                setUser(response.data.profile)
                console.log(response.data.profile)
            })
    }
    //end of function getProfileToChoose

    //begin of function choosePerson
    const choosePerson = (e) => {
        if (e) {
            const body = {
                id: user.id,
                choice: true
            }

            axios
                .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonam-moura/choose-person`, body)
                .then((response) => {
                    console.log(response.data)
                })
            getProfileToChoose()
        } else {
            const body = {
                id: user.id,
                choice: false
            }
            axios
                .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonam-moura/choose-person`, body)
                .then((response) => {
                    console.log(response.data)
                })
            getProfileToChoose()
        }
    
    }
    //end of function ChoosePerson
    
    return <Container>
        <Header>
            <Logo src={ImgLogo} />
            <StyledMatches onClick={props.mudaState} alt="Veja seus matches"/>
        </Header>
        
        <Photo src={user.photo}/>

        <Title>
            <h3>{user.name}, {user.age}</h3>
        </Title>

        <Description>
            <p>{user.bio}</p>
        </Description>
        
        <ActionButtons>
            <button onClick={() => choosePerson(false)} className="deslike" ><Close /></button>
            <button onClick={() => choosePerson(true)} className="like">♥</button>
        </ActionButtons>
        
        
    </Container>
}

export default Home