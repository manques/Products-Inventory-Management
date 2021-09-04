export const loginData = {
    title: 'Login',
    inputList: [
        {
            id: 'name',
            label: 'Name',
            value: null,
            type: 'text',
            variant: 'filled',
            required: true,
            disabled: false,
            error: null
        },
        {
            id: 'email',
            label: 'Email',
            value: null,
            type: 'email',
            variant: 'filled',
            required: true,
            disabled: false,
            error: null
        },
    ],
    button: 'login',
    redirect: {
        title: 'Product List',
        to: '/product-list'
    }
};