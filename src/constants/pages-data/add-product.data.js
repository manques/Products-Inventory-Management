export const addProductData = {
    title: 'Add Product',
    inputList: [
        {
            id: 'name',
            label: 'Name',
            value: null,
            type: 'text',
            variant: 'filled',
            required: true,
            disabled: false,
            error: null,
            multiline: false
        },
        {
            id: 'description',
            label: 'Description(Optional)',
            value: null,
            type: 'text',
            variant: 'filled',
            required: false,
            disabled: false,
            error: null,
            multiline: true
        },
        {
            id: 'price',
            label: 'Price',
            value: null,
            type: 'number', // decimal
            variant: 'filled',
            required: true,
            disabled: false,
            error: null,
            multiline: false
        },
        {
            id: 'quantity',
            label: 'Quantity',
            value: null,
            type: 'number',
            variant: 'filled',
            required: true,
            disabled: false,
            error: null,
            multiline: false
        },
        {
            id: 'image',
            label: 'Image(Optional)',
            value: null,
            type: 'url',
            variant: 'filled',
            required: false,
            disabled: false,
            error: null,
            multiline: false
        }
    ],
    button: 'save',
    redirect: {
        title: 'Product List',
        to: '/product-list'
    }
};