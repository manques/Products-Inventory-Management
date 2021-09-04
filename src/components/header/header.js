import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar  from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import { companyData } from '../constants/company.data';
import logo from '../../assets/logo.png';
import MainMenu from './main-menu';
import { useSelector, useDispatch } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { resetUser } from '../../redux/reducer/user.reducer';
import { resetProducts } from '../../redux/reducer/products-reducer';
import { useHistory } from 'react-router';

const useStyles = makeStyles(theme => ({
    container: {
    },
    appBar: {
        ...theme.custom.header
    },
    logo: {
        width: 'auth',
        maxWidth: '100%',
        height: '50px'
    },
    spacer: {
        margin: 'auto'
    },
    avatar: {
        backgroundColor: theme.palette.secondary.main,
        margin: '0rem 0.2rem'
    },
    name: {
        
    },
    logout: {
        margin: '0rem 1rem',
        // color: 'red'
    }
}));

const Header = props => {
    const classes = useStyles();
    const auth = useSelector(state => state.user.auth);
    const user = useSelector(state => state.user.profile);
    const dispatch = useDispatch();
    const history = useHistory();

    const logout = () => {
        console.log('logout');
        dispatch(resetUser());
        dispatch(resetProducts());
        history.push('/');
    }

    const onAuth = user => {
        return(
            <>
                <Avatar className={classes.avatar}>
                    {user.name[0]}
                </Avatar>
                <Typography variant="h6"
                            className={classes.name}>
                    {user.name}
                </Typography>
                <IconButton className={classes.logout}
                            color="secondary"
                            title="logout"
                            aria-label="upload picture"
                            component="span"
                            onClick={() => logout()}>
                    <ExitToAppIcon />
                </IconButton>
            </>
        );
    }

    useEffect(() => {
        console.log(user);
    }, [user]);

    return(
        <header className={classes.container}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <img src={logo} 
                         className={classes.logo} />
                    <div className={classes.spacer}></div>
                    <MainMenu />
                    {
                        auth &&
                        onAuth(user)
                    }
                </Toolbar>
            </AppBar>
        </header>
    );
}

export default Header;