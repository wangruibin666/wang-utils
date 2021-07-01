/* 
入口js
向外暴露工具函数
*/
export { apply } from './function/apply'
export { default as call } from './function/call'
export { bind } from './function/bind'
export { throttle } from './function/throttle'
export { debounce } from './function/debounce'
export { map, reduce, filter, find, findIndex, every, some } from './array/declares'
export {unique, uniqueByAttr} from './array/unique'
export {deepFlatten} from './array'
export {concat} from './array/concat'
export {extractTree,makeTree} from './array/tree'
export {slice} from './array/slice'
export {flatten1, flatten2} from './array/flatten'
export {default as compact} from './array/compact'
export {chunk} from './array/chunk'
export {compareArr} from './array/compareArr'
export {difference, differences} from './array/difference'
export {mergeArray} from './array/mergeArray'
export {pull, pullAll} from './array/pull'
export {drop, dropRight} from './array/drop'
export {newInstance} from './object/newInstance'
export {myInstanceOf} from './object/myInstanceOf'
export {mergeObject} from './object/mergeObject'
export {clone} from './object/clone'
export {compareObj} from './object/compareObj'
export {deepClone1, deepClone2, deepClone3, deepClone} from './object/deepClone'
export {reverseString, palindrome, truncate, getDate, stampInterval, getQuery, dateByday, trim, changeCase} from './string'
export {default as axios} from './axios'
export {default as eventBus} from './event-bus'
export {default as Promise} from './promise'
export {default as PubSub} from './pub-sub'

export {default as Stack} from './da/stack'
export {default as Queue} from './da/queue'
export {default as PriorityQueue} from './da/priority-queue'
export { bubbleSort, selectSort, insertSort } from './da/sort'
export { shellSort } from './da/sort2'
export { formatFloat, formatAmount, sumBigNumber,random,numToChinese,amountToChinese } from './number'
export { browserType } from './browser'
export {default as storage} from './storage'