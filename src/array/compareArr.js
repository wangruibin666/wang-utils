import {compareObj} from '../object/compareObj';
import {type} from '../function/type';

/**
 * 判断俩个数组是否相等，元素位置也必须相等
 * @param {Array} arr1 
 * @param {Array} arr2 
 * @returns {Boolean}
 */
export function compareArr(arr1, arr2) {//判断2个数组是否相等
	if(type(arr1)!='array' || type(arr2) != 'array')return '参数错误';
	if (arr1 === arr2) {//如果2个数组对应的指针相同，那么肯定相等，同时也对比一下类型
		return true;
	} else {
		if (arr1.length != arr2.length) {
			return false;
		} else {//长度相同
			for (let i in arr1) {//循环遍历对比每个位置的元素
				if(type(arr1[i]) == type(arr2[i])){
					if(('function','object').includes(type(arr1[i])) ){
						if(!compareObj(arr1[i],arr2[i])){
							return false
						}
					}else if(type(arr1[i]) == 'array'){
						compareArr(arr1[i], arr2[i])
					} else if(arr1[i] != arr2[i]){
						return false;
					}
				}else{
					return false;
				}
			}//for循环完成，没有出现不相等的情况，那么2个数组相等
			return true;
		}
	}
}