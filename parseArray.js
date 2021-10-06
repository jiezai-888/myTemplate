//递归处理
import lookup from'./lookup.js'
import myrender from './myrender.js'

export default function parseArray(token,data){
	let value=lookup(data,token[1]);
	// console.log("牛逼不666:",value);
	let resultStr='';
	if(value){
		for(let i=0;i<v.length;i++){
			resultStr+=myrender(token[2],{
				...value[i],
				'.':value[i]
			});
		}
	}
	return resultStr;
};



