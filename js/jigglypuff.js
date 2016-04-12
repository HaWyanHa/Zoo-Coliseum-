(function (ns) {

	ns.Jigglypuff = function Jigglypuff(name, dob) {

		ns.Animal.call(this, name, dob);
		
	};
	

	ns.Jigglypuff.prototype = Object.create(ns.Animal.prototype)

	ns.Jigglypuff.prototype.constructor = ns.Jigglypuff;


	ns.Jigglypuff.prototype.gettingJigglyWitIt = function gettingJigglyWitIt( name ) {
		
		if (!(typeof name === "string" )){
			throw new Error ("Not a Pokemon!");
		}

		return new ns.Jigglypuff(name, Date.now());


	}

	ns.Jigglypuff.prototype.toString = function sing(){
		return this.name + " jiggly jiggly jigglypuff!";
	};

	ns.Jigglypuff.prototype.sleep = function sleep(hours) {
		if (!(Number(hours))) {

			throw new Error ("Jigglypuff is tired dammit!");
			}

		return "Jigglypuff has slept for " + hours + " hours";
		
	}
	window.zoo = ns;
})(window.zoo || {});