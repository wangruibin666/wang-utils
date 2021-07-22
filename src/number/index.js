/**
 * 
 * @param {number|string} num 需要处理的数字
 * @param {number} n 保留位数,默认1
 * @param {string} flag = 'ceil' || 'floor' 向上或向下保留，默认四舍五入
 * @returns {string}
 */
export function formatFloat(num, n = 1, flag) {
	var f = parseFloat(num);
	if (isNaN(f)) {
		return false;
	}
	if (flag === 'ceil') {
		f = Math.ceil(num * Math.pow(10, n)) / Math.pow(10, n); // n 幂
	} else if (flag === 'floor') {
		f = Math.floor(num * Math.pow(10, n)) / Math.pow(10, n); // n 幂
	} else {
		f = Math.round(num * Math.pow(10, n)) / Math.pow(10, n); // n 幂
	}
	var s = f.toString();
	var rs = s.indexOf('.');
	//判定如果是整数，增加小数点再补0
	if (rs < 0) {
		rs = s.length;
		s += '.';
	}
	while (s.length <= rs + n) {
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
	if (isNaN(amount)) {
		return false;
	}
	amounts = Math.abs(amount)
	amounts = '' + Number(amounts).toFixed(2);
	var x = amounts.split('.');
	var x1 = x[0];
	var x2 = '.' + x[1];
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	if (amount > 0) {
		return x1 + x2;
	} else {
		return '-' + x1 + x2;
	}
}


/**
 * 
 * @param {string} a 
 * @param {string} b 
 * @returns 
 */
export function sumBigNumber(a, b) {
	var res = '',
		temp = 0;
	a = a.split('');
	b = b.split('');
	while (a.length || b.length || temp) {
		temp += ~~a.pop() + ~~b.pop();
		res = (temp % 10) + res;
		temp = temp > 9;
	}
	return res.replace(/^0+/, '');
}

/*随机数范围*/
export function random(min, max) {
	if (arguments.length === 2) {
		return Math.floor(min + Math.random() * ((max + 1) - min))
	} else {
		return null;
	}
}

/*将阿拉伯数字翻译成中文的大写数字*/
export function numToChinese(num) {
	var AA = new Array("零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十");
	var BB = new Array("", "十", "百", "仟", "萬", "億", "点", "");
	var a = ("" + num).replace(/(^0*)/g, "").split("."),
		k = 0,
		re = "";
	for (var i = a[0].length - 1; i >= 0; i--) {
		switch (k) {
			case 0:
				re = BB[7] + re;
				break;
			case 4:
				if (!new RegExp("0{4}//d{" + (a[0].length - i - 1) + "}$")
					.test(a[0]))
					re = BB[4] + re;
				break;
			case 8:
				re = BB[5] + re;
				BB[7] = BB[5];
				k = 0;
				break;
		}
		if (k % 4 == 2 && a[0].charAt(i + 2) != 0 && a[0].charAt(i + 1) == 0)
			re = AA[0] + re;
		if (a[0].charAt(i) != 0)
			re = AA[a[0].charAt(i)] + BB[k % 4] + re;
		k++;
	}
	if (a.length > 1) // 加上小数部分(如果有小数部分)
	{
		re += BB[6];
		for (var i = 0; i < a[1].length; i++)
			re += AA[a[1].charAt(i)];
	}
	if (re == '一十')
		re = "十";
	if (re.match(/^一/) && re.length == 3)
		re = re.replace("一", "");
	return re;
}


/*将数字转换为大写金额*/
export function amountToChinese(amt) {
	let numberValue = Math.round(amt * 100) + '' // 数字金额(转为以分为单位)
	let flag = ''
	let chineseValue = ''          // 转换后的汉字金额
	let String1 = '零壹贰叁肆伍陆柒捌玖'       // 汉字数字
	let String2 = '万仟佰拾亿仟佰拾万仟佰拾元角分'     // 对应单位
	let len = numberValue.length         // numberValue 的字符串长度
	let Ch1             // 数字的汉语读法
	let Ch2             // 数字位的汉字读法
	let nZero = 0            // 用来计算连续的零值的个数
	let String3            // 指定位置的数值

	if (numberValue.substr(0, 1) === '-') {
		flag = '负'
		numberValue = numberValue.substr(1, numberValue.length)
	} else if (numberValue.substr(0, 1) === '+') {
		numberValue = numberValue.substr(1, numberValue.length)
	}

	if (len > 15) {//超出范围（万亿）
		return amt
	}

	if (numberValue === '0') {
		chineseValue = '零元整'
		return chineseValue
	}

	String2 = String2.substr(String2.length - len, len)   // 取出对应位数的STRING2的值
	for (let i = 0; i < String2.length; i++) {
		String3 = parseInt(numberValue.substr(i, 1), 10)   // 取出需转换的某一位的值
		if (i !== (len - 3) && i !== (len - 7) && i !== (len - 11) && i !== (len - 15)) {
			if (String3 === 0) {
				Ch1 = ''
				Ch2 = ''
				nZero = nZero + 1
			} else if (String3 !== 0 && nZero !== 0) {
				Ch1 = '零' + String1.substr(String3, 1)
				Ch2 = String2.substr(i, 1)
				nZero = 0
			} else {
				Ch1 = String1.substr(String3, 1)  //String1.substr(1, 1)壹
				Ch2 = String2.substr(i, 1)    //仟
				nZero = 0
			}
		} else {              // 该位是万亿，亿，万，元位等关键位
			if (String3 !== 0 && nZero !== 0) {
				Ch1 = '零' + String1.substr(String3, 1)
				Ch2 = String2.substr(i, 1)
				nZero = 0
			} else if (String3 !== 0 && nZero === 0) {
				Ch1 = String1.substr(String3, 1)
				Ch2 = String2.substr(i, 1)
				nZero = 0
			} else if (String3 === 0 && nZero >= 3) {
				Ch1 = ''
				Ch2 = ''
				nZero = nZero + 1
			} else {
				Ch1 = ''
				Ch2 = String2.substr(i, 1)
				nZero = nZero + 1
			}

			if (i === (len - 11) || i === (len - 3)) {    // 如果该位是亿位或元位，则必须写上
				Ch2 = String2.substr(i, 1)
			}
		}
		chineseValue = chineseValue + Ch1 + Ch2
	}

	if (String3 === 0) {// 最后一位（分）为0时，加上“整”
		chineseValue = chineseValue + '整'
	}
	return flag + chineseValue
}
