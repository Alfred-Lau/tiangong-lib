/* 

优点：
1. 解决了每个实例对引用类型属性的修改都会被其他的实例共享的问题
2. 子类可以向父类传参
3. 可实现父类方法复用


缺点：

1. 需执行两次父类构造函数，第一次是Child.prototype = new Parent(),第二次是Parent.call(this, name)造成不必要的浪费


*/

function Parent(name: string) {
  this.name = name;
  this.body = ['foo', 'bar'];
}

function Child(name: string, age: number) {
  Parent.call(this, name);
  this.age = age;
}

Child.prototype = new Parent();
// Child.prototype.constructor = Child;

var Child1 = new Child('1', 18);
Child1.body.push('head1');
console.log(Child1.name, Child1.age); //1 18
console.log(Child1.body); //[ 'foot', 'hand', 'head1' ]

var Child2 = new Child('2', 20);
Child2.body.push('head2');
console.log(Child2.name, Child2.age); //2 20
console.log(Child2.body); //[ 'foot', 'hand', 'head2' ]
