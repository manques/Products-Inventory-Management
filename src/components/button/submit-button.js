import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    container: {
        flex: 1,
        width: '100%'
    },
    button: {
        width: '100%',
        padding: '0.6rem'
    }
}));


const SubmitButton = props => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Button variant={props.variant ? props.variant: 'contained'}
                    color={props.color ? props.color: 'primary'}
                    onClick={props.onClick}
                    className={classes.button}
                    disabled={props.disabled}>
                {props.title}
            </Button>
        </div>
    );
}

export default SubmitButton;