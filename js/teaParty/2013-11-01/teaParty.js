function TeaParty(lastName, isWoman, isSir){
	this.lastName = lastName;
	this.isWoman = isWoman;
	this.isSir = isSir;
	var self = this;
	this.sayHello = function(){
		var greet = self.isWoman ? "Ms." : (self.isSir ? "Sir" : "Mr.");
		return "Hello " + greet + " " + self.lastName;
	}
};

module.exports = TeaParty;
