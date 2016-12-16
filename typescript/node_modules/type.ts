function area(sharp:string,width:number,height:number){
	var area = width*height;
	return 'i`m a' +sharp+ ' area: ' + area
}
document.body.innerHTML =area("reactAngle",30,15)