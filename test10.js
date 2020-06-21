function unique(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (obj[item] == undefined) {
      obj[item] = item
    } else {
      arr[i] = arr[arr.length-1];
      arr.length--
      i--
    }
  }
  return arr
}

let arr = [1,2,2,5,6,7,7,7]

console.log(unique(arr));