import Scanner from './Scanner.js'
import nextToken from './nextToken.js'

//将目标字符串变成tokens数组
export default function toToken (templateStr){
	let tokens=[];
	
	let scanner=new Scanner(templateStr);
	let words;
	while(!scanner.eos()){
		words=scanner.scanUntil('{{');
		if(words!=''){
			// tokens.push(['text',words.replace(/\s/g,'')]);
			tokens.push(['text',words]);
		}
		//过大括号
		scanner.scan('{{')
		
		words=scanner.scanUntil('}}');
		if(words!=''){
			if(words[0]=="#"){
				tokens.push(['#',words.substring(1)]);
			}else if(words[0]=='/'){
				tokens.push(['/',words.substring(1)]);
			}else{
				tokens.push(['name',words]);
			}
		}
		scanner.scan('}}');
		
	}
	
	
	return nextToken(tokens);
	// return tokens;
	
}