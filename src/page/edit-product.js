import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Title from '../components/title/title';
import { editProductData } from '../constants/pages-data/edit-product.data';
import InputsContainer from '../components/container/inputs-container';
import Button from '../components/button/submit-button';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { edit, productById } from '../redux/reducer/products-reducer';



const useStyles = makeStyles(theme => ({
    container: {
        ...theme.custom.page,
        ...theme.custom.center,
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem 1rem'
    },
    card: {
        ...theme.custom.card.form
    }
}));

const EditProduct = props => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();
    const id = params.id;
    const product = useSelector(state => productById(state, id));
    const [inputList, setInputList] = useState();
    const [reqData, setReqData] = useState({
        id: id
    });
    const [isUpdated, setIsUpdated] = useState(false);

    const handleChange = (id, value) => {
        console.log(id);
        console.log(value);
        setReqData(oldValue => ({
            ...oldValue,
            [id]: value
        }));

        setIsUpdated(true);
    }

    const onSubmit = () => {
        console.log(reqData);
        dispatch(edit(reqData));
        history.push('/product-list');
    }

    useEffect(() => {
        console.log(product);
        if(product) {
            setInputList(() => {
                const list = editProductData.inputList.map(item => {
                    return {
                        ...item,
                        value: product[item.id]
                    };
                });
                return list;
            });
        }
    }, [product]);

    const isButtonSubmittable = (data) => {
        console.log(isUpdated);
        console.log(Object.values(data));
        return (isUpdated && (Object.values(data).length > 1));
    }
    
    return (
        <section className={classes.container}>
            {
                inputList && product ? 
                <Paper className={classes.card}>
                    <Title title={editProductData.title} />
                    <InputsContainer list={inputList} 
                                    onChange={handleChange} />
                    <Button title={editProductData.button} 
                            onClick={onSubmit} 
                            disabled={!isButtonSubmittable(reqData)} />
                </Paper>:
                <Title title={`No Product Found`} />
            }
        </section>
    );
}

export default EditProduct;