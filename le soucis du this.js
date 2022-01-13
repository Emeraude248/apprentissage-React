/* 
dans la fonction render le this est bien reconnu mais dans la fonction handleClick, le this n'a pas de continuité avec
pour remédié à ce soucis on utilise bind et on le lie (le this de handleClick) au this interne à render()

<button onClick={this.handleClick.bind(this)}>Click me</button>

handleClick() {
  console.log(this);
}
est donc lié au this interne à render

*/

//code entier

import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {

state = {
  clients: [
    {id: 1, nom: "Lior Chamla"},
    {id: 2, nom: "Magali Perrin"},
    {id: 3, nom: "Joseph Durand"}
  ]
}

handleClick() {
  console.log(this);
}

  render() {
    const title = "Liste des clients";

    return <div>
      <h1>{title}</h1>
      <button onClick={this.handleClick.bind(this)}>Click me</button>
      <ul>
        {this.state.clients.map((client) =>
        <li>{client.nom} <button> X </button></li>)}
      </ul>
      <form>
        <input type="text" placeholder="ajouter un client"/>
          <button>Confirmer
          </button>
      </form>
    </div>
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

//pas de soucis de this ici, la fonction fléchée ne perd pas le contexte

<button onClick={() => this.handleClick()}>Click me</button>

//autre posibilité, handleCick comme propriété de la class App et appel d'une focntion fléchée, mais codesandbox n'a pas l'air d'aimer ^^

import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {

state = {
  clients: [
    {id: 1, nom: "Lior Chamla"},
    {id: 2, nom: "Magali Perrin"},
    {id: 3, nom: "Joseph Durand"}
  ]
}

handleClick = () => {
  console.log(this.state);
}

  render() {
    const title = "Liste des clients";

    return <div>
      <h1>{title}</h1>
      <button onClick={this.handleClick}>Click me</button>
      <ul>
        {this.state.clients.map((client) =>
        <li>{client.nom} <button> X </button></li>)}
      </ul>
      <form>
        <input type="text" placeholder="ajouter un client"/>
          <button>Confirmer
          </button>
      </form>
    </div>
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);