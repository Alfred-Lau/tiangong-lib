Array.prototype.filter2 = function (cb, context) {
  if (this == null) {
    throw new Error('filter can not be called on null or undefined');
  }

  if (typeof cb !== 'function') {
    throw new Error('cb must be a function');
  }

  const O = Object(this);
  const len = O.length >>> 0;
  let T = context;
  let k = 0;
  let to = 0;

  const A = Array(len);

  while (k < len) {
    if (k in O) {
      let kValue = O[k];
      if (cb.call(T, kValue, k, O)) {
        A[to++] = kValue;
      }
    }
    k++;
  }

  A.length = to;

  return A;
};
