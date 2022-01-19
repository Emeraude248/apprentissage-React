import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {

  clientInput = React.createRef();
 //pas de manipulation du DOM dans react (c'est react qui s'en charge) pas id + querySelector...
 //création de refs
 //lié à <input ref={this.clientInput} type="text" placeholder="ajouter un client" />


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
          <input ref={this.clientInput} type="text" placeholder="ajouter un client" />
          <button>Confirmer</button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
