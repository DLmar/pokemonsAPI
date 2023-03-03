import {Link} from "react-router-dom";

import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";


const useStyles = makeStyles({
    root: {
        width: 200,
        height: 100,
        backgroundColor: 'white',
        padding: '1rem',
        display: "grid",
        gap: '10px',
        '&:hover': {
            backgroundColor: 'yellow',
            cursor: 'pointer'
        },
        fontSize: '30px'
    },
});

const Pokemon = (props) => {

    let {item} = props
    const classes = useStyles();
    console.log(item?.name)
    return (
        <div style={{margin:'10px'}}>
            <Link to={`/pokemons-page/pokemon-details/${item.name}`} state={item}>
            <Paper className={classes.root}>
                <b>{item?.name}</b>
            </Paper>
            </Link>
        </div>

    );
};

export {Pokemon};
