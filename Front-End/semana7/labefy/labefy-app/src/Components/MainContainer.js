import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Mais from './icons/mais.svg'
import SeeMore from './icons/seemore.svg'
import Trash from './icons/trash.svg'



const Container = styled.div`
    width: 100%;
    height: 1000px;
    margin: auto;
    background-color: #303030;
    color: white;   
    text-align: center;
    
    header {
        background-color: #171717;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        position: sticky;
        top: 0;
    }
    
    header a {
        text-decoration: none;
        color: aquamarine;
        font-size: 32px;
        
    }

    header div {
        display: flex;
        align-items: center;
        
    }

    .InputCria {
        background-color: transparent;
        color: white;
        border: none;
        border-bottom: solid 1px white;
        
    }   

    div a img {
        width: 30px;
        height: 30px;
        cursor: pointer;
    }

    .seemore {
        width: 30px;
        height: 30px;
    }

    .cada-playlist {
        background-color: #171717;
        border: solid 5px white;
        font-size: 1.2rem;
        border-radius: 15px 0px 15px 0px;
        list-style: none;
        width: 100%;
        max-width: 300px;
        height: 40px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        color: white;
        margin: auto;
        margin-top: 8px;
    }

    #modal {
        color: red;
        width: 300px;
        height: 100px;
    }
    
`

export default class MainContainer extends React.Component {
    state = {
        playlists: [],

        inputValue: "",
    }

    componentDidMount = () => {
        this.myPlaylists()
    }

    onChangeInput = (event) => {
        const newval = event.target.value
        this.setState({ inputValue: newval })
    }

    myPlaylists = () => {
        axios
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`, {headers: {Authorization: "leonam-moura-mello"},})
            .then((response) => {
                console.log(response)
                this.setState({ playlists: response.data.result.list })
            })
    }

    createPlaylist = (event) => {
        this.myPlaylists()
        const body = {
            name: this.state.inputValue,
        }
        axios
            .post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`, body, {headers: {Authorization: "leonam-moura-mello"},})
            .then(response => {
                console.log(response.data)
            })
        this.myPlaylists()
    }

    render() {


        return <Container>
            <header>
                <a><span>Labefy</span></a>
                <div>
                    <input onSubmit={this.createPlaylist} onChange={this.onChangeInput} value={this.state.inputValue} className="InputCria" placeholder="Digite o nome da playlist"/>
                    <a onClick={this.createPlaylist}>
                        <img src={Mais}/>
                    </a>
                </div>
            </header>

            {this.state.playlists.map(playlist => {
                return <div className="cada-playlist">
                    
                    <a >
                        <img src={SeeMore} className="seemore"/>
                    </a>
                    <span>{playlist.name}</span>
                    <a onClick={async () => {
                        await axios
                            .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlist.id}`, {headers: {Authorization: "leonam-moura-mello"},})
                        this.myPlaylists()
                    }}>
                        <img src={Trash}/>
                    </a>
                </div>
            })}
            
        </Container>
    }
}