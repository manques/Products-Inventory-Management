export const loginService = {
    setItem: (obj) => {
        if(obj && Object.entries(obj).length > 0){
            for(const propery in obj){
                localStorage.setItem(propery, obj[propery]);
            }
        }
    },
    getItem: (arr) => {
        let obj;
        for(let i= 0; i < arr.length; i++) {
            obj[arr[i]] = localStorage.getItem(arr[i]);
        }
        return obj;
    },
    removeItem: (arr) => {
        for(let i= 0; i < arr.length; i++) {
            localStorage.removeItem(arr[i]);
        }
    }
}