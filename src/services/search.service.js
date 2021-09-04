export const searchService = (searchText, list, field="name") => {
    console.log(searchText);
    return list.filter(item => {
        console.log(item[field]);
        const check = item[field].toLowerCase().search(searchText.toLowerCase());
        console.log(check);
        return check >=0 ? true : false;
    });
}