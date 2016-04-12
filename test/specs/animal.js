(function () {
	"use strict";

	var assert = chai.assert;

	suite('Animal', function(){   //create a test suite

		test("age calculator is working", function(){

			var bob = new window.zoo.Animal("bob", "march 7, 2000");  //executing Person Function  we didn't use ns here.......Consturctor functions return the new thing that they created

			assert.ok( bob, "bob exists");
			assert.strictEqual ( bob.age(), 16, "bob is 16 years old");
			// assert.ok( bob, "bob exists");
			// assert.ok( bob instanceof window.work.Person, "person objects are from ns.Person");
			// assert.strictEqual(bob.name,  "bob", "the name should be assinged to the object");
			// assert.strictEqual(bob.salary, 30000, "the salary sould be assigned to the object");
			// assert.ok( bob.hireDate instanceof Date, "the hireDate is a Date object");
			// assert.ok( (Date.now() - bob.hireDate.getTime()) < 50, "auto-assigned date is approximitley correct" ); //do this to check his hire date, cuz it won't match newDate.
		});
		test("pikachu can give birth", function(){

			var job = new window.zoo.Pikachu("job" );

			var birth = job.giveBirth("job")
			assert.ok(birth instanceof window.zoo.Pikachu, "job exists");
			assert.strictEqual(birth.name, "job", "name is correct");
		});

		test("pikachu can shock fools", function(){

			var job = new window.zoo.Pikachu("job" );
			assert.strictEqual(job.shockFools(2), "Pikachu has shocked 2 fools", "pikachu can shock");

		});

		test("jiggly puff sleeps", function(){

			var jigg = new window.zoo.Jigglypuff("jigg" );
			assert.strictEqual(jigg.sleep(10), "Jigglypuff has slept for 10 hours")
		});

		test("Jigglypuff can give birth", function(){

			var jigg = new window.zoo.Jigglypuff("jigg" );

			assert.ok(jigg.gettingJigglyWitIt("jigg") instanceof window.zoo.Jigglypuff, "He does it!");
			
		});

		// test("raise method works as expected", function(){

		// 	var bob = new window.work.Person("bob", 30000);  //executing Person Function  we didn't use ns here.......Consturctor functions return the new thing that they created
 			
 	// 		assert.ok(bob, "bob exists");
		// 	assert.ok( bob instanceof window.work.Person, "person objects are from ns.Person");
		// 	assert.strictEqual(bob.salary, 30000, "the salary sould be assigned to the object");

		// 	bob.raise(10);

		// 	assert.strictEqual( bob.salary, (30000 * 1.1), "ensure correct salary after raise");
		// });


	});


})();