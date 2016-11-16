"use strict";


//Plant definition:
let Plant = function () {
	this.height = null;


};

//Tree definition:
let Tree = function () {
	this.branches = null;
	this.growCount = 0;
	this.count = 0;

};

//tree is a type of plant:
Tree.prototype = new Plant();


//plant functions:
Plant.prototype.increaseHeight = function (growth) {
	this.height += growth;

};

Plant.prototype.decreaseHeight = function (shrink) {
	 this.height = Plant.height - shrink;

};

//tree-specific functions:
Tree.prototype.grow = function(growthRate) {

	this.height+= growthRate;
	this.countBranches(growthRate);
	this.growCount++;
};

Tree.prototype.trim = function(trimRate) {
	if (this.growCount % 10 === 0) {
	this.height-= trimRate;
	this.branches-= 1;
	}
};

Tree.prototype.countBranches = function (growthRate) {

	 let branchout = Math.ceil((10 / growthRate));
	 if (this.height % branchout === 0) {
	 	this.branches++;
	 }

	
};

//create instance of pear tree:
let pearTree = new Tree();
pearTree.height = 24;
pearTree.branches = 1;
console.log("pears",pearTree );

//create instance of oak tree:
let oakTree = new Tree();
oakTree.height = 40;
oakTree.branches = 4;
console.log("oak",oakTree );


//Every second, increase the height the pear tree by some integer value:
//print to DOM oak tree height and number of branches:
let Orchard = window.setInterval(function() { 
	pearTree.grow(2);
	pearTree.trim(1);
	pearTree.countBranches();
	if (pearTree.growCount === 30) {
		window.clearInterval(Orchard);
	}
	document.getElementById("pear_tree").innerHTML = `Pear tree is now ${pearTree.height} inches with ${pearTree.branches} branches.`;
	}, 1000);


// window.setInterval(function() { 
// 	pearTree.countBranches();
// console.log("what is growth rate??", pearTree.growthRate);
	
// },(10 / pearTree.growthRate))

//Every second increase the height the oak tree by some integer value that is larger than pear tree:

//print to DOM oak tree height and number of branches:

let Orchy = window.setInterval(function() { 
	oakTree.grow(4);
	oakTree.trim(2);
	oakTree.countBranches();
	if (oakTree.growCount === 30) {
		window.clearInterval(Orchy);
	}

	document.getElementById("oak_tree").innerHTML = `Oak tree is now ${oakTree.height} inches with ${oakTree.branches} branches.`;
	}, 1000);
	
