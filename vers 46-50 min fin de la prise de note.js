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
    const index = clients.findIndex((client) => client.id === id);

    clients.splice(index, 1);

    this.setState({ clients: clients });
  };

 handleSubmit = (event) => {
   event.preventDefault();

   console.log(this.clientInput.current.value);
 }
 //quand envoyé, pas de rechargement avec event.preventDefault()
 //lié à  <form onSubmit={this.handleSubmit}> dans la div JSX
 //ce qu'on entre dans l'input est affiché dans la console

 handleChange = (event) => {
    const value = event.currentTarget.value;
    this.setState({nouveauClient: value})
    //remplace la valeur dans state.noveauClient
    console.log(event.currentTarget.value);
//console.log(event) envoie l'information sur la console que il s epasse l'event sur l'input
//currentTarget affiche l'information de quelle ligne st touché
//value affiche la valeur tapée mais une lettre à la fois
/*lié à ça <input value={this.state.nouveauClient} onChange={this.handleChange}
          type="text" placeholder="ajouter un client" />*/
  }

  render() {
    const title = "Liste des clients";

    return (
      <div>
        <h1>{title}</h1>
        <ul>
          {this.state.clients.map((client) => (
            <li key={client.id}>
              {client.nom}{" "}
              <button onClick={() => this.handleDelete(client.id)}> X </button>
            </li>
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}> 
          <input value={this.state.nouveauClient} onChange={this.handleChange}
          type="text" placeholder="ajouter un client" />
          <button>Confirmer</button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
