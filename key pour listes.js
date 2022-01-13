https://reactjs.org/docs/lists-and-keys.html#keys


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
    // const clients = this.state.clients.slice();
    // clients.push({id: 4, nom: "Anne Dupont"});
  };

  render() {
    const title = "Liste des clients";

    const elements = this.state.clients.map((client) => (
      <li key={client.id}>
      //key nouveauté pour les listes il faut mettre une clé pour réact (voir lien)
        {client.nom} <button> X </button>
      </li>
    ));

    return (
      <div>
        <h1>{title}</h1>
        {this.state.compteur}
        <button onClick={this.handleClick}>Click me</button>
        <ul>{elements}</ul>
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
