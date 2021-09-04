import { createSlice } from '@reduxjs/toolkit';
import { storeService } from '../../services/store.service';

const initialState = {
    profile: storeService.list.get('profile'),
    auth: storeService.bool.get('auth'),
};



export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            const data = action.payload;
            if(Object.values(data).length > 0){
                state.profile = data;
                storeService.list.set('profile', state.profile);
            }
        },
        updateAuth: (state, action) => {
            state.auth = action.payload.auth;
            storeService.list.set('auth', state.auth);
        },
        exist: (state, action) => {
            state.auth = action.payload.auth;
            state.profile = action.payload.profile;
            
        },
        resetUser: (state) => {
            state.profile = null;
            state.auth = false;
            localStorage.clear();
        }
    }
});

export const { login, updateAuth, exist, resetUser } = userSlice.actions;

export default userSlice.reducer;

export const user = state => state.user.profile;