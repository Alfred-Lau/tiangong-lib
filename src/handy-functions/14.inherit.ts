/**
 * 原型链继承
 * @param name
 * @constructor
 *
 * 存在问题
 * 1. 原型中包含的引用类型属性将被所有实例共享；
 * 2. 子类在实例化的时候不能给父类构造函数传参
 */

function Parent() {
  this.colors = ["black", "white"];
}
Parent.prototype.eat = function () {
  console.log("parent eating");
};

function Child(name = undefined, age = undefined) {
  this.age = age;
}

Child.prototype = new Parent();

// 测试
const c1 = new Child();
console.log(c1.colors);
c1.colors.push("brown");
const c2 = new Child();
console.log(c2.colors);

/**
 * 借用构造函数实现继承
 * - 借用构造函数实现继承解决了原型链继承的 2 个问题：引用类型共享问题以及传参问题。
 * - 但是由于方法必须定义在构造函数中，所以会导致每次创建子类实例都会创建一遍方法。
 */

function Animal(name = "") {
  this.name = name;
  this.getName = function () {
    return this.name;
  };
}

function Dog(name: string, age: number) {
  Animal.call(this, name);
}
Dog.prototype = new Animal();

/**
 * 组合继承
 *
 * - 组合继承结合了原型链和盗用构造函数，将两者的优点集中了起来。
 * - 基本的思路是使用原型链继承原型上的属性和方法，而通过盗用构造函数继承实例属性。这样既可以把方法定义在原型上以实现重用，又可以让每个实例都有自己的属性。
 */

function Animal02(name = "") {
  this.name = name;
  this.colors = ["black", "white"];
}
Animal.prototype.getName = function () {
  return this.name;
};
function Dog02(name, age) {
  Animal02.call(this, name);
  this.age = age;
}
Dog02.prototype = new Animal02();
Dog02.prototype.constructor = Dog02;

let dog1 = new Dog02("奶昔", 2);
dog1.colors.push("brown");
let dog2 = new Dog02("哈赤", 1);
console.log(dog2);
// { name: "哈赤", colors: ["black", "white"], age: 1 }

/**
 * 寄生式组合继承
 *
 * 组合继承已经相对完善了，但还是存在问题，它的问题就是调用了 2 次父类构造函数，第一次是在 new Animal()，第二次是在 Animal.call() 这里。
 * 所以解决方案就是不直接调用父类构造函数给子类原型赋值，而是通过创建空函数 F 获取父类原型的副本。
 * 寄生式组合继承写法上和组合继承基本类似，区别是如下这里：
 *
 *
 * function object(o) {
 *     function F() {}
 *     F.prototype = o
 *     return new F()
 * }
 * function inheritPrototype(child, parent) {
 *     let prototype = object(parent.prototype)
 *     prototype.constructor = child
 *     child.prototype = prototype
 * }
 * inheritPrototype(Dog, Animal)
 *
 *
 */

function Animal03(name = "") {
  this.name = name;
}

Animal03.prototype.getName = function () {
  return this.name;
};

function Cat(name = "", age = 10) {
  Animal03.call(this, name);

  this.age = age;
  this.getCatName = function () {
    return `${this.name}.${this.age}`;
  };
}

Cat.prototype = Object.create(Animal03.prototype);
Cat.prototype.constructor = Cat;

console.log(Cat.prototype.constructor);

let cat01 = new Cat();
console.log(cat01);
