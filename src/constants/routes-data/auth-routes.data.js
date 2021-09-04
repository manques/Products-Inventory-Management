import AddProduct from '../../page/add-product';
import EditProduct from '../../page/edit-product';
import ProductList from '../../page/product-list';

export const authRoutesData = [
    {
        id: 1,
        path: '/add-product',
        exact: true,
        component: AddProduct
    },
    {
        id: 2,
        path: '/edit-product/:id',
        exact: true,
        component: EditProduct
    },
    {
        id: 3,
        path: '/product-list',
        exact: true,
        component: ProductList
    },
];