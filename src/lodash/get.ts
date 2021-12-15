export default function get<T extends object, K extends keyof T>(
  target: T,
  key: K
): T[K] {
  return target[key];
}
