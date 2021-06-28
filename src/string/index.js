/* 
1. 字符串倒序: reverseString(str)  生成一个倒序的字符串
2. 字符串是否是回文: palindrome(str) 如果给定的字符串是回文，则返回 true ；否则返回 false
3. 截取字符串: truncate(str, num) 如果字符串的长度超过了num, 截取前面num长度部分, 并以...结束
*/
export function reverseString (str) {
  return str.split('').reverse().join('')
}

export function palindrome (str) {
  return str===reverseString(str)
}

export function truncate(str, num) {
  return str.length>num ? str.substring(0, num) + '...': str
}

/**
 * 
 * @param {number|string} timestamp 
 * @param {string} format 'year' || 'month' || 'day' || 'hour' || 'minute' || 'second' 
 * @returns 
 */
export function getDate(timestamp, format){
  if(timestamp && isNaN(timestamp))return false;
  if((timestamp+'').includes('.')) return false;
  var _timestamp = timestamp || new Date().getTime();
  function add0(m){return m<10?'0'+m:m }
  var time = new Date(Number(_timestamp));
  var y = time.getFullYear();
  var m = time.getMonth()+1;
  var d = time.getDate();
  var h = time.getHours();
  var m = time.getMinutes();
  var s = time.getSeconds();
  switch(format){
    case 'year':
      return y;
    case 'month':
      return y+'-'+add0(m);
    case 'day':
      return y+'-'+add0(m)+'-'+add0(d);
    case 'hour':
      return y+'-'+add0(m)+'-'+add0(d)+' '+add0(h);
    case 'minute':
      return y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(m);
    case 'second': 
      return y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(m)+':'+add0(s);
    default: 
      return y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(m)+':'+add0(s);
  }
}
