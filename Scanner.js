export default class Scanner{
	constructor(templateStr) {
	    // console.log("我是扫描类");
		this.templateStr=templateStr;
		
		//指针
		this.pos=0;
		//尾巴
		this.tail=templateStr;
	}
		
	scan(tag){
		if(this.tail.indexOf(tag)==0){
			//tag有多长，比如{{长度为2，则让指针后运多少位
			this.pos+=tag.length;
			this.tail=this.templateStr.substring(this.pos);
		}
	}
	//让指针进行扫描，直到遇见指定的内容结束，并返回之前经过的内容
	scanUntil(stopTag){
		//记录执行本方法的时候的pos的值
		const pos_backup=this.pos;
		while(this.tail.indexOf(stopTag)!=0
				&& !this.eos()){
			this.pos++;
			//改变尾巴为当前指针这个字符开始，到最后的全部字符。
			this.tail=this.templateStr.substring(this.pos);
			
		}
		// console.log("尾巴：",this.templateStr.substring(pos_backup,this.pos));
		return this.templateStr.substring(pos_backup,this.pos);
	}
	
	//指针是否到头，返回Boolean
	eos(){
		return this.pos>=this.templateStr.length;
	}
	
}