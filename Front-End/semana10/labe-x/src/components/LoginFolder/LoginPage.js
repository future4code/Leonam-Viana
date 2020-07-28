import React, { useState } from 'react'
import styled from 'styled-components'
import './LoginPage.css'
import { useHistory } from 'react-router-dom'
import ButtonExtended from '@material-ui/core/Fab'
import axios from 'axios'
import LabexLogo from '../assets/LabexLogo.png'



const PageContainer = styled.div`
    width: 100vw;
    height: 100vh;
`

const Form = styled.div`
    border: solid 1px #f50057;
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    

    input {
        border: none;
        border-bottom: solid 1px #f50057;
        background-color: transparent;
        color: #f50057;
        width: 200px;
        height: 28px;
        outline: none;
        margin-right: 15%;
        text-align: center;
        font-size: 0.875rem;
    }

    div {
      width: 400px;
      display: flex;
      justify-content: flex-end;
    }

`

const LoginPage = () => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleLogin = async () => {
        const body = {
          email: email,
          password: password
        };
    
        try {
          const response = await axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonam-moura/login`, body);
          console.log(response)
          if (response.data.success === true) {
            localStorage.setItem("token", response.data.token);
            history.push("/lista");
          }
          //localStorage.setItem("token", response.data.token);
          //history.push("/lista");
        } catch (e) {
          alert("Login falhou :(");
        }
      };

    return <PageContainer>
      <header>
        <img src={LabexLogo}/>
        <button onClick={() => {history.push('/')}}>Home</button>
      </header>
      
      <main>
        <Form>
          <div>
            <label forHtml="user">User:</label>
            <input
              id="user"
              placeholder="E-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
            />
          </div>

          <div>
            <label forHtml="password">Password:</label>
            <input
              id="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
            />
          </div>

          <ButtonExtended onClick={handleLogin} variant="extended" color="secondary" >Entrar</ButtonExtended>

        </Form>
      </main>
    </PageContainer>
}

export default LoginPage