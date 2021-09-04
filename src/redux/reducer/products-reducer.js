import { createSlice, nanoid } from '@reduxjs/toolkit';
import { storeService } from '../../services/store.service';


const initialState = {
    productList: storeService.list.get('productList')
};

export const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        add: (state, action) => {
            console.log('--add---');
            console.log(state.productList);
            const data = action.payload;
            if(Object.values(data).length > 0) {
                state.productList.push({
                    ...data,
                    id: nanoid(),
                    created: new Date(),
                    updated: new Date()
                });
                storeService.list.set('productList', state.productList);
            }
        },
        edit: (state, action) => {
            const data = action.payload;
            console.log('--edit---');
            console.log(state.productList);
            console.log(data);
            if(Object.values(data).length > 0) {
                state.productList = state.productList.map(item => {
                    console.log(item.id);
                    console.log();
                    console.log(String(item.id) === String(data.id));
                    if(String(item.id) === String(data.id)){
                        return {
                            ...item,
                            ...data,
                            updated: new Date()
                        };
                    } else {
                        return item;
                    }
                });
                storeService.list.set('productList', state.productList);
            }
        },
        deleteOne: (state, action) => {
            console.log('--delete one---');
            console.log(state.productList);
            const data = action.payload;
            if(Object.values(data).length > 0) {
                state.productList = state.productList
                .filter(item => String(item.id) !== String(data.id));
                storeService.list.set('productList', state.productList);
            }
        },
        deleteAll: (state, action) => {
            state.productList = [];
            storeService.list.remove('productList');
        },
        resetProducts: (state) => {
            state.productList = [];
        }
    }
});

export const { add, edit, deleteOne, deleteAll, resetProducts} = productsSlice.actions;

export default productsSlice.reducer;

export const productById = (state, id ) => {
    const product = state.products.productList.find(item => String(item.id) === String(id));
    return  product ? product: null;
} 