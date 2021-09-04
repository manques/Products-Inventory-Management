import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Title from '../components/title/title';
import { loginData } from '../constants/pages-data/login.data';
import InputsContainer from '../components/container/inputs-container';
import Button from '../components/button/submit-button';
import { isSubmittable } from '../services/isSubmittable';
import { loginService } from '../services/login.service';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login, updateAuth } from '../redux/reducer/user.reducer';

const useStyles = makeStyles(theme => ({
    container: {
        ...theme.custom.page,
        ...theme.custom.center,
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem 1rem',
    },
    card: {
        ...theme.custom.card.form
    }
}));

const Login = props => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const resData = useSelector(state => state.user.profile);
    const [reqData, setReqData] = useState({
        name: null,
        email: null,
    });

    const handleChange = (id, value) => {
        setReqData(oldValue => ({
            ...oldValue,
            [id]: value
        }));
    }

    const onSubmit = () => {
        dispatch(login(reqData));
    }

    const isButtonSubmittable = (item) => {
        return isSubmittable({
            name: item.name,
            email: item.email
        });
    }
    useEffect(() => {
        console.log('resData');
        console.log(resData);
        if(resData && Object.values(resData).length > 0){
            history.push('/product-list');
        }
    }, [resData]);

    useEffect(() => {
        return function cleanup(){
            console.log('---------');
            console.log(resData && Object.values(resData));
            dispatch(updateAuth({
                auth: true
            }));
        };
    }, []);

    return (
        <section className={classes.container}>
            <Paper className={classes.card}>
                <Title title={loginData.title} />
                <InputsContainer list={loginData.inputList} 
                                  onChange={handleChange} />
                <Button title={loginData.button} 
                        onClick={onSubmit} 
                        disabled={!isButtonSubmittable(reqData)} />
            </Paper>
        </section>
    );
}

export default Login;