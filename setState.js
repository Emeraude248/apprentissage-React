//méthode setState pour modifier un composant, demande à React de réafficher
//héritée de Component

handleClick = () => {
    this.setState({ compteur: this.state.compteur + 1});
    console.log(this.state);
  };

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
  ],
  compteur: 0 
};

handleClick = () => {
  this.setState({ compteur: this.state.compteur + 1});
  console.log(this.state);
};

  render() {
    const title = "Liste des clients";

    return <div>
      <h1>{title}</h1>
      {this.state.compteur}
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