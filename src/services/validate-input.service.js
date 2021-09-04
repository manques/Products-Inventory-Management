export const validateInputService = (type, value) => {
    switch(type) {
        case 'text': 
        return onText(value);
        case 'number': 
        return onNumber(value);
        case 'email': 
        return onEmail(value);
        case 'url': 
        return onUrl(value);
        default: 
        return true;
    }
}

function onText(value){
    console.log(value);
    const check = (/^[A-Za-z\s]+$/).test(value);
    console.log(check);
    return check;
}
function onNumber(value){
    return (/^\d*$/).test(value)
}

function onEmail(value){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
}
function onUrl(value){
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(value);
}