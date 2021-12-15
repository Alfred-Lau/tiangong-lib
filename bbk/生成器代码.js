function* gen() {
  const a = yield 1;
  const b = yield 2;
  const c = yield 3;
  return [a, b, c];
}

const ins = gen();
console.log('typeof gen', typeof ins); // object

console.log(ins.next());
console.log(ins.next());
console.log(ins.next());
console.log(ins.next());
