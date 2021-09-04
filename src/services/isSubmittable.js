export const isSubmittable = (obj) => {
    // console.log(Object.values(obj));
    return Object.values(obj).every(isValue);
}

const isValue = (element, index, arr) => {
    // console.log(`value: ${element && element !== null && element !== undefined ? true : false}`);
    return element && element !== null && element !== undefined ? true : false;
}