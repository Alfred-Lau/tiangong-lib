/* 

优点： 
1. 解决了每个实例对引用类型属性的修改都会被其他实例共享的问题
2. 子类可以向父类传参

缺点：
1. 无法复用父类的公共函数
2. 每次子类构造实例都得执行一次父类函数

*/

function Parent() {
  this.name = ['xiao', 'xiang'];
}

function Child() {
  Parent.call(this);
}

var Child2 = new Child();
Child2.names.push('2');
console.log(Child2.names); //[ '', '1', '2' ]

var Child3 = new Child();
Child3.names.push('3');
console.log(Child3.names); //[ '', '1', '3' ]
