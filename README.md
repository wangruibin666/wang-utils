## 项目中常用方法归类(持续更新...)：



## 安装

```
npm i wangs-utils
```

## 使用

```
import * as wUtils from 'wangs-utils/dist/wang_utils';
```

## 源码地址

[传送:](https://github.com/wangruibin666/wang-utils)



### 1.日期和时间戳

```javascript
1.根据时间戳获取时间格式：getDate(timestamp,format)
    /*
     timestamp: 时间戳，默认当前时间戳
     format: 期望的日期格式，精确到：'year' || 'month' || 'day' || 'hour' || 'minute' || 'second' 默认到秒
    */
	getDate() //=> "2021-07-02 09:27:39"
2.时间戳相差间隔：stampInterval (stamp1, stamp2)
 /**
 * 
 * @param {number|string} stamp1 时间戳
 * @param {number|string} stamp2 时间戳
 * @returns {string} 俩个时间戳的间隔
 */

3.日期对比大小：compareDate(d1,d2)
	var current_time = "2007-2-2 7:30";
    var stop_time = "2007-1-31 8:30";
    console.log(CompareDate(current_time,stop_time)); //=>true

4.获得据当天n天的日期：dateByday(num, f)
 /**
 * param{number} num 距离当日num天的日期
 * param{number} f 日期分隔符 '-'、'/'...
 * */
```

### 2.对数字的处理

```javascript

1. 金额格式：formatAmount(amount)
	formatAmount(1000) // => 1,000.00 


2. 数字格式：formatFloat(num,n,flag)
    /*
     num: 需要处理的数字
     n: 保留的位数
     flag：默认四舍五入，可选'ceil'和'floor'
    */

    formatFloat(2.1,2) //=> 2.10

3.俩个大数字相加：sumBigNumber(a,b)
 /*
  @param {string} a 
  @param {string} b
 */

4. 范围内的随机数：random (min, max)

5. 将阿拉伯数字翻译成中文的大写数字：numToChinese(num)
	numToChinese(1) //=> '一'

6. 将数字金额转换为大写金额：amountToChinese(num)
 	amountToChinese(1.1) //=> '壹元壹角'

```

### 3.优化(防抖,节流)

```javascript
1.防抖: debounce(callback, delay)
 /*
  如果短时间内大量触发同一事件，只会执行一次函数
  callback: 需要处理的回调函数
  delay：期限值
  如果在delay内没有再次触发滚动事件，那么就执行函数
  如果在delay内再次触发滚动事件，那么当前的计时取消，重新开始计时
  
 */

2.节流: throttle(callback, delay)
 /*
  如果短时间内大量触发同一事件，那么在函数执行一次之后，该函数在指定的时间期限内不再工作，直至过了这段时间才重新生效
  callback: 需要处理的回调函数
  delay：间隔值
 */

```

### 4.对象的操作

```javascript
1.对比俩个对象是否相等：deepCompare(x, y)
 deepCompare({a:1},{a:1}) //=> true

2.对象深拷贝：deepClone(obj)
```

### 5.数组的操作

```javascript
1.数组平铺(降维)：deepFlatten(arr)

2.树形数据：
	1>对树形数据进行提取，比如级联选择器，需要获取每一级的某些数据
		extractTree(arrs,childs,attrArr)
		/*
		 @param {Array} arrs 树形数据
         @param {string} childs 树形数据子数据的属性名,常用'children'
         @param {Array} attrArr 需要获取的公共属性数组
		*/

	2>对一维的数据，重组成树形数据结构
		 makeTree(data,pid,child)
		/**
         * 
         * @param {Array} data 
         * @param {string} pid 子树找父级的标识
         * @param {string} child 自定义子树字段名称
         * @returns 
         */

3.对比俩个数组是否相等
  compareArr(arr1, arr2)
  /**
  * 判断俩个数组是否相等，元素位置也必须相等
  * @param {Array} arr1 
  * @param {Array} arr2 
  * @returns {Boolean}
 */

4.数组的深拷贝：deepClone(arr)

5.数组去重：unique(arr)

6.由对象组成的数组，按属性去重：uniqueByAttr(array, key)
 /**
 * 
 * @param {Array} array 
 * @param {string} key 对象的属性名
 * @returns {Array}
 */
```

### 6.数据类型

```javascript
1. 判断传入数据的数据类型： type(data)
	/*
	 @params{*} data
	 @returns: 'bool' | 'number' | 'string' | 'undefined' | 'null' | 'array' | 'object' | 'function' | 'sorry! unrecognized'
	*/
	type(1) //=>'number'
	type('1') //=>'string'
	type({}) //=> 'object'
	type(()=>{}) //=> 'function'

```

### 7.字符串

```javascript

1.去除空格: trim(str, type)
 /**
 * 去除空格
 * @param {str}
 * @param {type} 
 *    type: 1-所有空格 2-前后空格 3-前空格 4-后空格
 * @return {String}
 */

2.大小写：changeCase(str, type)
 /**
 * @param {str} 
 * @param {type}
 *    type: 1:首字母大写 2：首页母小写 3：大小写转换 4：全部大写 5：全部小写
 * @return {String}
 */

```

### 8.浏览器

```javascript
1. 获取浏览器的类型：browserType() //=> 'Opera' || 'Safari'...

2. 获得url中的query并返回对象： getQuery(url)

3. 封装storage
    1>设置cookie: setCookie(name, value, day) // name: 名称, value: 值, day: 过期时间

	2>获取cookie：getCookie(name)

	3>删除cookie: removeCookie(name)

	4>设置localStorage: setLocal(key, val)

    5>获取localStorage: getLocal(key)

	6>移除localStorage: removeLocal(key)

	7>移除所有localStorage: clearLocal()

	8>设置sessionStorage: setSession(key, val)

    9>获取sessionStorage:	getSession(key)

	10>移除sessionStorage: removeSession(key)

	11>移除所有sessionStorage: clearSession()
```

