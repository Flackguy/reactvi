import  {useState} from "react";
import './App.css';

function App() {

  const [fruits, setFruits] = useState([
    {id: 1, nom: "Abricot"},
    {id: 2, nom: "Banane"},
    {id: 3, nom: "Cerise"}
  ]);

  const [nouveauFruit, setNouveauFruit] = useState("");

 const handleDelete = (id) => {
  //copie du state
    const fruitsCopy = [...fruits];

  //manipuler la copie
  const fruitsCopyUpdated = fruitsCopy.filter(fruit => fruit.id !== id);

  //modifier la copie
  setFruits(fruitsCopyUpdated);
 }

  const handleChange = (event)=>{
    setNouveauFruit(event.target.value);
  }

  const handleAjouterFruit = (event)=>{
      event.preventDefault();
      const fruitsCopy = [...fruits];
      const id = new Date().getTime();
      const nom = nouveauFruit;
      fruitsCopy.push({id: id, nom: nom});
      setFruits(fruitsCopy);
      setNouveauFruit("");
  }

  return (
    <div className="App">
      <h1>Liste de fruits</h1>  
      {
        fruits.map((fruit)=>(
          <li key={fruit.id}>{fruit.nom}<button onClick={()=>handleDelete(fruit.id)}>X</button></li>
      ))}
      <form action="submit" onSubmit={handleAjouterFruit}>
        <input type="text" placeholder="ajouter un fruit..." onChange={handleChange} />
        <button >Ajouter +</button>
      </form>
    </div>
  );
}

export default App;
