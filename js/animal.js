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
  	this.name = name;
  	this.dob = new Date(dob)//(dob) ? new Date(dob): new Date();

  };

  ns.Animal.prototype.age = function age(){
  	var birthyear = this.dob.getFullYear();
  	var today = new Date();
  	var year = today.getFullYear();
  	return year - birthyear;

  };

	window.zoo = ns;
})(window.zoo || {});