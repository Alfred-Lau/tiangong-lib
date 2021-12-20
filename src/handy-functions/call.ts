export const slice = Array.prototype.slice;

export default function call(scope: any = window, ...rest) {
  let ret;
  let context = scope;
  context.fn = this;
  if (arguments[1]) {
    ret = context.fn(slice.call(rest));
  } else {
    ret = context.fn();
  }

  return ret;
}
