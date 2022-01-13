import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  state = {
    clients: [
      { id: 1, nom: "Lior Chamla" },
      { id: 2, nom: "Magali Perrin" },
      { id: 3, nom: "Joseph Durand" }
    ],
    compteur: 0
  };

  handleClick = () => {
    const clients = this.state.clients.slice();
    //slice copie le tableau clients, ce qui évite de toucher au tableau de base
    clients.push({id: 4, nom: "Anne Dupont"});

    this.setState({clients: clients})
    //le premier cleints est une propriété de la class App, le deuxième la constante créé plus haut
  };
  //quand on clique sur le button il rajoute à chaque clique une nouvelle entrée identique

  render() {
    const title = "Liste des clients";

    return (
      <div>
        <h1>{title}</h1>
        {this.state.compteur}
        <button onClick={this.handleClick}>Click me</button>
        <ul>{this.state.clients.map((client) =>
        <li key={client.id}>{client.nom} <button> X </button></li>)}</ul>
        <form>
          <input type="text" placeholder="ajouter un client" />
          <button>Confirmer</button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);