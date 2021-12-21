export default function apply(scope: any = window) {
  let ret;
  let context = scope;
  context.fn = this;
  if (arguments[1]) {
    ret = context.fn(arguments[1]);
  } else {
    ret = context.fn();
  }
  return ret;
}
