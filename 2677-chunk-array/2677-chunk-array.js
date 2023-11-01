/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
let arr2 = [];
for(let i = 0; i < arr.length; i +=size) {
  let arr3 = [];
  for(let y = i; y < i + size; y++) { 
    if(arr[y] || arr[y] === 0)
    arr3.push(arr[y]);
  }
  
  arr2.push(arr3);
}



return arr2;
};
