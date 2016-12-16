var shape = {
    name: "react",
    popup: function () {
        var _this = this;
        console.log("inside name : " + this.name);
        setTimeout(function () {
            console.log("setTimeout name" + _this.name);
        }, 3000);
    }
};
shape.popup();
