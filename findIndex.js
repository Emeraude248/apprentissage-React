//supression des données affichées en cliquant sur le button X


//findIndex permet de trouver l'emplacemnt d'un élément dans un tableau
//slice pour faire une copie de clienst et ne pas travailler sur les données de l'état

import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  state = {
    clients: [
      { id: 1, nom: "Lior Chamla" },
      { id: 2, nom: "Magali Perrin" },
      { id: 3, nom: "Joseph Durand" }
    ]
  };

  handleDelete = (id) => {
    const clients = this.state.clients.slice();
    //copie du tab clients
    const index = clients.findIndex(function(client){
        return client.id === id
      });
    //quel client ? mais je suis pas sûre de comprendre d'où vient le "client" ^^
    // version une ligne : const index = clients.findIndex(client => client.id === id });
  
      clients.splice(index, 1);
      //suppression à partir de l'index quel client, splice le retire
      this.setState({ clients: clients });
      //mise à jour du tab affiché, on remplace le tab propriété de App par la variable créée plus haut (copie du premier puis modifiée)
    };

  render() {
    const title = "Liste des clients";

    return (
      <div>
        <h1>{title}</h1>
        <ul>{this.state.clients.map((client) =>
        <li key={client.id}>{client.nom} <button onClick={() => this.handleDelete(client.id)}> X </button></li>)}</ul>
        //fonction fléchée pour garder le contexte du this
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