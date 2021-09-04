
// list = list, prop
export function orderByService (list, field, order, type){
   let innerList = list;
   for(let i = 0; i < innerList.length; i++){
       for(let j = i+1; j < innerList.length; j++){
           let a = (innerList[i])[field];
           let b = (innerList[j])[field];
           
           a = type === 'string' ? 
               a.toLowerCase(): 
               Number(a);

           b = type === 'string' ? 
               b.toLowerCase(): 
               Number(b);
               
           let check = checkCondition(a, b, order);
           if(check){
               // swap
               innerList = swap([...innerList],i, j);
           }
       }
   }
   return innerList;
}

function checkCondition(a, b, order) {
   if(order === 'asc'){
       return a > b ? true: false;
   } else{
       return a < b ? true: false;
   }
}

function swap(list, i, j){
      let innerList = list;
      let temp = innerList[j];
      innerList[j] = innerList[i];
      innerList[i] = temp;
      return innerList;
}

