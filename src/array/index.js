
/**
 * 数组平铺
 * @param {Array} arr 
 * @returns 
 */
export function deepFlatten(arr) {
  if(!Array.isArray(arr))return [];
  let flatten = (arr)=> [].concat(...arr);
  return flatten(arr.map(x=>Array.isArray(x)? this.deepFlatten(x): x));
}