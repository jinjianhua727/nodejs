var shape = {
	name : "react",
	popup : function(){
		console.log("inside name : " + this.name);

		setTimeout(()=>{
			console.log("setTimeout name" + this.name)
		},3000)
	}
}
shape.popup();