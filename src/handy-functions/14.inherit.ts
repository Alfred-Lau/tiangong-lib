/**
 * 原型链继承
 * @param name
 * @constructor
 */

function Parent(name) {
  this.name = name;
}
Parent.prototype.eat = function () {
  console.log(this.name + " is eating");
};

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}
Child.prototype = Object.create(Parent.prototype);
Child.prototype.contructor = Child;
Child.prototype.study = function () {
  console.log(this.name + " is studying");
};

// 测试
let child = new Child("xiaoming", 16);
console.log(child.name); // xiaoming
child.eat(); // xiaoming is eating
child.study(); // xiaoming is studying
