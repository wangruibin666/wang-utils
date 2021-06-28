/**
 * 
 * @param {number|string} num 需要处理的数字
 * @param {number} n 保留位数,默认1
 * @param {string} flag = 'ceil' || 'floor' 向上或向下保留，默认四舍五入
 * @returns {string}
 */
export function formatFloat(num,n=1,flag){
	var f = parseFloat(num);
	if(isNaN(f)){
		return false;
	}
	if(flag === 'ceil'){
		f = Math.ceil(num*Math.pow(10, n))/Math.pow(10, n); // n 幂
	}else if(flag === 'floor'){
		f = Math.floor(num*Math.pow(10, n))/Math.pow(10, n); // n 幂
	}else{
		f = Math.round(num*Math.pow(10, n))/Math.pow(10, n); // n 幂
	}
	var s = f.toString();
	var rs = s.indexOf('.');
	//判定如果是整数，增加小数点再补0
	if(rs < 0){
		rs = s.length;
		s += '.';
	}
	while(s.length <= rs + n){
		s += '0';
	}
	return s;
}

/**
 * 
 * @param {amount} amount 金额
 * @returns {string}
 */
export function formatAmount(amount) {
	if(isNaN(amount)){
		return false;
	}
	amounts = Math.abs(amount)
	amounts = '' + (Number(amounts)+0.004).toFixed(2);
	var x = amounts.split('.');
	var x1 = x[0];
	var x2 = '.' + x[1];
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	if(amount > 0){
		return x1 + x2;
	}else{
		return '-' + x1 + x2;
	}
}
