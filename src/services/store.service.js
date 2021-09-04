export const storeService = {
    list: {
        get: (key) => {
            let list = localStorage.getItem(key) ? 
                       JSON.parse(localStorage.getItem(key)) : 
                       [];
            return list;
        },
        set: (key, value) => {
            localStorage.setItem(key, JSON.stringify(value));
        },
        remove: (key) => {
            localStorage.removeItem(key);
        },
    },
    bool: {
        get: (key) => {
            console.log(localStorage.getItem(key));
            let bool = localStorage.getItem(key) === 'true' ? true : false;
            return bool;
        },
        set: (key, value) => {
            localStorage.setItem(key, value);
        },
        remove: (key) => {
            localStorage.removeItem(key);
        },
    }
}



