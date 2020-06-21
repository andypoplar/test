// var output = function (i) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// for (var i = 0; i < 5; i++) {
//   (function (j) {
//     setTimeout(() => {
//       console.log(j);
//     }, 1000 * j);
//   })(i)
//   // output(i)
// }

// setTimeout(() => {
//   console.log(i)
// }, 1000*i);


let tasks = [];

let output = (i) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(i);
      resolve()
    }, 1000 * i);
  })
}

for (var i = 0; i < 5; i++) {
  tasks.push(output(i))
}

Promise.all(tasks).then(res => {
  setTimeout(() => {
    console.log('asd' + i);
  }, 1000);
})

