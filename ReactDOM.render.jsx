//élément JSX

const JSX = (
    <div>
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
    </div>
  );
  
  ReactDOM.render(JSX, document.getElementById("challenge-node"));
  //dans le fichier html, il y a une div avec l'id challenge-node
  //je l'avais sauf les guillemets, j'avais oublié les guillement pour l'id ><
  //ici on va chercher le noeud du DOM HTML pour y placer le composant JSX grace à l'API ReactDOM

  //Et avec un composant React ?

  class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          <Fruits />
          <Vegetables />
        </div>
      );
    }
  };
 
  ReactDOM.render(<TypesOfFood />, document.getElementById("challenge-node"))

  /*avec le ; pas ok, je suis perplexe... 
  donc il faut mettre des balises fermées pour rendre les composants React
  (les composants Fruits et Vegetables sont donnés en coulisses)
  */