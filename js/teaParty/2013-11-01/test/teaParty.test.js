var assert = require("assert");
var TeaParty = require("../teaParty.js");
function sayHelloTests(){
	it("George Orwell is a man", function(){
		var georgeOrwell = new TeaParty("Orwell", false, false);
		assert.equal("Hello Mr. Orwell", georgeOrwell.sayHello());
	});
	
	it("Jane Austen is a woman", function(){
		var janeAusten = new TeaParty("Austen", true, false);
		assert.equal("Hello Ms. Austen", janeAusten.sayHello());
	});
	
	it("Isaac Newton is a knight", function(){
		var isaacNewton = new TeaParty("Newton", false, true);
		assert.equal(isaacNewton.sayHello(),"Hello Sir Newton" );
	});
};

function runAllTests(){
	describe("TeaParty", function(){
		describe("#sayHello", sayHelloTests);
	});
}

exports.runTests = runAllTests; 
