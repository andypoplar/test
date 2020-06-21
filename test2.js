/**
 * 
 * @param {*} object 
 * @return {Boolean}
 */
function isObject(object) {
  const type = Object.prototype.toString.call(object).slice(8, -1);
  return type === 'Object' || type === 'Array'
}

function deepClone(source, hash = new WeakMap()) {
  // 1. 判断不是数组或者对象的时候则返回其本身
  if (!isObject(source)) return source
  
  // 2. 通过WeakMap解决循环引用问题
  if (hash.has(source)) return hash.get(source);
  
  // 3. 判断是否是数组
  const target = Array.isArray(source) ? [] : {};
  hash.set(source, target);
  
  // 4. 利用`Reflect.ownKeys()`获取source本身的属性(非原型链上的属性), 且包含了symbol类型的属性
  Reflect.ownKeys(source).forEach(key => {
    
    // 5. 再次判断是否是对象类型
    if (isObject(source[key])) {
      target[key] = deepClone(source[key], hash)
    } else {
      target[key] = source[key]
    }
  })
  
  // 6. 返回target
  return target
}

let obj = {
  name: 'andy',
  colors: ['red', 'blue'],
  say(){
    return 1
  }
}
obj.a = obj

let obj2 = deepClone(obj)

obj.a.colors.push('asd')

obj.name = 'James';
obj.colors.push('black')

console.log(obj);
console.log(obj2)