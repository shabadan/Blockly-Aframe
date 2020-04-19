 function Dictionary(){
   var dictionary = {}; // private members
   var numofelem = 0;
   var that = this;

   this.setData = function(key, val) { dictionary[key] = val; numofelem++; }
   this.getData = function(key) { return dictionary[key]; }
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


//
function geoDB () {
	//this.NumOfSolids = 0; // this should coincide with ListOfSolids.length: it will be useful for compsolids when implemented - ListOfSolids.length is used for now
	this.SolidsCounter = 0; // counter of solids created - it only increases - counter for the new Id
	this.NumOfFaces = 0; // this should coincide with the sum of all ListOfFacesId.length for all the solids - decreases if a face is removed
	this.FacesCounter = 0; // counter of faces created - it only increases - counter for the new Id- is a unique identifier for faces
    this.SolidsDict = new Dictionary();
}

geoDB.prototype.AllocateNewSolid = function(solidname, bloburl) {
		try{
			var n=this.SolidsDict.numOfElem();
			this.SolidsCounter++;
			if(solidname==null)
				solidname="Solid"+(this.SolidsCounter);
			//this.ListOfSolids[n]= new SolidItem(solidname,this.SolidsCounter);
			this.SolidsDict.setData(this.SolidsCounter, new SolidItem(solidname,this.SolidsCounter,bloburl));
			//this.NumOfSolids++;
			//console.log ( 'Connecting...' );
			return this.SolidsCounter; //return the solidId
		}catch(err){
			return null;
		}
	};





function SolidItem (displayname, id, theurl) {
		this.DisplayedName = displayname;
		this.SolidId = id;
		//this.ListOfFacesId = new Dictionary();
		this.url = theurl;
}


 //////////////////////////////////
/*
function FaceItem (displayname, id) {
		this.DisplayedName = displayname;
		this.FaceId = id;

}
*/

 ///////////////////////////

var modeldb = new geoDB();