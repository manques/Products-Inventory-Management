import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Title from '../components/title/title';
import { addProductData } from '../constants/pages-data/add-product.data';
import InputsContainer from '../components/container/inputs-container';
import Button from '../components/button/submit-button';
import { isSubmittable } from '../services/isSubmittable';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { add } from '../redux/reducer/products-reducer';

const useStyles = makeStyles(theme => ({
    container: {
        ...theme.custom.page,
        ...theme.custom.center,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem 1rem'
    },
    card: {
        ...theme.custom.card.form
    }
}));

const AddProduct = props => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const resData = useHistory(state => state.products);
    const [reqData, setReqData] = useState({
        name: null,
        description: null,
        price: null,
        quantity: null,
        image: null
    });

    const handleChange = (id, value) => {
        console.log(id);
        console.log(value);
        setReqData(oldValue => ({
            ...oldValue,
            [id]: value
        }));
    }

    const onSubmit = () => {
        console.log(reqData);
        dispatch(add(reqData));
        history.push('/product-list');
    }

    const isButtonSubmittable = (item) => {
        return isSubmittable({
            name: item.name,
            price: item.price,
            quantity: item.quantity
        });
    }

    useEffect(() => {
        console.log(resData);
    }, [resData]);

    return (
        <section className={classes.container}>
            <Paper className={classes.card}>
                <Title title={addProductData.title} />
                <InputsContainer list={addProductData.inputList} 
                                  onChange={handleChange} />
                <Button title={addProductData.button} 
                        onClick={onSubmit} 
                        disabled={!isButtonSubmittable(reqData)} />
            </Paper>
        </section>
    );
}

export default AddProduct;