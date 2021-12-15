/* instanceof 和 isPrototypeOf  能够识别基于 组合继承创建的对象； js 中最常用的 继承方式*/

function SuperType(name) {
  this.name = name;
  this.colors = ['red', 'green', 'blue'];
}

SuperType.prototype.sayName = function () {
  console.log(this.name);
};

function SubType(name, age) {
  /* 继承属性 */
  SuperType.call(this, name);
  this.age = age;
}

/* 继承了方法 */
SubType.prototype = new SuperType();

SubType.prototype.sayAge = function () {
  console.log(this.age);
};

/* test case */

let instance01 = new SubType('liujian', 29);
instance01.colors.push('black');
console.log(instance01.colors);
instance01.sayAge();
instance01.sayName();

let instance02 = new SubType('xiaoxiang', 27);
console.log(instance02.colors);
instance02.sayAge();
instance02.sayName();
