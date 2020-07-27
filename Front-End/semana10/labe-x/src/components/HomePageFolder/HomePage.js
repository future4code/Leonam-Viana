import React from 'react'
import styled from 'styled-components'
import './HomePage.css'
import ButtonExtended from '@material-ui/core/Fab'
import { useHistory} from 'react-router-dom'
import LabexLogo from '../assets/LabexLogo.png'


const PageContainer = styled.div`
    width: 100vw;
    height: 100vh;
`


const HomePage = () => {
    const history = useHistory()


    return <PageContainer>
        <header>
            <img src={LabexLogo}/>
            <button onClick={() => {history.push('/login')}}>Login</button>
        </header>
        
        <main>
            <button onClick={() => {history.push('/inscricao')}}>Quero me cadastrar para uma viagem</button>
        </main>
        
    </PageContainer>
}

export default HomePage