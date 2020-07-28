import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import './ListTripsPage.css'
import ButtonExtended from '@material-ui/core/Fab'
import {useProtectedPage} from '../hooks/UseProtectedPage'
import LabexLogo from '../assets/LabexLogo.png'


const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
`
const CardTrip = styled.div`
    width: 500px;
    height: auto;
    border: solid 1px #c51162;
    margin: 20px auto;
    cursor: pointer;
    color: white;

    :hover {
        transform: scale(1.02)
    }

    sumary {
        font-size: 18px;
    }
    
`

const ListTripsPage = () => {
  useProtectedPage()
  const [trips, setTrips] = useState([])

  const history = useHistory()
  useEffect(() => {
    axios
      .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonam-moura/trips`)
      .then(response => {
        setTrips(response.data.trips)
      })
  }, [])

  console.log(trips)
  return <PageContainer>


    <header>
      <img src={LabexLogo} />

      <button onClick={() => {
        localStorage.clear()
        history.push('/login')
      }}
      >Logout</button>
    </header>

    
    {trips.map((trip) => {
                return <CardTrip>
                    <div>
                        <div>
                            <h3>{trip.name}</h3>
                            <p>{trip.date}</p>
                        </div>
                        
                    </div>
                    <details>
                        <sumary>{trip.description}</sumary>
                        <div>
                            <form>
                                <label>Nome:</label>
                                <input type="text" required/>

                                <label>Idade:</label>
                                <input type="number" required/>

                                <label>Profissão:</label>
                                <input type="text" required/>

                                <label>Fale um pouco sobre você:</label>
                                <input type="text" required/>
                            </form>
                        </div>
                    </details>
                </CardTrip>
            })}
    

  </PageContainer>
};

export default ListTripsPage;
