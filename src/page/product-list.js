import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Title from '../components/title/title';
import CustomTable from '../components/custom-table/custom-table';
import { deleteOne } from '../redux/reducer/products-reducer';
import { productListData } from '../constants/pages-data/product-list.data';
import TableHeader from '../components/table/table-header';
import { searchService } from '../services/search.service';
import { orderByService } from '../services/orderBy.service';

const useStyles = makeStyles(theme => ({
    container: {
        ...theme.custom.page,
        padding: '1rem'
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
}));



const ProductList = props => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    let productList = useSelector(state => state.products.productList);
    const [renderList, setRenderList] = useState(productList);
    const productColumns = productListData.columns;
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('updated');

    //orderBy(list, 'id', 'asc', 'number');

    useEffect(() => {
        console.log(order);
        console.log(orderBy);
        const list = orderByService(renderList, orderBy, order, 'number');
        setRenderList(list);
    }, [order, orderBy]);


    const handleOrderBy = (property) => {
        console.log(property);
        const isAsc = orderBy == property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    }
    useEffect(() => {
        setRenderList(productList);
    }, [productList]);

    const onEdit = (item) => {
       history.push(`/edit-product/${item.id}`);
    }

    const onDelete = (item) => {
        dispatch(deleteOne({id: item.id}));
    }

    const onSearch = (key, value) => {
        setOrder('asc');
        setOrderBy('updated');
        console.log(`${key}: ${value}`);
        if(value && productList.length > 0) {
            const searchList = searchService(`${value}`, productList);
            console.log(searchList);
            setRenderList(searchList);
        }else {
            setRenderList(productList);
        }
    }

    const onAdd = () => {
        history.push('/add-product');
    }
// title, onSearch, search, onAdd, add
    return (
       <div className={classes.container}>
           <TableHeader title="Product List" 
                        onSearch={onSearch}
                        search={{
                            id: 'search',
                            name: 'search'
                        }}
                        onAdd={onAdd}
                        add={{title: 'ADD PRODUCT'}} />
           <CustomTable rows={renderList} 
                        columns={productColumns}
                        isEdit={true}
                        isDelete={true}
                        onEdit={onEdit}
                        onDelete={onDelete}
                        order={order}
                        orderBy={orderBy}
                        handleOrderBy={handleOrderBy} />
       </div>
    );
}

export default ProductList;