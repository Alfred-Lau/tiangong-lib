/* 

复制传入的对象到创建对象的原型上，从而实现继承

缺点：

1. 和原型链继承一样，每个实例对引用类型属性的修改都会被其他的实例共享


*/

// function createObj(o) {
//   function F() {}
//   F.prototype = o;
//   return new F();
// }

// let person = {
//   name: 'xiaoxiang',
//   body: ['foo', 'bar']
// };

// let p1 = createObj(person);
// let p2 = createObj(person);

// console.log(p1);
// p1.body.push('head');
// console.log(p2);

let person = {
  name: 'xiaoxiang',
  getName() {
    return this.name;
  }
};

let child = Object.create(person, {
  name: {
    value: 'xiaopchao'
  }
});

console.log(child.getName()); // xiaopchao
