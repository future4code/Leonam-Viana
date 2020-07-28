import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Card = styled.div`
    background-color: #adc8ed;
    width: 200px;
    height: 400px;
    border: solid 3px black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    #imagePoke {
        border: solid 2px black;
        border-radius: 50%;
        width: 100px;
        height: 100px;
    }

    #life {
        width: 100%;
        max-width: 100px;
        height: 20px;
        background-color: #4bff14;
        border: solid 1px black;
        color: white;
    }

    #att {
        width: 100%;
        max-width: 100px;
        height: 20px;
        background-color: #b83333;
        border: solid 1px black;
        color: white;
    }

    #deff {
        width: 100%;
        max-width: 100px;
        height: 20px;
        background-color: #5095ba;
        border: solid 1px black;
        color: white;
    }
`
export default class PokeCard extends React.Component {
    state = {
        pokemons: [],
        pokeImg: "",

    }

    componentDidMount = () => {
        axios
          .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
          .then(resposta => {
            console.log(resposta.data)
            this.setState({ pokemons: resposta.data.results });
          })
          .catch(err => {
            console.log(err);
          });
      };

      pegaPokemon = event => {
        const pokeName = event.target.value;
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
          .then(resposta => {
            this.setState({ pokeImg: resposta.data.sprites.front_default });
          })
          .catch(err => {
            console.log(err);
          });

          axios
          .get(`https://pokeapi.co/api/v2/type/${pokeName}`)
          .then(resposta => {
            console.log(resposta)
          })
          .catch(err => {
            console.log(err);
          });
      };

    render() {
        const image = this.state.pokeImg ? (
            <img src={this.state.pokeImg} alt="pokemon" />
          ) : (
            <div />
          );
      
        return <Card>
            <div id="imagePoke">
                {image}
            </div>

            <div id="life">Life</div>
            <div id="att">Attack</div>
            <div id="deff">Def</div>

            <footer>
                <select onChange={this.pegaPokemon}>
                    <option value="">Select the Pokemon</option>
                    {this.state.pokemons.map(pokemon => {
                        return <option value={pokemon.name}>{pokemon.name}</option>
                    })}
                </select>
            </footer>
        </Card>
    }
}