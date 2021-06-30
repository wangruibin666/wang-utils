## 安装

```
npm i wangs-utils
```

## 使用

```
import * as wUtils from 'wangs-utils/dist/wang_utils';
```

## 项目中常用方法归类：

### 1.日期和时间戳

```javascript
1.getDate(timestamp,format)
    /*
     timestamp: 时间戳，默认当前时间戳
     format: 期望的日期格式，'year' || 'month' || 'day' || 'hour' || 'minute' || 'second' 默认到秒
    */
	getDate() //=> "2021-45-28 19:45:29"

```



### 2.对数字的处理

```javascript

1. 金额格式：formatAmount(amount)
    /*
     amount: 传入数字
    */
    
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

### 对象的操作

```javascript
1.对比俩个对象是否相等：deepCompare(x, y)
 deepCompare({a:1},{a:1}) //=> true
```

### 数组的操作

```javascript
1.数组平铺(降维)：deepFlatten(arr)

2.树形数据：
	1>对树形数据进行提取，比如级联选择器，需要获取每一级的某些数据
		extractTree(arrs,childs,attrArr)
		/*
		 @param {Array} arrs 树形数据
         @param {string} childs 树形数据子数据的属性名,常用'children'
         @param {Array} attrArr 需要提取的公共属性数组
		*/

	2>
```

