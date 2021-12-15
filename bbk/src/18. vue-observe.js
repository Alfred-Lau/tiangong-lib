const data=  {
  name:'liujin',
  age:10000,
  info:{
    age:100
  },
  arr:[]
}

function isPlainObject(obj) {
  return Object.prototype.toString.call(obj)
}

function update(){
  console.log('update')
}

/* Vue 针对数组的响应式无法定义 的情况下，直接 hack 掉 native array */

// 重新定义数组原型，创建新对象，原型指向 oleArray，再扩展新的方法不会影响原型
const oldArray = Array.prototype
// !!! 不能直接挂在 Array native 对象上面
const arrProto = Object.create(oldArray);

['push', 'pop', 'shift', 'unshift','splice'].forEach(methodName=>{
  arrProto[methodName] = function () {
    update()
    oldArray[methodName].call(this, ...arguments)
  }
})


function observe(data) {
  if (isPlainObject(data) !== '[object Object]' && isPlainObject(data) !== '[object Array]' ) {
    return 
  }


  /* 专门针对数组做处理 */
  if (Array.isArray(data)) {
    data.__proto__ = arrProto
  }

  for(let item in data){
    defineReactive(data, item, data[item])
  }
}

function defineReactive(data,key ,value) {
  observe(value)

  Object.defineProperty(data,key,{
    get(){
      return value
    },

    set(newValue){
      if (value === newValue) {
        return 
      }

      value = newValue
      update()
    }


  })
}
observe(data)

data.name = 'xxxx'
data.age = 200
data.info.age = 1000

data.arr.push(11)



