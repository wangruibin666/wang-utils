/**
 * 浅拷贝
 * @param {*} target 
 * @returns 
 */
export function clone (target) {
  if (target instanceof Array) {
    // return [...target]
    // return target.slice()
    // return [].concat(target)
    // return Array.from(target)
    // return target.filter(value => true)
    // return target.map(item => item)
    return target.reduce((pre, item) => {
      pre.push(item)
      return pre
    }, [])
  } else if (target!==null && typeof target==='object') {
    return {...target}
  } else {// 如果不是数组或对象, 直接返回
    return target
  }
}
