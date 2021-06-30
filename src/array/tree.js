
/**
 * 
 * @param {Array} arrs 树形数据
 * @param {string} childs 树形数据子数据的属性名,常用'children'
 * @param {Array} attrArr 需要提取的公共属性数组
 * @returns 
 */
export function extractTree(arrs,childs,attrArr){
  let list = [];
  const getObj = (arr)=>{
    arr.forEach(function(row){
      let obj = {};
      attrArr.forEach(item=>{
        obj[item] = row[item]
      });
      list.push(obj);
      if(row[childs]){
        getObj(row[childs]);
      }
    })
    return list;
  }
  return getObj(arrs);
}