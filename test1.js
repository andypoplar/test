// const obj = {};
// Object.defineProperty(obj,'name',{
//   value:'andynamic',
//   writable:false
// })

// obj.name = 'nike';
// console.log(obj.name);

let handler = {
  get: function (target, name) {
    // console.log('target',target);
    // console.log('name',name);
    if (target.hasOwnProperty(name)) {
      return target[name]
    } else {
      return "没有找到:" + name
    }
  },
  set: function (target, name, value) {
    target[name] = '#' + value
  },
  deleteProperty: function (target, name) {
    console.log('删除属性:' + name);
    delete target[name]
  }
}

const obj = new Proxy({}, handler);
obj.a = 1;
obj.b = 2;
// delete obj.a

console.log(obj.a);
console.log(obj.b);

import fn from './test';

console.log(fn);