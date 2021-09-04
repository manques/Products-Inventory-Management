import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    title: {
        textAlign: 'center',
        fontWeight: '700',
        color: theme.palette.primary.main
    }
}));

const Title = props => {
    const classes = useStyles();

    return (
       <>
            {
                props.title &&
                <Typography variant="h5"
                            className={classes.title}
                            gutterBottom>
                    {props.title}
                </Typography>
            }
       </>
    );
}

export default Title;