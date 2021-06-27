/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["wUtils"] = factory();
	else
		root["wUtils"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/array/chunk.js":
/*!****************************!*\
  !*** ./src/array/chunk.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"chunk\": () => (/* binding */ chunk)\n/* harmony export */ });\n/* \n将数组拆分成多个 size 长度的区块，每个区块组成小数组,整体组成一个二维数组\n*/\n\nfunction chunk(array, size=1) {\n  const bigArr = []\n  let smallArr = []\n  // 如果是空数组, 直接返回空数组\n  if (array.length===0) {\n    return bigArr\n  }\n  // 处理size\n  if (size<1) {\n    size = 1\n  } /* else if (size>array.length) {\n    size = array.length\n  } */\n\n  array.forEach(item => {\n\n    // 将小数组bigArr中(只能放一次)\n    if (smallArr.length===0) {\n      bigArr.push(smallArr)\n    }\n\n    // 将元素添加到小数组\n    smallArr.push(item)\n\n    // 限制smallArr的最大长度是size\n    if (smallArr.length===size) {\n      smallArr = []\n    }\n  })\n\n  return bigArr\n}\n\n//# sourceURL=webpack://wUtils/./src/array/chunk.js?");

/***/ }),

/***/ "./src/array/compact.js":
/*!******************************!*\
  !*** ./src/array/compact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ compact)\n/* harmony export */ });\n/* harmony import */ var _declares__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./declares */ \"./src/array/declares.js\");\n/* \ncompact(array): 返回数组中所有真值元素组成的新数组\n*/\n\nfunction compact (array) {\n  return (0,_declares__WEBPACK_IMPORTED_MODULE_0__.filter)(array, item => item)\n}\n\n//# sourceURL=webpack://wUtils/./src/array/compact.js?");

/***/ }),

/***/ "./src/array/concat.js":
/*!*****************************!*\
  !*** ./src/array/concat.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"concat\": () => (/* binding */ concat)\n/* harmony export */ });\n/* \n语法: var new_array = concat(array, value1[, value2[, ...[, valueN]]]) \n功能: 将n个数组或值与当前数组合并生成一个新数组, 原始数组不会被改变 \n*/\nfunction concat (array, ...values) {\n  const arr = [...array]\n  // 遍历values, 将value或者value中的元素添加arr中\n  values.forEach(value => {\n    if (Array.isArray(value)) {\n      arr.push(...value)\n    } else {\n      arr.push(value)\n    }\n  })\n  \n  return arr\n}\n\n//# sourceURL=webpack://wUtils/./src/array/concat.js?");

/***/ }),

/***/ "./src/array/declares.js":
/*!*******************************!*\
  !*** ./src/array/declares.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"map\": () => (/* binding */ map),\n/* harmony export */   \"reduce\": () => (/* binding */ reduce),\n/* harmony export */   \"filter\": () => (/* binding */ filter),\n/* harmony export */   \"find\": () => (/* binding */ find),\n/* harmony export */   \"findIndex\": () => (/* binding */ findIndex),\n/* harmony export */   \"every\": () => (/* binding */ every),\n/* harmony export */   \"some\": () => (/* binding */ some)\n/* harmony export */ });\n\nfunction map (array, callback) {\n  const arr = []\n  // 遍历当前数组每个元素, 调用callback得到一个结果数据, 添加arr\n  for (let index = 0; index < array.length; index++) {\n    const element = array[index];\n    const result = callback(element, index)\n    arr.push(result)\n  }\n  return arr\n}\n\nfunction reduce (array,callback, initValue) {\n  // 结果为初始值\n  let total = initValue\n  // 遍历当前数组每个元素, 调用callback得到一个累加的结果数据\n  for (let index = 0; index < array.length; index++) {\n    const element = array[index];\n    total = callback(total, element, index)\n  }\n\n  // 返回结果\n  return total\n}  \n\nfunction filter (array,callback) {\n  const arr = []\n  // 遍历当前数组每个元素, 调用callback得到一个布尔值, 如果为true, 将当前element添加到arr\n  for (let index = 0; index < array.length; index++) {\n    const element = array[index];\n    const result = callback(element, index)\n    if (result) {\n      arr.push(element)\n    }\n  }\n  return arr\n}  \n\nfunction find (array,callback) {\n  // 遍历当前数组每个元素, 调用callback得到一个布尔值, 如果为true, 返回当前元素\n  for (let index = 0; index < array.length; index++) {\n    const element = array[index];\n    const result = callback(element, index)\n    if (result) {\n      return element\n    }\n  }\n  return undefined\n}  \n\nfunction findIndex (array,callback) {\n  // 遍历当前数组每个元素, 调用callback得到一个布尔值, 如果为true, 返回当前元素的下标\n  for (let index = 0; index < array.length; index++) {\n    const element = array[index];\n    const result = callback(element, index)\n    if (result) {\n      return index\n    }\n  }\n  return -1\n}  \n\nfunction every (array,callback) {\n  // 遍历当前数组每个元素, 调用callback得到一个布尔值, 一旦是false, 返回false\n  for (let index = 0; index < array.length; index++) {\n    const element = array[index];\n    const result = callback(element, index)\n    if (!result) {\n      return false\n    }\n  }\n  return true\n}  \n\nfunction some (array,callback) {\n  // 遍历当前数组每个元素, 调用callback得到一个布尔值, 一旦是true, 返回true\n  for (let index = 0; index < array.length; index++) {\n    const element = array[index];\n    const result = callback(element, index)\n    if (result) {\n      return true\n    }\n  }\n  return false\n}  \n\n//# sourceURL=webpack://wUtils/./src/array/declares.js?");

/***/ }),

/***/ "./src/array/difference.js":
/*!*********************************!*\
  !*** ./src/array/difference.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"difference\": () => (/* binding */ difference),\n/* harmony export */   \"differences\": () => (/* binding */ differences)\n/* harmony export */ });\n/* harmony import */ var _declares__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./declares */ \"./src/array/declares.js\");\n/* \ndifference(arr1, arr2): 得到当前数组中所有不在arr中的元素组成的数组(不改变原数组)\n        如: difference([1,3,5,7], [5, 8])  ==> [1, 3, 7]\n*/\n\n\nfunction difference(arr1, arr2) {\n\n  // 处理特别情况\n  if (arr1.length===0) {\n    return []\n  } else if (arr2.length===0) {\n    return [...arr1]\n  }\n  \n  // 对数组进行过滤\n  return (0,_declares__WEBPACK_IMPORTED_MODULE_0__.filter)(arr1, item => arr2.indexOf(item)===-1)\n}\n\nfunction differences(arr1, ...arrays) {\n\n  // 处理特别情况\n  if (arr1.length===0) {\n    return []\n  } else if (arrays.length===0) {\n    return [...arr1]\n  }\n  \n  // 对数组进行过滤\n  return (0,_declares__WEBPACK_IMPORTED_MODULE_0__.filter)(arr1, item => {\n    let result = true // 假设当前元素在后面的所有数组都不存在\n    /* arrays.forEach(array => {\n      const index = array.indexOf(item)\n      if (index!==-1) {\n        result = false\n      }\n    }) */\n    for (let index = 0; index < arrays.length; index++) {\n      const array = arrays[index];\n      if (array.indexOf(item)!==-1) {\n        result = false\n        break // 结束当前for循环\n      }\n    }\n    return result\n  })\n}\n\n//# sourceURL=webpack://wUtils/./src/array/difference.js?");

/***/ }),

/***/ "./src/array/drop.js":
/*!***************************!*\
  !*** ./src/array/drop.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drop\": () => (/* binding */ drop),\n/* harmony export */   \"dropRight\": () => (/* binding */ dropRight)\n/* harmony export */ });\n/* \n1. drop(array, count): \n    得到数组过滤掉左边count个后剩余元素组成的数组\n    说明: 不改变当前数组, count默认是1\n    如: drop([1,3,5,7], 2) ===> [5, 7]\n2. dropRight(array, count): \n    得到数组过滤掉右边count个后剩余元素组成的数组\n    说明: 不改变数组, count默认是1\n    如: dropRight([1,3,5,7], 2) ===> [1, 3]   \n*/\n\nfunction drop(array, count=1) {\n  if (array.length==0) {\n    return []\n  }\n  if (count<1) {\n    count = 1\n  }\n  \n  return array.filter((item, index) => index>=count)\n}\n\nfunction dropRight(array, count=1) {\n  if (array.length==0) {\n    return []\n  }\n  if (count<1) {\n    count = 1\n  }\n  \n  return array.filter((item, index) => index<array.length-count)\n}\n\n//# sourceURL=webpack://wUtils/./src/array/drop.js?");

/***/ }),

/***/ "./src/array/flatten.js":
/*!******************************!*\
  !*** ./src/array/flatten.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"flatten1\": () => (/* binding */ flatten1),\n/* harmony export */   \"flatten2\": () => (/* binding */ flatten2)\n/* harmony export */ });\n/* harmony import */ var _declares__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./declares */ \"./src/array/declares.js\");\n/* harmony import */ var _concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./concat */ \"./src/array/concat.js\");\n/* \n1. 理解: \n    取出嵌套数组(多维)中的所有元素放到一个新数组(一维)中\n    如: [1, [3, [2, 4]]]  ==>  [1, 3, 2, 4]\n2. 实现:\n    方法一: 递归 + reduce() + concat()\n    方法二: ... + some() + concat()\n*/\n\n\n\n/* \n方法一: 递归 + reduce() + concat()\n*/\nfunction flatten1 (array) {\n  return (0,_declares__WEBPACK_IMPORTED_MODULE_0__.reduce)(array, (pre, item) => {\n    if (!Array.isArray(item)) {\n      pre.push(item)\n    } else {\n      pre = (0,_concat__WEBPACK_IMPORTED_MODULE_1__.concat)(pre, flatten1(item))\n    }\n    return pre\n  }, [])\n} // [1, 3, [2, 4]]\n\n/* \n[1, [3, [2, 4]]]\n\n[1]\n\n[3]\n\n[2, 4]\n\n[1, 3, 2, 4]\n*/\n\n/* \n方法二: ... + some() + concat()\n*/\nfunction flatten2 (array) {\n  let arr = (0,_concat__WEBPACK_IMPORTED_MODULE_1__.concat)([], ...array)\n  while((0,_declares__WEBPACK_IMPORTED_MODULE_0__.some)(arr, item => Array.isArray(item))) { // arr中有元素是数组\n    arr = (0,_concat__WEBPACK_IMPORTED_MODULE_1__.concat)([], ...arr)\n  }\n\n  return arr\n} \n\n\n//# sourceURL=webpack://wUtils/./src/array/flatten.js?");

/***/ }),

/***/ "./src/array/mergeArray.js":
/*!*********************************!*\
  !*** ./src/array/mergeArray.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mergeArray\": () => (/* binding */ mergeArray)\n/* harmony export */ });\n/* \n merge(arr1, arr2): 将arr2与arr1的元素进行合并组成一个新的数组(不改变原数组)\n        如: merge([1,3,5,7,5], [1, 5, 8]) ==> [1, 3, 5, 7, 5, 8]\n*/\nfunction mergeArray(array, ...arrays) {\n  const result = [...array]\n\n  if (arrays.length===0) {\n    return result\n  }\n\n  arrays.forEach(itemArr => {\n    itemArr.forEach(item => {\n      if (result.indexOf(item)===-1) {\n        result.push(item)\n      }\n    })\n  })\n\n  return result\n}\n\n//# sourceURL=webpack://wUtils/./src/array/mergeArray.js?");

/***/ }),

/***/ "./src/array/pull.js":
/*!***************************!*\
  !*** ./src/array/pull.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pull\": () => (/* binding */ pull),\n/* harmony export */   \"pullAll\": () => (/* binding */ pullAll)\n/* harmony export */ });\n/* \n1. pull(array, ...values): \n        删除数组中与value相同的元素, 返回所有删除元素的数组\n        说明: 数组发生了改变\n        如: pull([1,3,5,3,7], 2, 7, 3, 7) ===> 数组变为[1, 5], 返回值为[3,3,7]\n    2. pullAll(array, values): \n        功能与pull一致, 只是参数变为数组\n        如: pullAll([1,3,5,3,7], [2, 7, 3, 7]) ===> 数组变为[1, 5], 返回值为[3,3,7]\n*/\n\nfunction pull(array, ...values) {\n  const result = []\n\n  for (let index = 0; index < array.length; index++) {\n    const item = array[index];\n    if (values.indexOf(item)!==-1) {// 如果有\n      // 删除item\n      array.splice(index, 1)\n      // 将item添加到result数组\n      result.push(item)\n      index-- // 如果不做, 下一个元素就没有得到遍历\n    }\n  }\n\n  return result\n}\n\nfunction pullAll(array, values) {\n\n  return pull(array, ...values)\n}\n\n//# sourceURL=webpack://wUtils/./src/array/pull.js?");

/***/ }),

/***/ "./src/array/slice.js":
/*!****************************!*\
  !*** ./src/array/slice.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"slice\": () => (/* binding */ slice)\n/* harmony export */ });\n/* \n语法: var new_array = slice(array, [begin[, end]])\n功能: 返回一个由 begin 和 end 决定的原数组的浅拷贝, 原始数组不会被改变\n*/\n\nfunction slice(array, begin, end) {\n  const arr = []\n\n  // 如果原数组是空组件, 直接返回\n  if (array.length===0) {\n    return arr\n  }\n  // 处理没有指定\n  begin = begin || 0\n  end = end || array.length\n  // 范围的限制\n  if (begin<0) {\n    begin = 0\n  }\n  if (end>array.length) {\n    end = array.length\n  }\n\n  for (let index = begin; index < end; index++) {\n    arr.push(array[index])\n  }\n\n  return arr\n}\n\n//# sourceURL=webpack://wUtils/./src/array/slice.js?");

/***/ }),

/***/ "./src/array/unique.js":
/*!*****************************!*\
  !*** ./src/array/unique.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"unique1\": () => (/* binding */ unique1),\n/* harmony export */   \"unique2\": () => (/* binding */ unique2),\n/* harmony export */   \"unique3\": () => (/* binding */ unique3)\n/* harmony export */ });\n/* \n1. 理解: \n    根据当前数组产生一个去除重复元素后的新数组\n    如: [2, 3, 2, 7, 6, 7] ==> [2, 3, 7, 6]\n2. 实现:\n    方法1: 利用forEach()和indexOf()\n            说明: 本质是双重遍历, 效率差些\n    方法2: 利用forEach() + 对象容器\n            说明: 只需一重遍历, 效率高些\n    方法3: 利用ES6语法: from + Set 或者 ... + Set\n            说明: 编码简洁\n*/\n\n/* \n方法1: 利用forEach()和indexOf()\n    说明: 本质是双重遍历, 效率差些\n*/\nfunction unique1(array) {\n  console.log('unique1()')\n  const arr = []\n  // 遍历原数组\n  array.forEach(item => {\n    // 只有当item不在arr中, 才添加\n    if (arr.indexOf(item)===-1) {// 内部包含隐式遍历\n      arr.push(item)\n    }\n  })\n\n  return arr\n}\n\n/* \n方法2: 利用forEach() + 对象容器\n    说明: 只需一重遍历, 效率高些\n*/\nfunction unique2(array) {\n  const arr = []\n  const contain = {} // 属性名是item, 属性值true\n  // 遍历原数组\n  array.forEach(item => {\n    // 只有当item不在arr中, 才添加\n    // if (!contain[item]) {\n    if (!contain.hasOwnProperty(item)) { // 不需要遍历\n      arr.push(item)\n      contain[item] = true\n    }\n  })\n\n  return arr\n}\n\n/* \n方法3: 利用ES6语法: from + Set 或者 ... + Set\n  说明: 编码简洁\n*/\nfunction unique3(array) {\n  // return Array.from(new Set(array))\n  return [...new Set(array)]\n}\n\n//# sourceURL=webpack://wUtils/./src/array/unique.js?");

/***/ }),

/***/ "./src/axios/index.js":
/*!****************************!*\
  !*** ./src/axios/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* \n  1. 函数的返回值为promise, 成功的结果为response, 失败的结果为error\n  2. 能处理多种类型的请求: GET/POST/PUT/DELETE\n  3. 函数的参数为一个配置对象\n      {\n        url: '',   // 请求地址\n        method: '',   // 请求方式GET/POST/PUT/DELETE\n        params: {},  // GET/DELETE请求的query参数\n        data: {}, // POST或DELETE请求的请求体参数 \n      }\n  4. 响应json数据自动解析为js的对象/数组\n*/\n/* 发送任意类型请求的函数 */\nfunction axios({\n  url,\n  method='GET',\n  params={},\n  data={}\n}) {\n  // 返回一个promise对象\n  return new Promise((resolve, reject) => {\n\n    // 处理method(转大写)\n    method = method.toUpperCase()\n\n    // 处理query参数(拼接到url上)   id=1&xxx=abc\n    /* \n    {\n      id: 1,\n      xxx: 'abc'\n    }\n    */\n    let queryString = ''\n    Object.keys(params).forEach(key => {\n      queryString += `${key}=${params[key]}&`\n    })\n    if (queryString) { // id=1&xxx=abc&\n      // 去除最后的&\n      queryString = queryString.substring(0, queryString.length-1)\n      // 接到url\n      url += '?' + queryString\n    }\n\n\n    // 1. 执行异步ajax请求\n    // 创建xhr对象\n    const request = new XMLHttpRequest()\n    // 打开连接(初始化请求, 没有请求)\n    request.open(method, url, true)\n\n    // 发送请求\n    if (method==='GET') {\n      request.send()\n    } else if (method==='POST' || method==='PUT' || method==='DELETE'){\n      request.setRequestHeader('Content-Type', 'application/json;charset=utf-8') // 告诉服务器请求体的格式是json\n      request.send(JSON.stringify(data)) // 发送json格式请求体参数\n    }\n\n    // 绑定状态改变的监听\n    request.onreadystatechange = function () {\n      // 如果请求没有完成, 直接结束\n      if (request.readyState!==4) {\n        return\n      }\n      // 如果响应状态码在[200, 300)之间代表成功, 否则失败\n      const {status, statusText} = request\n      // 2.1. 如果请求成功了, 调用resolve()\n      if (status>=200 && status<=299) {\n        // 准备结果数据对象response\n        const response = {\n          data: JSON.parse(request.response),\n          status,\n          statusText\n        }\n        resolve(response)\n      } else { // 2.2. 如果请求失败了, 调用reject()\n        reject(new Error('request error status is ' + status))\n      }\n    }\n  })\n}\n\n/* 发送特定请求的静态方法 */\naxios.get = function (url, options) {\n  return axios(Object.assign(options, {url, method: 'GET'}))\n}\naxios.delete = function (url, options) {\n  return axios(Object.assign(options, {url, method: 'DELETE'}))\n}\naxios.post = function (url, data, options) {\n  return axios(Object.assign(options, {url, data, method: 'POST'}))\n}\naxios.put = function (url, data, options) {\n  return axios(Object.assign(options, {url, data, method: 'PUT'}))\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios);\n\n//# sourceURL=webpack://wUtils/./src/axios/index.js?");

/***/ }),

/***/ "./src/da/priority-queue.js":
/*!**********************************!*\
  !*** ./src/da/priority-queue.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* \n自定义一个优先级队列\n*/\n\nfunction PriorityQueue() {\n\n  // 用于保存元素数据的数组\n  const arr = [] // 保存的元素结构: {data, priority}\n\n\n  /* 队列每个元素的类型 */\n  function QueueElement(data, priority) {\n    this.data = data\n    this.priority = priority\n  }\n  \n  // 入队列: enqueue()\n  this.enqueue = function (data, priority) {\n    // 要求priority在[0, 100]之间, 否则抛出异常\n    if (priority<0 || priority>100) {\n      throw new Error('优先级值必须在0到100之间')\n    }\n    // 创建一个新的元素\n    const element = new QueueElement(data, priority)\n\n    // 将element添加到内部的arr中\n    // 如果当前是空的, 直接添加\n    if (arr.length===0) {\n      arr.push(element)\n    } else { // 将当前element插入到arr中的一个合适: 在priority值大于当前值的左边\n      for (let index = 0; index < arr.length; index++) {\n        if (arr[index].priority > priority) {\n          arr.splice(index, 0, element)\n          return\n        }\n      }\n      // 当前要添加的priority是最大的\n      arr.push(element)\n    }\n  }\n\n  // 出队列: dequeue()\n  this.dequeue = function () {\n    return arr.shift()\n  }\n\n  // 查看队头: front()\n  this.front = function () {\n    return arr[0]\n  }\n  // 查看元素的个数: size()\n  this.size = function () {\n    return arr.length\n  }\n  // 判断队列是否为空: isEmpty()\n  this.isEmpty = function () {\n    return arr.length===0\n  }\n}\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PriorityQueue);\n\n//# sourceURL=webpack://wUtils/./src/da/priority-queue.js?");

/***/ }),

/***/ "./src/da/queue.js":
/*!*************************!*\
  !*** ./src/da/queue.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* \n自定义队列类型\n使用数组封装\n    入队列: enqueue()\n    出队列: dequeue()\n    查看队头: front()\n    查看元素的个数: size()\n    判断队列是否为空: isEmpty()\n*/\nfunction Queue() {\n\n  // 用于保存元素数据的数组\n  const arr = []\n\n  \n  // 入队列: enqueue()\n  this.enqueue = function (element) {\n    arr.push(element)\n  }\n\n  // 出队列: dequeue()\n  this.dequeue = function () {\n    return arr.shift()\n  }\n\n  // 查看队头: front()\n  this.front = function () {\n    return arr[0]\n  }\n  // 查看元素的个数: size()\n  this.size = function () {\n    return arr.length\n  }\n  // 判断队列是否为空: isEmpty()\n  this.isEmpty = function () {\n    return arr.length===0\n  }\n}\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Queue);\n\n//# sourceURL=webpack://wUtils/./src/da/queue.js?");

/***/ }),

/***/ "./src/da/sort.js":
/*!************************!*\
  !*** ./src/da/sort.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bubbleSort\": () => (/* binding */ bubbleSort),\n/* harmony export */   \"selectSort\": () => (/* binding */ selectSort),\n/* harmony export */   \"insertSort\": () => (/* binding */ insertSort)\n/* harmony export */ });\n/* \n3个基本的排序算法\n*/\n\nfunction bubbleSort(arr) {\n  for (let i = arr.length-1; i >0; i--) { //需要在 [0, i]\n    for (let j = 0; j < i; j++) { // 依次拿出相邻的2个进行比较\n      if (arr[j] > arr[j+1]) { // 需要交换位置\n        // let temp = arr[j]\n        // arr[j] = arr[j+1]\n        // arr[j+1] = temp\n        [arr[j+1], arr[j]] = [arr[j], arr[j+1]]\n      }\n    }\n  }\n  return arr\n}\n\nfunction selectSort(arr) {\n  const len = arr.length\n  for (let i = 0; i < len - 1; i++) { // 遍历未排序的区域\n    // 将最小值的下标暂定为i\n    let minIndex = i\n    // 依次与它右侧元素比较\n    for (let j = i+1; j < len; j++) {\n      if (arr[minIndex] > arr[j]) {\n        // 找到一个更小的值, 更新一下最小值的下标\n        minIndex = j\n      }\n    }\n    // 一旦minIndex有变化(发现最小值的下标不是i)\n    if (minIndex!==i) {\n      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]\n    }\n  }\n\n  return arr\n}\n\nfunction insertSort(arr) {\n  const len = arr.length\n  // 假设第一个元素已排序了\n  for (let i = 1; i < len; i++) { // 遍历未排序的区域\n    const start = arr[i]\n    // 将start与左边的比较(从右向比)\n    let j = i -1\n    while(j>=0 && arr[j]>start) {\n      arr[j+1] = arr[j] // 向右移位\n      j--\n    }\n    arr[j+1] = start\n  }\n\n  return arr\n}\n\n\n//# sourceURL=webpack://wUtils/./src/da/sort.js?");

/***/ }),

/***/ "./src/da/sort2.js":
/*!*************************!*\
  !*** ./src/da/sort2.js ***!
  \*************************/
/***/ (() => {

eval("/* \n希尔排序\n1. 计算出一系列增量值(折半法): \n    递减, 最后一个必须是1\n    distance = length\n    distance = Math.floor(distance/2)\n2. 以当前增量对数组进行分组, 分成多个小数组\n    对每个小数组进行插入排序\n    每个小数组排序是交替进行\n*/\nfunction shellSort (arr) {\n  const len = arr.length\n  let distance = len\n  while (distance>1) {\n    distance = Math.floor(distance/2)\n    console.log(distance)\n    for (let i = distance; i < len; i++) { // 遍历未排序的区域\n      const start = arr[i]\n      // 将start与左边的比较(从右向比)\n      let j = i -distance\n      while(j>=0 && arr[j]>start) {\n        arr[j+distance] = arr[j] // 向右移位\n        j = j - distance\n      }\n      arr[j+distance] = start\n    }\n  }\n\n  return arr\n}\n\nconsole.log(shellSort([5, 7, 9,3, 2, 6, 10, 1]))\n\n//# sourceURL=webpack://wUtils/./src/da/sort2.js?");

/***/ }),

/***/ "./src/da/stack.js":
/*!*************************!*\
  !*** ./src/da/stack.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* \n自定义栈类型 Stack\n*/\n\nfunction Stack() {\n\n  // 用于保存元素数据的数组\n  let arr = [] // 不想让外部直接通过stack.arr得到数组\n\n  /* \n    1. 如果不判断, 问题是创建多个stack总是使用最后创建的arr\n    2. 如果有判断, 问题是创建多个stack总是使用第一个创建的arr\n      原型对象上的方法不要重新定义\n  */\n  // if (Stack.prototype.push) return \n  \n  // 压栈: push()\n  // Stack.prototype.push = function (element) {\n  this.push = function (element) {\n    arr.push(element)\n  }\n\n  // 出栈: pop()\n  this.pop = function () {\n    // return arr.splice(arr.length-1, 1)\n    return arr.pop()\n  }\n\n  // 查看栈顶: peek()\n  this.peek = function () {\n    return arr[arr.length - 1]\n  }\n  // 栈中元素个数: size()\n  this.size = function () {\n    return arr.length\n  }\n  // 是否是空栈: isEmpty()\n  this.isEmpty = function () {\n    return arr.length===0\n  }\n\n  // 清栈\n  this.clear = function () {\n    arr = []\n  }\n}\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stack);\n\n//# sourceURL=webpack://wUtils/./src/da/stack.js?");

/***/ }),

/***/ "./src/event-bus/index.js":
/*!********************************!*\
  !*** ./src/event-bus/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst eventBus = {}\n\n/* \n{\n  add:  [callback1, callback2]\n  delete: [callback3]\n}\n*/\nlet callbacksObj = {}\n\n/* \n绑定事件监听\n*/\neventBus.on = function (eventName, callback) {\n  const callbacks = callbacksObj[eventName]\n  if (callbacks) {\n    callbacks.push(callback)\n  } else {\n    callbacksObj[eventName] = [callback]\n  }\n}\n\n/* \n分发事件\n*/\neventBus.emit = function (eventName, data) {\n  const callbacks = callbacksObj[eventName]\n  if (callbacks && callbacks.length > 0) {\n    callbacks.forEach(callback => {\n      callback(data)\n    })\n  }\n}\n\n/* \n移除事件监听\n*/\neventBus.off = function (eventName) {\n  if (eventName) {\n    delete callbacksObj[eventName]\n  } else {\n    callbacksObj = {}\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventBus);\n\n//# sourceURL=webpack://wUtils/./src/event-bus/index.js?");

/***/ }),

/***/ "./src/function/apply.js":
/*!*******************************!*\
  !*** ./src/function/apply.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apply\": () => (/* binding */ apply)\n/* harmony export */ });\nfunction apply (fn, obj, args) {\n  // 处理obj是undefined或者null的情况\n  if (obj===undefined || obj===null) {\n    obj = window\n  }\n\n  // 给obj添加一个方法: tempFn: this\n  obj.tempFn = fn\n  // 调用obj的tempFn方法, 传入rags参数, 得到返回值\n  const result = obj.tempFn(...args)\n  // 删除obj上的temFn\n  delete obj.tempFn\n  // 返回方法的返回值\n  return result\n\n  // return call(fn, obj, ...args)\n}\n\n\n\n//# sourceURL=webpack://wUtils/./src/function/apply.js?");

/***/ }),

/***/ "./src/function/bind.js":
/*!******************************!*\
  !*** ./src/function/bind.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bind\": () => (/* binding */ bind)\n/* harmony export */ });\n/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./call */ \"./src/function/call.js\");\n\n\nfunction bind (fn,obj, ...args) {\n  // 返回一个新函数\n  return (...args2) => {\n    // 调用原来函数, 指定this为obj, 参数列表由args和args2依次组成\n    return (0,_call__WEBPACK_IMPORTED_MODULE_0__.default)(fn, obj, ...args, ...args2)\n  }\n}\n\n\n//# sourceURL=webpack://wUtils/./src/function/bind.js?");

/***/ }),

/***/ "./src/function/call.js":
/*!******************************!*\
  !*** ./src/function/call.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ call)\n/* harmony export */ });\nfunction call (fn, obj, ...args) {\n  // console.log('call()')\n  // 执行函数\n  // this(...args)\n\n  // 处理obj是undefined或者null的情况\n  if (obj===undefined || obj===null) {\n    obj = window\n  }\n\n  // 给obj添加一个方法: tempFn: this\n  obj.tempFn = fn\n  // 调用obj的tempFn方法, 传入rags参数, 得到返回值\n  const result = obj.tempFn(...args)\n  // 删除obj上的temFn\n  delete obj.tempFn\n  // 返回方法的返回值\n  return result\n}\n\n//# sourceURL=webpack://wUtils/./src/function/call.js?");

/***/ }),

/***/ "./src/function/debounce.js":
/*!**********************************!*\
  !*** ./src/function/debounce.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"debounce\": () => (/* binding */ debounce)\n/* harmony export */ });\n/* \n用来返回防抖函数的工具函数\n*/\nfunction debounce(callback, delay) {\n  return function (event) {\n\n    // 如果上次事件还没有真正处理, 取消它\n    // if (callback.timeoutId) { // 会查找原型链\n    if (callback.hasOwnProperty('timeoutId')) { // 不会查找原型链\n      // 清除\n      clearTimeout(callback.timeoutId)\n    }\n\n    // 发事件发生指定事件后才调用处理事件的回调函数\n    // 启动定时器, 只是准备真正处理\n    callback.timeoutId = setTimeout(() => {\n      // 正在处理事件\n      callback.call(this, event)\n      // 删除准备处理的标记\n      delete callback.timeoutId\n    }, delay)\n  }\n}\n\n//# sourceURL=webpack://wUtils/./src/function/debounce.js?");

/***/ }),

/***/ "./src/function/throttle.js":
/*!**********************************!*\
  !*** ./src/function/throttle.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"throttle\": () => (/* binding */ throttle)\n/* harmony export */ });\n/* \n用来返回节流函数的工具函数\n*/\nfunction throttle(callback, delay) {\n  let pre = 0 // 默认值不要是Date.now() ==> 第1次事件立即调用\n  return function (event) { // 节流函数/真正的事件回调函数   this是发生事件的标签\n    console.log('事件 throttle')\n    const current = Date.now()\n    if (current - pre > delay) { // 只有离上一次调用callback的时间差大于delay\n      // 调用真正处理事件的函数, this是事件源, 参数是event\n      callback.call(this, event)\n      // 记录此次调用的时间\n      pre = current\n    }\n  }\n}\n\n//# sourceURL=webpack://wUtils/./src/function/throttle.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apply\": () => (/* reexport safe */ _function_apply__WEBPACK_IMPORTED_MODULE_0__.apply),\n/* harmony export */   \"call\": () => (/* reexport safe */ _function_call__WEBPACK_IMPORTED_MODULE_1__.default),\n/* harmony export */   \"bind\": () => (/* reexport safe */ _function_bind__WEBPACK_IMPORTED_MODULE_2__.bind),\n/* harmony export */   \"throttle\": () => (/* reexport safe */ _function_throttle__WEBPACK_IMPORTED_MODULE_3__.throttle),\n/* harmony export */   \"debounce\": () => (/* reexport safe */ _function_debounce__WEBPACK_IMPORTED_MODULE_4__.debounce),\n/* harmony export */   \"map\": () => (/* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_5__.map),\n/* harmony export */   \"reduce\": () => (/* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_5__.reduce),\n/* harmony export */   \"filter\": () => (/* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_5__.filter),\n/* harmony export */   \"find\": () => (/* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_5__.find),\n/* harmony export */   \"findIndex\": () => (/* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_5__.findIndex),\n/* harmony export */   \"every\": () => (/* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_5__.every),\n/* harmony export */   \"some\": () => (/* reexport safe */ _array_declares__WEBPACK_IMPORTED_MODULE_5__.some),\n/* harmony export */   \"unique1\": () => (/* reexport safe */ _array_unique__WEBPACK_IMPORTED_MODULE_6__.unique1),\n/* harmony export */   \"unique2\": () => (/* reexport safe */ _array_unique__WEBPACK_IMPORTED_MODULE_6__.unique2),\n/* harmony export */   \"unique3\": () => (/* reexport safe */ _array_unique__WEBPACK_IMPORTED_MODULE_6__.unique3),\n/* harmony export */   \"concat\": () => (/* reexport safe */ _array_concat__WEBPACK_IMPORTED_MODULE_7__.concat),\n/* harmony export */   \"slice\": () => (/* reexport safe */ _array_slice__WEBPACK_IMPORTED_MODULE_8__.slice),\n/* harmony export */   \"flatten1\": () => (/* reexport safe */ _array_flatten__WEBPACK_IMPORTED_MODULE_9__.flatten1),\n/* harmony export */   \"flatten2\": () => (/* reexport safe */ _array_flatten__WEBPACK_IMPORTED_MODULE_9__.flatten2),\n/* harmony export */   \"compact\": () => (/* reexport safe */ _array_compact__WEBPACK_IMPORTED_MODULE_10__.default),\n/* harmony export */   \"chunk\": () => (/* reexport safe */ _array_chunk__WEBPACK_IMPORTED_MODULE_11__.chunk),\n/* harmony export */   \"difference\": () => (/* reexport safe */ _array_difference__WEBPACK_IMPORTED_MODULE_12__.difference),\n/* harmony export */   \"differences\": () => (/* reexport safe */ _array_difference__WEBPACK_IMPORTED_MODULE_12__.differences),\n/* harmony export */   \"mergeArray\": () => (/* reexport safe */ _array_mergeArray__WEBPACK_IMPORTED_MODULE_13__.mergeArray),\n/* harmony export */   \"pull\": () => (/* reexport safe */ _array_pull__WEBPACK_IMPORTED_MODULE_14__.pull),\n/* harmony export */   \"pullAll\": () => (/* reexport safe */ _array_pull__WEBPACK_IMPORTED_MODULE_14__.pullAll),\n/* harmony export */   \"drop\": () => (/* reexport safe */ _array_drop__WEBPACK_IMPORTED_MODULE_15__.drop),\n/* harmony export */   \"dropRight\": () => (/* reexport safe */ _array_drop__WEBPACK_IMPORTED_MODULE_15__.dropRight),\n/* harmony export */   \"newInstance\": () => (/* reexport safe */ _object_newInstance__WEBPACK_IMPORTED_MODULE_16__.newInstance),\n/* harmony export */   \"myInstanceOf\": () => (/* reexport safe */ _object_myInstanceOf__WEBPACK_IMPORTED_MODULE_17__.myInstanceOf),\n/* harmony export */   \"mergeObject\": () => (/* reexport safe */ _object_mergeObject__WEBPACK_IMPORTED_MODULE_18__.mergeObject),\n/* harmony export */   \"clone1\": () => (/* reexport safe */ _object_clone__WEBPACK_IMPORTED_MODULE_19__.clone1),\n/* harmony export */   \"clone2\": () => (/* reexport safe */ _object_clone__WEBPACK_IMPORTED_MODULE_19__.clone2),\n/* harmony export */   \"deepClone1\": () => (/* reexport safe */ _object_deepClone__WEBPACK_IMPORTED_MODULE_20__.deepClone1),\n/* harmony export */   \"deepClone2\": () => (/* reexport safe */ _object_deepClone__WEBPACK_IMPORTED_MODULE_20__.deepClone2),\n/* harmony export */   \"deepClone3\": () => (/* reexport safe */ _object_deepClone__WEBPACK_IMPORTED_MODULE_20__.deepClone3),\n/* harmony export */   \"deepClone4\": () => (/* reexport safe */ _object_deepClone__WEBPACK_IMPORTED_MODULE_20__.deepClone4),\n/* harmony export */   \"reverseString\": () => (/* reexport safe */ _string__WEBPACK_IMPORTED_MODULE_21__.reverseString),\n/* harmony export */   \"palindrome\": () => (/* reexport safe */ _string__WEBPACK_IMPORTED_MODULE_21__.palindrome),\n/* harmony export */   \"truncate\": () => (/* reexport safe */ _string__WEBPACK_IMPORTED_MODULE_21__.truncate),\n/* harmony export */   \"axios\": () => (/* reexport safe */ _axios__WEBPACK_IMPORTED_MODULE_22__.default),\n/* harmony export */   \"eventBus\": () => (/* reexport safe */ _event_bus__WEBPACK_IMPORTED_MODULE_23__.default),\n/* harmony export */   \"Promise\": () => (/* reexport safe */ _promise__WEBPACK_IMPORTED_MODULE_24__.default),\n/* harmony export */   \"PubSub\": () => (/* reexport safe */ _pub_sub__WEBPACK_IMPORTED_MODULE_25__.default),\n/* harmony export */   \"Stack\": () => (/* reexport safe */ _da_stack__WEBPACK_IMPORTED_MODULE_26__.default),\n/* harmony export */   \"Queue\": () => (/* reexport safe */ _da_queue__WEBPACK_IMPORTED_MODULE_27__.default),\n/* harmony export */   \"PriorityQueue\": () => (/* reexport safe */ _da_priority_queue__WEBPACK_IMPORTED_MODULE_28__.default),\n/* harmony export */   \"bubbleSort\": () => (/* reexport safe */ _da_sort__WEBPACK_IMPORTED_MODULE_29__.bubbleSort),\n/* harmony export */   \"selectSort\": () => (/* reexport safe */ _da_sort__WEBPACK_IMPORTED_MODULE_29__.selectSort),\n/* harmony export */   \"insertSort\": () => (/* reexport safe */ _da_sort__WEBPACK_IMPORTED_MODULE_29__.insertSort),\n/* harmony export */   \"shellSort\": () => (/* reexport safe */ _da_sort2__WEBPACK_IMPORTED_MODULE_30__.shellSort)\n/* harmony export */ });\n/* harmony import */ var _function_apply__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function/apply */ \"./src/function/apply.js\");\n/* harmony import */ var _function_call__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function/call */ \"./src/function/call.js\");\n/* harmony import */ var _function_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function/bind */ \"./src/function/bind.js\");\n/* harmony import */ var _function_throttle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./function/throttle */ \"./src/function/throttle.js\");\n/* harmony import */ var _function_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./function/debounce */ \"./src/function/debounce.js\");\n/* harmony import */ var _array_declares__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./array/declares */ \"./src/array/declares.js\");\n/* harmony import */ var _array_unique__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./array/unique */ \"./src/array/unique.js\");\n/* harmony import */ var _array_concat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./array/concat */ \"./src/array/concat.js\");\n/* harmony import */ var _array_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./array/slice */ \"./src/array/slice.js\");\n/* harmony import */ var _array_flatten__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./array/flatten */ \"./src/array/flatten.js\");\n/* harmony import */ var _array_compact__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./array/compact */ \"./src/array/compact.js\");\n/* harmony import */ var _array_chunk__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./array/chunk */ \"./src/array/chunk.js\");\n/* harmony import */ var _array_difference__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./array/difference */ \"./src/array/difference.js\");\n/* harmony import */ var _array_mergeArray__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./array/mergeArray */ \"./src/array/mergeArray.js\");\n/* harmony import */ var _array_pull__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./array/pull */ \"./src/array/pull.js\");\n/* harmony import */ var _array_drop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./array/drop */ \"./src/array/drop.js\");\n/* harmony import */ var _object_newInstance__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./object/newInstance */ \"./src/object/newInstance.js\");\n/* harmony import */ var _object_myInstanceOf__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./object/myInstanceOf */ \"./src/object/myInstanceOf.js\");\n/* harmony import */ var _object_mergeObject__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./object/mergeObject */ \"./src/object/mergeObject.js\");\n/* harmony import */ var _object_clone__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./object/clone */ \"./src/object/clone.js\");\n/* harmony import */ var _object_deepClone__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./object/deepClone */ \"./src/object/deepClone.js\");\n/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./string */ \"./src/string/index.js\");\n/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./axios */ \"./src/axios/index.js\");\n/* harmony import */ var _event_bus__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./event-bus */ \"./src/event-bus/index.js\");\n/* harmony import */ var _promise__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./promise */ \"./src/promise/index.js\");\n/* harmony import */ var _pub_sub__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pub-sub */ \"./src/pub-sub/index.js\");\n/* harmony import */ var _da_stack__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./da/stack */ \"./src/da/stack.js\");\n/* harmony import */ var _da_queue__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./da/queue */ \"./src/da/queue.js\");\n/* harmony import */ var _da_priority_queue__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./da/priority-queue */ \"./src/da/priority-queue.js\");\n/* harmony import */ var _da_sort__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./da/sort */ \"./src/da/sort.js\");\n/* harmony import */ var _da_sort2__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./da/sort2 */ \"./src/da/sort2.js\");\n/* harmony import */ var _da_sort2__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_da_sort2__WEBPACK_IMPORTED_MODULE_30__);\n/* \r\n入口js\r\n向外暴露工具函数\r\n*/\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://wUtils/./src/index.js?");

/***/ }),

/***/ "./src/object/clone.js":
/*!*****************************!*\
  !*** ./src/object/clone.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clone1\": () => (/* binding */ clone1),\n/* harmony export */   \"clone2\": () => (/* binding */ clone2)\n/* harmony export */ });\n/* \n实现浅拷贝\n        方法一: 利用ES6语法\n        方法二: 利用ES5语法: for...in\n*/\n\n/* \n方法一: 利用ES6语法\n*/\nfunction clone1 (target) {\n  if (target instanceof Array) {\n    // return [...target]\n    // return target.slice()\n    // return [].concat(target)\n    // return Array.from(target)\n    // return target.filter(value => true)\n    // return target.map(item => item)\n    return target.reduce((pre, item) => {\n      pre.push(item)\n      return pre\n    }, [])\n  } else if (target!==null && typeof target==='object') {\n    return {...target}\n  } else {// 如果不是数组或对象, 直接返回\n    return target\n  }\n}\n\nfunction clone2 (target) {\n  // 被处理的目标是数组/对象\n  if (target instanceof Array || (target!==null && typeof target==='object')) {\n    const cloneTarget = target instanceof Array ? [] : {}\n    for (const key in target) {\n      if (target.hasOwnProperty(key)) {\n        cloneTarget[key] = target[key]\n      }\n    }\n    return cloneTarget\n  } else {\n    return target\n  }\n}\n\n//# sourceURL=webpack://wUtils/./src/object/clone.js?");

/***/ }),

/***/ "./src/object/deepClone.js":
/*!*********************************!*\
  !*** ./src/object/deepClone.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deepClone1\": () => (/* binding */ deepClone1),\n/* harmony export */   \"deepClone2\": () => (/* binding */ deepClone2),\n/* harmony export */   \"deepClone3\": () => (/* binding */ deepClone3),\n/* harmony export */   \"deepClone4\": () => (/* binding */ deepClone4)\n/* harmony export */ });\n/* \n实现深拷贝\n    1). 大众乞丐版\n        问题1: 函数属性会丢失\n        问题2: 循环引用会出错\n\n    2). 面试基础版本\n        解决问题1: 函数属性还没丢失\n        问题2: 循环引用会出错\n\n    3). 面试加强版本\n        解决问题2: 循环引用正常\n    4). 面试加强版本2(优化遍历性能)\n        数组: while | for | forEach() 优于 for-in | keys()&forEach() \n        对象: for-in 与 keys()&forEach() 差不多\n*/\n\nfunction deepClone1 (target) {\n  return JSON.parse(JSON.stringify(target))\n}\n\n/* \n解决了: 函数属性会丢失\n问题: 循环引用会出错\n*/\nfunction deepClone2 (target) {\n  // 被处理的目标是数组/对象\n  if (target instanceof Array || (target!==null && typeof target==='object')) {\n    const cloneTarget = target instanceof Array ? [] : {}\n    for (const key in target) {\n      if (target.hasOwnProperty(key)) {\n        cloneTarget[key] = deepClone2(target[key])  // 对属性值进行递归处理\n      }\n    }\n    return cloneTarget\n  } else {\n    return target\n  }\n}\n\n/* \n解决了: 函数属性会丢失\n解决: 循环引用会出错    \n解决思路:\n    目标: 同一个对旬/数组只能被克隆1次\n    创建克隆对象前:　如果克隆对象已经存在, 直接返回\n    创建克隆对象后: 保存克隆对象 \n    缓存容器结构: Map  key: target, value: cloneTaget\n*/\nfunction deepClone3 (target, map=new Map()) {\n  // 被处理的目标是数组/对象\n  if (target instanceof Array || (target!==null && typeof target==='object')) {\n    // map中存在对应的克隆对象, 直接将其返回\n    let cloneTarget = map.get(target)\n    if (cloneTarget) {\n      return cloneTarget // 不要对同一个对象进行多次clone\n    }\n    // 创建克隆对象\n    cloneTarget = target instanceof Array ? [] : {}\n    // 保存到map容器\n    map.set(target, cloneTarget)\n\n    for (const key in target) {\n      if (target.hasOwnProperty(key)) {\n        cloneTarget[key] = deepClone3(target[key], map)  // 对属性值进行递归处理\n      }\n    }\n    return cloneTarget\n  } else {\n    return target\n  }\n}\n\n/* \n优化数组的遍历: 不用for...in, 而用forEach\n*/\nfunction deepClone4 (target, map=new Map()) {\n  // 被处理的目标是数组/对象\n  if (target instanceof Array || (target!==null && typeof target==='object')) {\n    // map中存在对应的克隆对象, 直接将其返回\n    let cloneTarget = map.get(target)\n    if (cloneTarget) {\n      return cloneTarget // 不要对同一个对象进行多次clone\n    }\n    // 创建克隆对象\n    if (target instanceof Array) {\n      cloneTarget = []\n      // 保存到map容器\n      map.set(target, cloneTarget)\n      // 向数组添加元素\n      target.forEach((item, index) => {\n        cloneTarget[index] = deepClone4(item, map)\n      })\n    } else {\n      cloneTarget = {}\n      // 保存到map容器\n      map.set(target, cloneTarget)\n      // 向对象添加属性\n      for (const key in target) {\n        if (target.hasOwnProperty(key)) {\n          cloneTarget[key] = deepClone4(target[key], map)  // 对属性值进行递归处理\n        }\n      }\n    }\n    \n    return cloneTarget\n  } else {\n    return target\n  }\n}\n\n//# sourceURL=webpack://wUtils/./src/object/deepClone.js?");

/***/ }),

/***/ "./src/object/mergeObject.js":
/*!***********************************!*\
  !*** ./src/object/mergeObject.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mergeObject\": () => (/* binding */ mergeObject)\n/* harmony export */ });\n/* harmony import */ var _array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../array/concat */ \"./src/array/concat.js\");\n/* \n  语法: object mergeObject(...objs)\n    功能: 合并多个对象, 返回一个合并后对象(不改变原对象)\n    合并前:\n        { a: [{ x: 2 }, { y: 4 }], b: 1}\n        { a: { z: 3}, b: [2, 3], c: 'foo'}\n    合并后: \n        { a: [ { x: 2 }, { y: 4 }, { z: 3 } ], b: [ 1, 2, 3 ], c: 'foo' }\n*/\n\nfunction mergeObject(...objs) {\n  const result = {}\n\n  objs.forEach(obj => {\n    Object.keys(obj).forEach(key => {\n      const value = obj[key]\n      // result中没有key属性\n      if (!result.hasOwnProperty(key)) {\n        result[key] = value\n      } else { // result中有key属性\n        // 对原值与value进行合并生成新的数组\n        result[key] = (0,_array_concat__WEBPACK_IMPORTED_MODULE_0__.concat)([], result[key], value)\n      }\n    })\n  })\n\n  return result\n}\n\n//# sourceURL=webpack://wUtils/./src/object/mergeObject.js?");

/***/ }),

/***/ "./src/object/myInstanceOf.js":
/*!************************************!*\
  !*** ./src/object/myInstanceOf.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"myInstanceOf\": () => (/* binding */ myInstanceOf)\n/* harmony export */ });\n/* \n2. 自定义instanceof工具函数\n    语法: myInstanceOf(obj, Type)\n    功能: 判断obj是否是Type类型的实例\n    实现: Type的原型对象是否是obj的原型链上的某个对象, 如果是返回tru, 否则返回false\n*/\n\nfunction myInstanceOf(obj, Type) {\n  // 得到一个原型对象\n  let protoObj = obj.__proto__\n  while (protoObj!==null) { // 存在原型对象\n    // 如果就是Type的原型对象, 直接返回true\n    if (protoObj===Type.prototype) {\n      return true\n    } \n    // 取出下一个原型对象, 并保存\n    protoObj = protoObj.__proto__\n  }\n  // 出了循环, 说明类型不匹配\n  return false\n}\n\n//# sourceURL=webpack://wUtils/./src/object/myInstanceOf.js?");

/***/ }),

/***/ "./src/object/newInstance.js":
/*!***********************************!*\
  !*** ./src/object/newInstance.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newInstance\": () => (/* binding */ newInstance)\n/* harmony export */ });\n/* \n 1. 自定义new工具函数\n  语法: newInstance(Fn, ...args)\n  功能: 创建Fn构造函数的实例对象\n  实现: 创建空对象obj, 调用Fn指定this为obj, 返回obj\n*/\n\nfunction newInstance(Fn, ...args) {\n  \n  // 创建一个空对象\n  const obj = {}\n  \n\n  // 调用Fn函数, 且指定this是新创建对象\n  const result = Fn.apply(obj, args)\n  \n  // 如果Fn执行返回的是对象类型, 最终的结果就是这个对象\n  if (result instanceof Object) {\n    return result\n  }\n\n  // 让原型对象是空的object对象, 且constructor属性为Fn\n  /* \n  obj.__proto__ = {}\n  obj.__proto__.constructor = Fn\n  问题: 创建每个实例的原型对象不是同一个(实际要求的是同一个)\n  */\n  obj.__proto__ = Fn.prototype  // 将构造函数的显示原型属性值赋值实例对象的隐式原型属性\n\n  // 返回新建的对象\n  return obj\n}\n\n//# sourceURL=webpack://wUtils/./src/object/newInstance.js?");

/***/ }),

/***/ "./src/promise/index.js":
/*!******************************!*\
  !*** ./src/promise/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst PENDING = 'pending' // 初始未确定的状态\nconst RESOLVED = 'resolved' // 成功的状态\nconst REJECTED = 'rejected' // 失败的状态\n\n/* \nPromise构造函数\n*/\nfunction Promise(excutor) {\n\n  const self = this // Promise的实例对象\n  self.status = PENDING // 状态属性, 初始值为pending, 代表初始未确定的状态\n  self.data = undefined // 用来存储结果数据的属性, 初始值为undefined\n  self.callbacks = [] // {onResolved(){}, onRejected(){}}\n\n  /* \n  将promise的状态改为成功, 指定成功的value\n  */\n  function resolve(value) {\n    // 如果当前不是pending, 直接结束\n    if (self.status !== PENDING) return\n\n    self.status = RESOLVED // 将状态改为成功\n    self.data = value // 保存成功的value\n\n    // 异步调用所有缓存的待执行成功的回调函数\n    if (self.callbacks.length > 0) {\n      // 启动一个延迟时间为0的定时器, 在定时器的回调中执行所有成功的回调\n      setTimeout(() => {\n        self.callbacks.forEach(cbsObj => {\n          cbsObj.onResolved(value)\n        })\n      })\n    }\n  }\n\n  /* \n  将promise的状态改为失败, 指定失败的reason\n  */\n  function reject(reason) {\n    // 如果当前不是pending, 直接结束\n    if (self.status !== PENDING) return\n\n    self.status = REJECTED // 将状态改为失败\n    self.data = reason // 保存reason数据\n\n    // 异步调用所有缓存的待执行失败的回调函数\n    if (self.callbacks.length > 0) {\n      // 启动一个延迟时间为0的定时器, 在定时器的回调中执行所有失败的回调\n      setTimeout(() => {\n        self.callbacks.forEach(cbsObj => {\n          cbsObj.onRejected(reason)\n        })\n      })\n    }\n  }\n\n  // 调用excutor来启动异步任务\n  try {\n    excutor(resolve, reject)\n  } catch (error) { // 执行器执行出错, 当前promise变为失败\n    console.log('-----')\n    reject(error)\n  }\n\n}\n\n/* \n用来指定成功/失败回调函数的方法\n    1). 如果当前promise是resolved, 异步执行成功的回调函数onResolved\n    2). 如果当前promise是rejected, 异步执行成功的回调函数onRejected\n    3). 如果当前promise是pending, 保存回调函数\n返回一个新的promise对象\n    它的结果状态由onResolved或者onRejected执行的结果决定\n    2.1). 抛出error ==> 变为rejected, 结果值为error\n    2.2). 返回值不是promise   ==> 变为resolved, 结果值为返回值\n    2.3). 返回值是promise    ===> 由这个promise的决定新的promise的结果(成功/失败)\n*/\nPromise.prototype.then = function (onResolved, onRejected) {\n  const self = this\n\n  onResolved = typeof onResolved === 'function' ? onResolved : value => value // 将value向下传递\n  onRejected = typeof onRejected === 'function' ? onRejected : reason => {\n    throw reason\n  } // 将reason向下传递\n\n  return new Promise((resolve, reject) => { // 什么时候改变它的状态\n\n    /* \n    1. 调用指定的回调函数\n    2. 根据回调执行结果来更新返回promise的状态\n    */\n    function handle(callback) {\n      try {\n        const result = callback(self.data)\n        if (!(result instanceof Promise)) { //  2.2). 返回值不是promise   ==> 变为resolved, 结果值为返回值\n          resolve(result)\n        } else { // 2.3). 返回值是promise    ===> 由这个promise的决定新的promise的结果(成功/失败)\n          result.then(\n            value => resolve(value),\n            reason => reject(reason)\n          )\n          // result.then(resolve, reject)\n        }\n      } catch (error) { // 2.1). 抛出error ==> 变为rejected, 结果值为error\n        reject(error)\n      }\n    }\n\n    if (self.status === RESOLVED) {\n      setTimeout(() => {\n        handle(onResolved)\n      })\n    } else if (self.status === REJECTED) {\n      setTimeout(() => {\n        handle(onRejected)\n      })\n    } else { // PENDING\n      self.callbacks.push({\n        onResolved(value) {\n          handle(onResolved)\n        },\n        onRejected(reason) {\n          handle(onRejected)\n        }\n      })\n    }\n  })\n}\n\n/* \n用来指定失败回调函数的方法\ncatch是then的语法糖\n*/\nPromise.prototype.catch = function (onRejected) {\n  return this.then(undefined, onRejected)\n}\n\n/* \n用来返回一个指定vlaue的成功的promise\nvalue可能是一个一般的值, 也可能是promise对象\n*/\nPromise.resolve = function (value) {\n  return new Promise((resolve, reject) => {\n    // 如果value是一个promise, 最终返回的promise的结果由value决定\n    if (value instanceof Promise) {\n      value.then(resolve, reject)\n    } else { // value不是promise, 返回的是成功的promise, 成功的值就是value\n      resolve(value)\n    }\n  })\n}\n\n/* \n用来返回一个指定reason的失败的promise\n*/\nPromise.reject = function (reason) {\n  return new Promise((resolve, reject) => {\n    reject(reason)\n  })\n}\n\n/* \n返回一个promise, 只有当数组中所有promise都成功才成功, 否则失败\n*/\nPromise.all = function (promises) {\n  return new Promise((resolve, reject) => {\n\n    let resolvedCount = 0 // 已经成功的数量 \n    const values = new Array(promises.length) // 用来保存成功promise的value值\n    // 遍历所有promise, 取其对应的结果\n    promises.forEach((p, index) => {\n      p.then(\n        value => {\n          resolvedCount++\n          values[index] = value\n          if (resolvedCount === promises.length) { // 都成功了\n            resolve(values)\n          }\n        },\n        reason => reject(reason)\n      )\n    })\n  })\n}\n\n/* \n返回一个promise, 由第一个完成promise决定\n*/\nPromise.race = function (promises) {\n  return new Promise((resolve, reject) => {\n    // 遍历所有promise, 取其对应的结果\n    promises.forEach(p => {\n      // 返回的promise由第一个完成p来决定其结果\n      p.then(resolve, reject)\n    })\n  })\n}\n\n/* \n返回一个延迟指定时间才成功(也可能失败)的promise\n*/\nPromise.resolveDelay = function (value, time) {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      // 如果value是一个promise, 最终返回的promise的结果由value决定\n      if (value instanceof Promise) {\n        value.then(resolve, reject)\n      } else { // value不是promise, 返回的是成功的promise, 成功的值就是value\n        resolve(value)\n      }\n    }, time)\n  })\n}\n\n/* \n返回一个延迟指定时间才失败的promise\n*/\nPromise.rejectDelay = function (reason, time) {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      reject(reason)\n    }, time)\n  })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Promise);\n\n//# sourceURL=webpack://wUtils/./src/promise/index.js?");

/***/ }),

/***/ "./src/pub-sub/index.js":
/*!******************************!*\
  !*** ./src/pub-sub/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* \n自定义消息订阅与发布\n*/\n\nconst PubSub = {}\n/* \n  {\n    add: {\n      token1: callback1, \n      token2: callback2\n    },\n    update: {\n      token3: callback3\n    }\n  }\n*/\nlet callbacksObj = {} // 保存所有回调的容器\nlet id = 0 // 用于生成token的标记\n\n// 1. 订阅消息\nPubSub.subscribe = function (msgName, callback) {\n\n  // 确定token\n  const token = 'token_' + ++id\n  // 取出当前消息对应的callbacks\n  const callbacks = callbacksObj[msgName]\n  if (!callbacks) {\n    callbacksObj[msgName] = {\n      [token]: callback\n    }\n  } else {\n    callbacks[token] = callback\n  }\n  // 返回token\n  return token\n}\n\n\n// 2. 发布异步的消息\nPubSub.publish = function (msgName, data) {\n  // 取出当前消息对应的callbacks\n  let callbacks = callbacksObj[msgName]\n  // 如果有值\n  if (callbacks) {\n    // callbacks = Object.assign({}, callbacks)\n    // 启动定时器, 异步执行所有的回调函数\n    setTimeout(() => {\n      Object.values(callbacks).forEach(callback => {\n        callback(data)\n      })\n    }, 0)\n  }\n}\n\n// 3. 发布同步的消息\nPubSub.publishSync = function (msgName, data) {\n  // 取出当前消息对应的callbacks\n  const callbacks = callbacksObj[msgName]\n  // 如果有值\n  if (callbacks) {\n    // 立即同步执行所有的回调函数\n    Object.values(callbacks).forEach(callback => {\n      callback(data)\n    })\n  }\n}\n\n/*\n4. 取消消息订阅\n  1). 没有传值, flag为undefined\n  2). 传入token字符串\n  3). msgName字符串\n*/\nPubSub.unsubscribe = function (flag) {\n  // 如果flag没有指定或者为null, 取消所有\n  if (flag === undefined) {\n    callbacksObj = {}\n  } else if (typeof flag === 'string') {\n    if (flag.indexOf('token_') === 0) { // flag是token\n      // 找到flag对应的callbacks\n      const callbacks = Object.values(callbacksObj).find(callbacks => callbacks.hasOwnProperty(flag))\n      // 如果存在, 删除对应的属性\n      if (callbacks) {\n        delete callbacks[flag]\n      }\n    } else { // flag是msgName\n      delete callbacksObj[flag]\n    }\n\n  } else {\n    throw new Error('如果传入参数, 必须是字符串类型')\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PubSub);\n\n//# sourceURL=webpack://wUtils/./src/pub-sub/index.js?");

/***/ }),

/***/ "./src/string/index.js":
/*!*****************************!*\
  !*** ./src/string/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reverseString\": () => (/* binding */ reverseString),\n/* harmony export */   \"palindrome\": () => (/* binding */ palindrome),\n/* harmony export */   \"truncate\": () => (/* binding */ truncate)\n/* harmony export */ });\n/* \n1. 字符串倒序: reverseString(str)  生成一个倒序的字符串\n2. 字符串是否是回文: palindrome(str) 如果给定的字符串是回文，则返回 true ；否则返回 false\n3. 截取字符串: truncate(str, num) 如果字符串的长度超过了num, 截取前面num长度部分, 并以...结束\n*/\nfunction reverseString (str) {\n  return str.split('').reverse().join('')\n}\n\nfunction palindrome (str) {\n  return str===reverseString(str)\n}\n\nfunction truncate(str, num) {\n  return str.length>num ? str.substring(0, num) + '...': str\n}\n\n\n//# sourceURL=webpack://wUtils/./src/string/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});