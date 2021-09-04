import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    container: {

    },
    input: {
        width: '100%',
    }
}));

const Search = props => {
    const classes = useStyles();
    const { id, name, onSearch } = props;
    const [value, setValue] = useState();

    const handleChange = (event) => {
        const val = event.target.value;
        setValue(val);
        onSearch(id, val);
    }

    return(
        <TextField id={id} 
                   placeholder="search..."
                   variant="filled"
                   name={name}
                   value={value}
                   onChange={handleChange}
                   className={classes.input} />
    );
}

export default Search;