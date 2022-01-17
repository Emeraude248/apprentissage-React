const JSX = (
    <div>
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
    </div>
  );
  // Change code below this line
  
  ReactDOM.render(JSX, document.getElementById("challenge-node"));
  //dans le fichier html, il y a une div avec l'id challenge-node
  //je l'avais sauf les guillemets, j'avais oublié les guillement pour l'id ><
  //ici on va chercher le noeud du DOM HTML pour y placer le composant React grace à l'API ReactDOM