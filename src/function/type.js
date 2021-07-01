/**
 * 
 * @param {*} data 
 * @returns 'bool' | 'number' | 'string' | 'undefined' | 'null' | 'array' | 'object' | 'function' | 'sorry! unrecognized'
 */
export function type(data){
	let dataType = Object.prototype.toString.call(data);
	switch(dataType){
		case '[object Boolean]':
			return 'bool';
		case '[object Number]':
			return 'number';
		case '[object String]':
			return 'string';
		case '[object Undefined]':
			return 'undefined';
		case '[object Null]':
			return 'null';
		case '[object Array]':
			return 'array';
		case '[object Object]':
			return 'object';
		case '[object Function]':
			return 'function';
		case '[object Date]':
			return 'date';
		case '[object RegExp]':
			return 'regExp';
		case '[object Error]':
				return 'error'
		case '[object Symbol]':
				return 'symbol';
		case '[object Promise]':
				return 'promise';
		case '[object Set]':
				return 'set';
		default:
			return 'sorry! unrecognized';
	}
}
