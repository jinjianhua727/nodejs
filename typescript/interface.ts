interface Shape {
	name :string;
	width : number;
	height : number;
	color ?: string;
}

function area(sh:Shape){
	var area = sh.width * sh.height;
	return 'i`m a' +sh.name+ ' area: ' + area
}
console.log(area({
	name : "矩形1",
	width : 20,
	height : 30
}))
console.log(area({
	name : "矩形2",
	width : 30,
	height : 30,
	color : "red"
}))