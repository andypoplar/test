/**
 * 交换相邻元素依次比较，一次比较就可以得到一个最大值，n-1次比较就可以排序完成
 * @param {*} arr 
 */

function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp;
        temp = arr[j+1];
        arr[j+1] = arr[j]
        arr[j] = temp
      }
    }
  }

  return arr;
}

// test
const arr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];
console.log(bubbleSort(arr));


