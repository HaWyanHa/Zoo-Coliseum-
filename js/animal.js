(function (ns) {

	// var animal = {
	// 	name: if (name) {
	// 		this.name = name
	// 		}, 
	// 	dob: (new Date()),
	// 	age: ,
	// 	attack: function attack () {
	// 		this.age + 1;
	// 	}
	// };
 
  ns.Animal = function Animal (name, dob){

  	// if ((!(typeof name === "string")) || (!(typeof this.dob.toString() === "Invalid Date"))){
  	//   		throw new Error ("Not a name and/or not a date");
  	//   	}

  	this.name = name;
  	this.dob = new Date(dob)//(dob) ? new Date(dob): new Date();

  	if ((!(typeof name === "string")) || (typeof this.dob.toString() === "Invalid Date")){
  	  		throw new Error ("Not a name and/or not a date");
  	  	}

  };

  ns.Animal.prototype.age = function age(){
  	var birthyear = this.dob.getFullYear();
  	var today = new Date();
  	var year = today.getFullYear();
  	return year - birthyear;

  };

  ns.Animal.prototype.expire = function expire() {
  	
  	return (this.isDead = true);  //adds property of isDead to Animal

  }

	window.zoo = ns;
})(window.zoo || {});