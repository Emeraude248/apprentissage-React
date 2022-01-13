//fonction js en une ligne (sur react mais js ?)

const elements = this.state.clients.map(function(client) {
      return <li>{client.nom} <button> X </button></li>
    })

    //devient

const elements = this.state.clients.map((client) =>
       <li>{client.nom} <button> X </button></li>
    )


//le code entier

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

  render() {
    const title = "Liste des clients";
    const element = <li>Test variable</li>
    const elements = this.state.clients.map((client) =>
       <li>{client.nom} <button> X </button></li>
    )
    return <div>
      <h1>{title}</h1>
      <ul>
        {elements}
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


