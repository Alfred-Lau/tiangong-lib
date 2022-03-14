/**
 *  确认某个属性是在原型上而不是在实例上
 * @param object
 * @param name
 */
export default function isInPrototypeNotInstance(
  object: Object,
  name: string
): boolean {
  return !object.hasOwnProperty(name) && name in object;
}
