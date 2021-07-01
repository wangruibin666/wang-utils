/* 
1. 字符串倒序: reverseString(str)  生成一个倒序的字符串
2. 字符串是否是回文: palindrome(str) 如果给定的字符串是回文，则返回 true ；否则返回 false
3. 截取字符串: truncate(str, num) 如果字符串的长度超过了num, 截取前面num长度部分, 并以...结束
*/
export function reverseString(str) {
  return str.split('').reverse().join('')
}

export function palindrome(str) {
  return str === reverseString(str)
}

export function truncate(str, num) {
  return str.length > num ? str.substring(0, num) + '...' : str
}

/**
 * 
 * @param {number|string} timestamp 
 * @param {string} format 'year' || 'month' || 'day' || 'hour' || 'minute' || 'second' 
 * @returns 
 */
export function getDate(timestamp, format) {
  if (timestamp && isNaN(timestamp)) return false;
  if ((timestamp + '').includes('.')) return false;
  var _timestamp = timestamp || new Date().getTime();
  function add0(m) { return m < 10 ? '0' + m : m }
  var time = new Date(Number(_timestamp));
  var y = time.getFullYear();
  var m = time.getMonth() + 1;
  var d = time.getDate();
  var h = time.getHours();
  var mm = time.getMinutes();
  var s = time.getSeconds();
  switch (format) {
    case 'year':
      return y;
    case 'month':
      return y + '-' + add0(m);
    case 'day':
      return y + '-' + add0(m) + '-' + add0(d);
    case 'hour':
      return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h);
    case 'minute':
      return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm);
    case 'second':
      return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s);
    default:
      return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s);
  }
}

/**
 * 
 * @param {number|string} stamp1 时间戳
 * @param {number|string} stamp2 时间戳
 * @returns {string} 俩个时间戳的间隔
 */
export function stampInterval(stamp1, stamp2) {
  var t = stamp1 > stamp2 ? stamp1 : stamp2,
    e = stamp1 > stamp2 ? stamp2 : stamp1;
  var n = [0, 0, 0, 0],
    r = "",
    o = t > e ? parseInt((t - e) / 1e3) : 0;
  return n[0] = o > 86400 ? parseInt(o / 86400) : 0, o -= 86400 * n[0], n[1] = o > 3600 ? parseInt(o / 3600) : 0,
    o -= 3600 * n[1], n[2] = o > 60 ? parseInt(o / 60) : 0, n[3] = o - 60 * n[2], r = n[0] > 0 ? n[0] + "天" : "",
    r += n[0] <= 0 && n[1] <= 0 ? "" : n[1] + "小时", r += n[0] <= 0 && n[1] <= 0 && n[2] <= 0 ? "" : n[2] + "分钟",
    r += n[0] <= 0 && n[1] <= 0 && n[2] <= 0 && n[3] <= 0 ? "" : n[3] + "秒"
}

/**
 * @param {number} num 距离当日num天的日期
 * @param {number} str 日期分隔符 '-'、'/'...
 *  @returns {string}
 * */
export function dateByday(num = 0, str = '-') {
  var today = new Date();
  var nowTime = today.getTime();
  var ms = 24 * 3600 * 1000 * num;
  today.setTime(parseInt(nowTime + ms));
  var oYear = today.getFullYear();
  var oMoth = (today.getMonth() + 1).toString();
  if (oMoth.length <= 1) oMoth = '0' + oMoth;
  var oDay = today.getDate().toString();
  if (oDay.length <= 1) oDay = '0' + oDay;
  return oYear + str + oMoth + str + oDay;
}

/**
 * 获取url的query参数对象
 * @param {string} url 
 * @returns {object}
 */
export function getQuery(url) {
  var object = {};
  arr = url.split("?")[1].split("&");
  for (var i = 0; i < arr.length; i++) {
    var arr1 = arr[i].split("=");
    var key = arr1[0];
    var value = arr1[1];
    object[key] = value;
  }
  return object;
}

/**
 * 去除空格
 * @param {str}
 * @param {type} 
 *    type: 1-所有空格 2-前后空格 3-前空格 4-后空格
 * @return {String}
 */
export function trim(str, type) {
  type = type || 1
  switch (type) {
    case 1:
      return str.replace(/\s+/g, "");
    case 2:
      return str.replace(/(^\s*)|(\s*$)/g, "");
    case 3:
      return str.replace(/(^\s*)/g, "");
    case 4:
      return str.replace(/(\s*$)/g, "");
    default:
      return str;
  }
}

/**
 * @param {str} 
 * @param {type}
 *    type: 1:首字母大写 2：首页母小写 3：大小写转换 4：全部大写 5：全部小写
 * @return {String}
 */
export function changeCase(str, type) {
  type = type || 4
  switch (type) {
    case 1:
      return str.replace(/\b\w+\b/g, function (word) {
        return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
      });
    case 2:
      return str.replace(/\b\w+\b/g, function (word) {
        return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();
      });
    case 3:
      return str.split('').map(function (word) {
        if (/[a-z]/.test(word)) {
          return word.toUpperCase();
        } else {
          return word.toLowerCase()
        }
      }).join('')
    case 4:
      return str.toUpperCase();
    case 5:
      return str.toLowerCase();
    default:
      return str;
  }
}
