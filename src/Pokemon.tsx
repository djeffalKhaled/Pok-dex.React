import { useEffect, useState } from "react";
import './style/Pokemon.css'

type Stats = {
    sprite: string // a link for an img
    id: number
    name: string
    height: number
    weight: number
    hp: number
    attack: number
    defense: number
    specialAttack: number
    specialDefense: number
    speed: number
    types: string[]
};

// Defines the whole HTML structure of a pokemon's stat
function PokemonStats(prompt : Stats) {
    return (
        <>
        <div className="PokemonStatsContainer">
            <div className="PokemonSprite">
                <img src = {prompt.sprite} alt={prompt.name}/>
            </div>
            <header className="PokemonTitle">
                <h2>{prompt.name}</h2>
                <p>ID: {prompt.id}</p>
            </header>
            <div className = "PokemonStats">
                <div className="weight">Weight: {prompt.weight} kg</div>
                <div className="height">Height: {prompt.height} m</div>
                <div className="hp">HP: {prompt.hp}</div>
                <div className="attack">Attack: {prompt.attack}</div>
                <div className="defense">Defense: {prompt.defense}</div>
                <div className="special-attack">Special Attack: {prompt.specialAttack}</div>
                <div className="special-defense">Special Defense: {prompt.specialDefense}</div>
                <div className="speed">Speed: {prompt.speed}</div>
                <div className="types">Types: {prompt.types.join(", ")}</div>
            </div>
        </div>
        </>
    )
}

type PokeName = {
    name: string;
}


// Deals with the API call and finally defines the Pokemon Component
function Pokemon(props: PokeName) {
    const [stats, setStats] = useState<Stats | null>(null);

    useEffect(() => {
        console.log("Searching for", props.name);
        fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${props.name}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('No Network Response!');
                }
                return response.json();
            })
            .then(data => {
                const fetchedStats: Stats = {
                    sprite: data.sprites.front_default,
                    id: data.id,
                    name: data.name,
                    height: data.height,
                    weight: data.weight,
                    hp: data.stats[0].base_stat,
                    attack: data.stats[1].base_stat,
                    defense: data.stats[2].base_stat,
                    specialAttack: data.stats[3].base_stat,
                    specialDefense: data.stats[4].base_stat,
                    speed: data.stats[5].base_stat,
                    types: data.types.map((type: any) => type.type.name), // transforms the map into a string
                };
                setStats(fetchedStats); // Update the state to rerender the pokemon component with the new val
            })
            .catch(error => {
                console.error('Fetch Error!', error);
                alert("Pokémon not found");
            });
    }, [props.name]); // If name gets changed, refetch it

    // Show loading if stats has not yet been updated
    if (!stats) {
        return <div>Loading...</div>;
    }

    return <PokemonStats {...stats} />;
}
export default Pokemon