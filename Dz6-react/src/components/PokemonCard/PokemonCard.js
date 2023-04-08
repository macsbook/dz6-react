import React, { useEffect, useState } from 'react';
import { fetchPokemon } from '../../api/fetchPokemons';

const PokemonCard = ({ pokemon }) => {
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        fetchPokemon(pokemon.url)
            .then((data) => {
                setPokemonData(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [pokemon.url]);

    if (!pokemonData) {
        return <div>Loading...</div>;
    }

    return (
        <div className='pokemonCard'>
            <div className='pokemonName'>{pokemon.name}</div>
            <img style={{width: '150px', height: '150px'}} src={pokemonData.sprites.other.dream_world.front_default} alt={pokemon.name} />
            <div className='pokemonType'>
                {pokemonData.types.map((type) => (
                    <span key={type.type.name}>{type.type.name}</span>
                ))}
            </div>
        </div>
    );
};

export default PokemonCard;