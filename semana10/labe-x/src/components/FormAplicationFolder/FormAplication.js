import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import './FormAplication.css'
import { useHistory} from 'react-router-dom'
import LabexLogo from '../assets/LabexLogo.png'
import ReadMore from '@material-ui/icons/ExpandMore'


const PageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    color: #fff;
`

const Card = styled.div`
    width: 500px;
    height: auto;
    border: solid 1px #c51162;
    margin: 20px auto;
    cursor: pointer;

    :hover {
        transform: scale(1.02)
    }

    sumary {
        font-size: 18px;
    }
    
`

const TitleTrip = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
        color: #f50057;
        font-size: 1rem;
    }
`

const DescriptionTrip = styled.div`

`



const FormAplicationPage = () => {
    const [trips, setTrips] = useState([])

    const history = useHistory()
    useEffect(() => {
      axios
        .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonam-moura/trips`)
        .then(response => {
          setTrips(response.data.trips)
        })
    }, [])


    return <PageContainer>
        <header>
            <img src={LabexLogo}/>
            <button onClick={() => {history.push('/')}}>Home</button>
        </header>
        
        <main>
            <label>Para qual viagem você deseja se inscrever ?</label>
            <select>
                {trips.map((trip) => {
                    return <option>{trip.name}</option>
                })}
            </select>
            <div>
                <form>
                    <div>
                        <label>Nome:</label>
                        <input type="text" required/>
                    </div>
                    <div>
                        <label>Idade:</label>
                        <input type="number" required/>
                    </div>
                    <div>
                        <label>Profissão:</label>
                        <input type="text" required/>
                    </div>
                    <div>
                        <label>Fale um pouco sobre você:</label>
                        <input type="text" required/>
                    </div>
                    <button>Finalizar Inscrição</button>
                </form>
            </div>
        </main>
        
    </PageContainer>
}

export default FormAplicationPage