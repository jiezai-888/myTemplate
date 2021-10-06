//点符号解决,获取值
export default function lookup(data,formalParameters){
	// let tempValue=data;
	
	if(formalParameters.indexOf('.')!=-1 && formalParameters!='.'){
		let objNames=formalParameters.split('.');
		let tempValue=data;
		for(let i=0;i<objNames.length;i++){
			tempValue=tempValue[objNames[i]];
		}
		//console.log(tempValue);
		return tempValue;
	}
	
	return data[formalParameters];
}