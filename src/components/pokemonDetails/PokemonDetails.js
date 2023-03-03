import { useLocation } from "react-router-dom";
import { useEffect, useReducer } from "react";
import { axiosInstanceClear, getPokemon } from "../../services";

function reducer(state, action) {
    switch (action.type) {
        case "LOAD_POKEMON":
            return { ...state, pokemon: action.payload };
        case "LOAD_POKEMON_FORM":
            return { ...state, pokemonForm: action.payload };
        case "LOAD_POKEMON_ABILITY":
            return { ...state, ability: action.payload };
        default:
            return state;
    }
}

const PokemonDetails = () => {
    let {
        state: { name, url },
    } = useLocation();

    let [state, dispatch] = useReducer(reducer, {
        pokemon: {},
        pokemonForm: {},
        ability: {},
    });
    let { pokemonForm, ability } = state;

    useEffect(() => {
        getPokemon(url).then(({ data, data: { forms, abilities } }) => {
            dispatch({ type: "LOAD_POKEMON", payload: data });
            let { url } = forms[0];

            axiosInstanceClear(url).then(({ data }) => {
                dispatch({ type: "LOAD_POKEMON_FORM", payload: data });
            });

            const abilityUrl = abilities.find((ability) => !ability.is_hidden)?.ability.url;

            if (abilityUrl) {
                axiosInstanceClear(abilityUrl).then(({ data }) => {
                    dispatch({ type: "LOAD_POKEMON_ABILITY", payload: data });
                });
            }
        });
    }, [url]);

    return (
        <div>
            <div style={{width:"300px"}}>
                <h2>{name}</h2>
                <img style={{width: 200}} src={pokemonForm?.sprites?.front_default} alt=""/>
                <p style={{color:"green"}}>Effect changes: {ability?.effect_changes?.[0]?.effect_entries?.[1]?.effect}</p>
                <p style={{color: "white"}}>Ability: {ability?.effect_entries?.[1]?.effect}</p>
                <p style={{color: "blue"}}>Flavor: {ability?.flavor_text_entries?.[1]?.flavor_text}</p>
                <p>Types: {pokemonForm?.types?.[0]?.type?.name}</p>
            </div>

        </div>
    );
};

export { PokemonDetails };
