/* 
缺点：
1. 每个实例对引用类型属性的修改都会被其他的实例共享
2. 在创建Child实例的时候，无法向Parent传参。这样就会使Child实例没法自定义自己的属性（名字）

*/

function Parent() {
  this.names = ['arzh'];
}

Parent.prototype.getName = function() {
  console.log(this.name);
};

function Child() {}

// 精髓

Child.prototype = new Parent();

let child = new Child();

child.getName();

// 1. 每个实例对引用类型属性的修改都会被其他的实例共享
var arzhChild2 = new Child();
arzhChild2.names.push('arzh2');
console.log(arzhChild2.names); //[ 'arzh', 'arzh1', 'arzh2' ]

var arzhChild3 = new Child();
arzhChild3.names.push('arzh3');
console.log(arzhChild2.names); //[ 'arzh', 'arzh1', 'arzh2', 'arzh3' ]
