

export function unique(array) {
  const arr = []
  const contain = {}
  array.forEach(item => {
    if (!contain.hasOwnProperty(item)) {
      arr.push(item)
      contain[item] = true
    }
  })

  return arr
}

/**
 * 
 * @param {Array} array 
 * @param {string} key 
 * @returns {Array}
 */
export function uniqueByAttr(array, key) {
  const hash = {};
  const arr = array.reduce((preVal, curVal) => {
    hash[curVal[key]]
      ? ""
      : (hash[curVal[key]] = true && preVal.push(curVal));
    return preVal;
  }, []);
  return arr;
}