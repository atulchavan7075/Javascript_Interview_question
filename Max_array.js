let arr = [2,5,6,7,55]
 
function max_num(arr){
    let max = arr[0]
    
    for(let i = 1;i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}

let RESULT =   max_num(arr);

console.log('result===', RESULT)