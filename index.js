// import Scanner from './Scanner.js'
import toToken from './toToken.js'
import myrender from './myrender.js'


window.TemplateEngine={
		
	render(templateStr,data){
		
			let tokens=toToken(templateStr);
			// console.log(tokens);
			
			//myrender() tokens渲染成为dom
			let domStr=myrender(tokens,data);
			console.log("domstr模板字符串: ",domStr);
			
			return domStr;
		
	}
}