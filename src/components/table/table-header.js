import React, { useState } from 'react';
import { makeStyles, useMediaQuery } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Search from '../search/search';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        background: 'whitesmoke',
        padding: '0.5rem'
    },
    left: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // backgroundColor: 'yellow'
    },
    leftMobile: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'pink'
    },
    title: {
        fontWeight: '700',
        color: theme.palette.primary.main,
        padding: '0.5rem',
        // backgroundColor: 'red'
    },
    right: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    search: {
        flex: 1,
        paddingRight: '0.2rem'
    },
    button: {
        background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, green 90%)`,
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 55,
        padding: '0 30px',
        fontWeight: '700'
    },

}));

const TableHeader = props => {
    const classes = useStyles();
    const { title, onSearch, search, onAdd, add } = props;
    const matches = useMediaQuery(theme => theme.breakpoints.up('sm'));

    return(
        <Paper className={classes.container}>
            <Grid container>
                <Grid item xs={12} sm={12} md={6} lg={8} xl={10}
                      className={matches ? classes.left: classes.leftMobile}>
                    <Typography className={classes.title }
                                variant="h6">
                        {title}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={2}
                      className={classes.right}>
                    <div className={classes.search}>
                        {
                            search && search.name ?
                            <Search onSearch={onSearch}
                                    name={search.name}
                                    id={search.id} />
                            : null
                        }
                    </div>
                    {
                        add && add.title ?
                        <Button className={classes.button}
                                onClick={() => onAdd()}>
                            {add.title}
                        </Button>
                        :null
                    }
                </Grid>
            </Grid>
        </Paper>
    );
}

export default TableHeader;