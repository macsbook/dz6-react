import { useEffect, useState } from "react";
import { fetchPokemons } from "./api/fetchPokemons";
import PokemonCard from "./components/PokemonCard/PokemonCard";

function App() {
    const [theme, setTheme] = useState('light');
    const [pokemonList, setPokemonList] = useState([]);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    }

    useEffect(() => {
        fetchPokemons().then((pokeList) => setPokemonList(pokeList));
    }, []);

    console.log(pokemonList, 'pokemon list state');

    return (
        <div className={`app ${theme}`}>
            <div className="container">
                <button onClick={toggleTheme}>Change Theme</button>
                <div className="pokemonList">
                    {pokemonList.map(pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon} />)}
                </div>
            </div>
        </div>
    );
}

export default App;