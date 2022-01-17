//créer un composant React à base de fonciton JS

const MyComponent = function() {
   
    return(
    <div>Hello you ^^</div>
    );
    
  }

  /*le composant est la base de React (component)
  on peut créer un composant  à partir d'une fonction js
  qui return du JSX ou null
  il faut que le nom de la fonction commence par une masjucule*/


  //créer un composant React avec class

  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
     render() {
        return(
        <div>
            <h1>Hello React!</h1>
        </div>
        );
    }

  };

  /*class synthaxe ES6 entendu React.Component
  la class contient un constructor usper qui appel le constructeur de la classe parent (React.Component)
  les props servent à quoi ? que le composant soit correctement initialisé 
  d'autres utilisations possibles*/


  //composant avec composition

  const ChildComponent = () => {
      //fonction fléchée ES6
    return (
      <div>
        <p>I am the child</p>
      </div>
    );
  };
  
  class ParentComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>I am the parent</h1>
          { }
          <ChildComponent />
          { }
        </div>
      );
    }
  };

/* mettre l'enfant dans le parent avec des balises fermées < blabla />
à quoi servent les accolades au dssus et en dessous ? à mettre des commentaires ? 
(j'ai retiré les coms)
 */


//composants imbriqués


const TypesOfFruit = () => {
    return (
      <div>
        <h2>Fruits:</h2>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  };
  
  const Fruits = () => {
    return (
      <div>
        <TypesOfFruit />
      </div>
    );
  };
  
  class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
            <Fruits />  
        </div>
      );
    }
  };

  /*on prend TypesOfFruit, on le met dans Fruits et on fait la même dans typeOfFood
  un enfant dans un composant parent lui même enfant d'un autre parent ^^
  c'est beau la famille :D
  */

  //Encore plus de composants !!!
  
  class Fruits extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h2>Fruits:</h2>
          <NonCitrus />
          <Citrus />
        </div>
      );
    }
  };
  
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

  /* Vegetables, Citrus et NonCitrus est donné en coulisse (freeCodeCamp) */
