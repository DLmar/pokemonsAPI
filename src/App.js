import {Link, Route, Routes} from "react-router-dom";

import {PokemonDetails, Pokemons} from "./components";
import './App.css';


function App() {
  return (
    <div className="App">
        <h1>
            <Link to={'/'}>Pokemons</Link>
        </h1>
        <Routes>
            <Route path={'/'} element={<Pokemons/>}>
                <Route path={'/pokemons-page/pokemon-details/:id'} element={<PokemonDetails/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
