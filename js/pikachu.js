(function (ns) {



	ns.Pikachu = function Pikachu(name, dob){

		ns.Animal.call(this, name, dob);

	};

	//prototypical / Prototypal inheritance
	ns.Pikachu.prototype = Object.create(ns.Animal.prototype) //this prototype was created from another prototype
							//Object.create will create us a blank canvass, (object) for the manager prototype to build on, with the Person protoype as the base for the canvass
	ns.Pikachu.prototype.constructor = ns.Pikachu;  //replace manager and person with parent and child in the relationship (object within objects within objects)
	/**
	* Assign a person (employee) to a manager
	* @param {Person} employee        The Employee to assign
	*/
	ns.Pikachu.prototype.giveBirth = function giveBirth( name ) {
		

		return new ns.Pikachu(name, Date.now());



		// if (species instanceof ns.Animal) {

		// 	this.species.push(species);
		// }
	}

	ns.Pikachu.prototype.toString = function talk(){
		return "My name is " + this.name;
	};

	ns.Pikachu.prototype.shockFools = function shockFools(fools) {
		if (Number(fools)) {
		return "Pikachu has shocked " + fools + " fools";
		}
	}

	window.zoo = ns;
})(window.zoo || {});