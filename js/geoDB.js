 function Dictionary(){
   var dictionary = {}; // private members
   var numofelem = 0;
   var that = this;

   this.setData = function(key, val) { 
		if (key in dictionary) {
			alert("A file with the same filename is already loaded");
			return false; // if a file with the same filename already exists the (key,value) pair is not added
		}
		else {
			dictionary[key] = val;
			numofelem++;
			return true; // if succeded
		}
   }
   this.getData = function(key) { if (key in dictionary) {
															return dictionary[key]; }
								  else { return false; }
   }
   this.numOfElem = function () { //privileged method: can access private properties
        return numofelem;
    };
	this.Enumerate = function () {
		var thearray =[];
		for (var key in dictionary) {
			if (dictionary.hasOwnProperty(key)) {
				thearray.push(key);
			}
		}
		return thearray;
	};
}


var FileDB = new Dictionary();