// let arr = [1, 2, 3, 8, 12, 9]
// let arr2 = [11, 19, 4]

// let arr3 = arr.concat(arr2).sort((m, n) => (m - n))
// console.log(arr3);

// function abc() {
//   console.log(1)
// }

// function fn(abc) {
//   console.log(abc);
//   var abc = 6;

//   // function abc() {
//   //   console.log(2)
//   // }
// }
// console.log(fn(abc));

function mynew(Parent, ...test) {
  let result = {};

  result.__proto__ = Parent.prototype;

  let resultParent = Parent.apply(result, test);
  if (typeof resultParent === 'object' && resultParent !== null || typeof resultParent === 'function') {
    return resultParent
  }

  return result
}

function Parent(name, age) {
  this.name = name;
  this.age = age;
}

let child = mynew(Parent, '21', 'andy', )
console.log(child);


let arr = [1, 2, 3, 4, 5];
let arr2 = [2, 3, 4, 5, 6, 7, 8, 9];

let arr3 = arr.concat(arr2)

let arr4 = Array.from([new Set(arr3)])

Promise.all = function (promises) {
  let values = new Array(promises.length);
  let resolveCount = 0;
  return new Promise((resolve, reject) => {
    promises.foreach((p, index) => {
      p.then(value => {
        values[index] = value
        resolveCount++
        if (resolveCount === promises.length) {
          resolve(values)
        }
      }, reason => {
        reject(reason)
      })
    })
  })
}

function myInstanceOf(left, right) {
  let proto = left.__proto__;
  while (true) {
    if (proto === null) return false
    if (proto === right.prototype) return true
    if (proto !== right.prototype) {
      proto = proto.__proto__
    }
  }
}

myInstanceOf('a', String)

function isObject(obj) {
  const result = Object.prototype.toString.call(obj).slice(8, -1)
  return result === 'Object' || result === 'Array'
}

function deepClone(target, hash = new WeakMap()) {
  if (!isObject(target) && target !== null) return target;

  if (hash.has(target)) return hash.get(source)

  const result = Array.isArray(target) ? [] : {};

  hash.set(target,result)

  Reflect.ownKeys(target).forEach(key => {
    if (isObject(target[key])) {
      result[key] = deepClone(target[key],hash)
    } else {
      result[key] = target[key]
    }
  })
  return result
}

let obj = {
  name: 'andy',
  colors: ['red', 'blue']
}


let obj2 = deepClone(obj)

obj.a = obj2

obj2.b = obj

obj.colors.push('black')

console.log(obj);

console.log(obj2)