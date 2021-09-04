import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography  from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    container: {
        ...theme.custom.page,
        ...theme.custom.center
    },
    title: {
        color: 'red',
        fontWeight: '700',
        fontFamily: 'cursive'
    },
    subTitle: {
        color: 'red',
        fontWeight: '700'
    }
}));


const PageNotFound = props => {
    const classes = useStyles();

    return(
        <div className={classes.container}>
            <Typography variant="h4"
                        className={classes.title}>
                Page Not Found
            </Typography>
            <Typography variant="h5"
                        className={classes.subTitle}>
               404
            </Typography>
        </div>
    );
}

export default PageNotFound;