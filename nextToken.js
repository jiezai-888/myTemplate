	
export default function nextToken(tokens){
	//对于引用类型的使用体现的淋漓尽致
	console.log("调用了nextToken方法");
	// 结果数组
	let nextTokens=[];
	//栈结构
	let sections=[];
	//收集器,引用类型,为中间过渡用的
	let collector=nextTokens;
	
	for(let i=0;i<tokens.length;i++){
		//token与tokens都是数组，引用类型
		let token=tokens[i];
		switch(token[0]){
			case'#':
				collector.push(token);
				//其实是nextTokens添加
				sections.push(token);
				//相当创建一个新数组一个新的数组,也相当与操作token[2]
				collector=token[2]=[];
				break;
			case '/':
				let getelement=sections.pop();
				collector=sections.length>0?
				sections[sections.length-1][2]:nextTokens;
				// nextTokens.push(getelement);
				break;
			default:
				collector.push(token);//往新的数组(token[2])里面添加
		}
	}
	
	return nextTokens;
	
	// return tokens;
}