// function flattenDeep(arr) {
//   return arr.flat(Infinity)
// }

// function flattenDeep(arr) {
//   return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), [])
// }


// var arr = [1, 2, [5, 2], 9, [
//   [55]
// ]];
// console.log(flattenDeep(arr));

function uniqueArray(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (obj[item] === undefined) {
      obj[item] = item;
    } else {
      arr[i] = arr[arr.length - 1]
      arr.length--;
      i--;
    }
  }
  return arr
}

let arr = [1, 2, 3, 5, 9, 1, 2, 5];
// console.log(uniqueArray(arr)); 
console.log(Array.from(new Set(arr)));



function numMul(n) {
  if (n <= 1) return 1
  return n * numMul(n-1)
}

console.log(numMul(15));


const obj = {
  a:1
}

function sayA(){
  console.log(this.a);
}

sayA.bind(obj)();