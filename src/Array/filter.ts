export function filter<T>(
  arr: Array<T>,
  filterFn: (item: T, index: number) => boolean
): Array<T> {
  if (typeof filterFn !== "function") {
    throw new Error("Filter needs to be a function");
  }

  if (!Array.isArray(arr)) {
    throw new Error("arr should be an Array");
  }

  const ret: T[] = [];

  for (let i = 0; i < arr.length; i += 1) {
    const item = arr[i];
    const isChosen = filterFn(item, i);
    if (isChosen) {
      ret.push(item);
    }
  }

  return ret;
}

const arr = [1, 2, 3, 4, 5];

function filterFn(item, index) {
  if (item % 2 === 0) {
    return true;
  }

  return false;
}

const result = filter(arr, filterFn);

console.log(result, result.length);
