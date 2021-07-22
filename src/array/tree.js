
/**
 * 
 * @param {Array} arrs 树形数据
 * @param {string} childs 树形数据子数据的属性名,常用'children'
 * @param {Array} attrArr 需要提取的公共属性数组
 * @returns 
 */
export function extractTree(arrs,childs,attrArr){
  let attrList = [];
  if(!Array.isArray(arrs)&&!arrs.length)return [];
  if(typeof childs !== 'string')return [];
  if(!Array.isArray(attrArr)||Array.isArray(attrArr)&&!attrArr.length){
    attrList = Object.keys(arrs[0])
    attrList.splice(attrList.indexOf(childs), 1)
  }else{
    attrList = attrArr;
  }
  let list = [];
  const getObj = (arr)=>{
    arr.forEach(function(row){
      let obj = {};
      attrList.forEach(item=>{
        obj[item] = row[item];
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

/**
 * 
 * @param {Array} data 
 * @param {string} pid 子树找父级的标识
 * @param {string} child 自定义子树字段名称
 * @returns 
 */
export function makeTree(data,pid,child){
  let parents = data.filter(p => p[pid] === 0),
      children = data.filter(c => c[pid] !== 0);
  dataToTree(parents, children);
  return parents;

  function dataToTree(parents, children){
    parents.map(p => {
      children.map((c, i) => {
        if(c[pid] === p.id){
          let _children = JSON.parse(JSON.stringify(children));
          _children.splice(i, 1);
          dataToTree([c], _children);
          if(p[child]){
            p[child].push(c);
          }else{
            p[child] = [c];
          }
        }
      })
    })
  }
}
