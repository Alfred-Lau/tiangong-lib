Array.prototype.push2 = function (...values) {
  const O = Object(this);
  let len = O.length >>> 0;
  let argsLen = values.length >>> 0;

  if (len + argsLen > 2 ** 53 - 1) {
    throw new TypeError(
      'The number of array is over the max value restricted!'
    );
  }

  for (let j = 0; j < argsLen; j++) {
    O[len + j] = values[j];
  }

  const newLength = len + argsLen;

  O.length = newLength;
  return newLength;
};

Array.prototype.pop2 = function () {
  let O = Object(this);
  let len = this.length >>> 0;
  if (len === 0) {
    O.length = 0;
    return undefined;
  }
  len--;
  let value = O[len];
  delete O[len];
  O.length = len;
  return value;
};
