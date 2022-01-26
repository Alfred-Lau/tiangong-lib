const PENDING = Symbol("Promise#PENDING");
const FULFILLED = Symbol("Promise#FULFILLED");
const REJECTED = Symbol("Promise#REJECTED");

class Promise {
  private status;
  constructor(fn) {
    this.status = PENDING;
  }
}

export default Promise;
