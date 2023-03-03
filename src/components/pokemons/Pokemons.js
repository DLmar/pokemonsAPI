import React, { useEffect, useState } from 'react';
import { getPokemons } from '../../services';
import { Pokemon } from '../pokemon/Pokemon';
import { Outlet } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        padding: '30px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'justify-between',
    },
    gridContainer: {
        display: 'grid',
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: '20px',
        width: "400px"
    },
}));

const Pokemons = () => {
    const classes = useStyles();
    const [pokemons, setPokemons] = useState([]);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        getPokemons(12, counter).then((value) => {
            setPokemons(value.data.results);
        });
    }, [counter]);

    return (
        <div className={classes.root}>
            <div style={{display:"flex"}}>
                <div className={classes.gridContainer}>
                    {pokemons.map((pokemonItem) => (
                        <Pokemon key={pokemonItem.name} item={pokemonItem}/>
                    ))}
                </div>
                <div style={{position:"absolute",right:100}}><Outlet/></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
                <div>
                    <button
                        style={{ padding: '5px 20px' }}
                        onClick={() => {
                            setCounter(counter - 12);
                        }}
                    >
                        prev
                    </button>
                    <button
                        style={{ padding: '5px 20px' }}
                        onClick={() => {
                            setCounter(counter + 12);
                        }}
                    >
                        next
                    </button>
                </div>
            </div>
        </div>
    );
};

export { Pokemons };
