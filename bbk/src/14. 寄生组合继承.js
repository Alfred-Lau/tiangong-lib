/* extend 一般都是用 寄生组合继承 */

/* function inheritPrototype(subType,superType){
  var prototype=Object.create(superType.prototype)
  prototype.constructor=subType
  subType.prototype=prototype
}
function SuperType(name){
 this.name=name
 this.colors=["red","blue","green"]
}
SuperType.prototype.sayName=function(){
 console.log(this.name)
}

function SubType(name,age){
  SuperType.call(this,name)
  this.age=age
}
inheritPrototype(SubType,SuperType)
SubType.prototype.sayAge=function(){
   console.log(this.age)
}
 */

function extend(subType, superType) {
  let prototype = Object.create(superType.prototype);
  // 修复原型
  prototype.constructor = subType;
  subType.prototype = prototype;
}

function SuperType(name) {
  // this.name = name;
  // this.colors = ['r', 'g', 'b'];
}

// SuperType.prototype.sayName = function () {
//   console.log(this.name);
// };

function SubType(name, age) {
  SuperType.call(this, name);
  // this.age = age;
}

extend(SubType, SuperType);

// SubType.prototype.sayAge = function () {
//   console.log(this.age);
// };

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
