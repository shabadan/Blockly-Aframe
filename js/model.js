// getElementById
function $id(id) {
	return document.getElementById(id);
}

//
// output information
function Output(msg) {
	/*
	var m = $id("messages");
	m.innerHTML = m.innerHTML + msg;
	*/
	var m = $id("modellist");
	var node = document.createElement("LI");                 // Create a <li> node
	var textnode = document.createTextNode(msg);         // Create a text node
	node.appendChild(textnode);                              // Append the text to <li>
	m.appendChild(node);
}

// call initialization file
if (window.File && window.FileList && window.FileReader) {
	Init();
}

//
// initialize
function Init() {

	var fileselect = $id("fileselect"),
		filedrag = $id("filedrag"),
		submitbutton = $id("submitbutton");

	// file select
	fileselect.addEventListener("change", FileSelectHandler, false);

	// is XHR2 available?
	var xhr = new XMLHttpRequest();
	if (xhr.upload) {
	
		// file drop
		filedrag.addEventListener("dragover", FileDragHover, false);
		filedrag.addEventListener("dragleave", FileDragHover, false);
		filedrag.addEventListener("drop", FileSelectHandler, false);
		filedrag.style.display = "block";
		
		// remove submit button
		submitbutton.style.display = "none";
	}

}

// file drag hover
function FileDragHover(e) {
	e.stopPropagation();
	e.preventDefault();
	e.target.className = (e.type == "dragover" ? "hover" : "");
}



// file selection
function FileSelectHandler(e) {

	// cancel event and hover styling
	FileDragHover(e);

	// fetch FileList object
	var files = e.target.files || e.dataTransfer.files;

	// process all File objects
	for (var i = 0, f; f = files[i]; i++) {
		ParseFile(f);
		//SaveFile2LocalStorage(file)
	}

}

function ParseFile(file) {
	/*
	Output(
		"<p>File information: <strong>" + file.name +
		"</strong> type: <strong>" + file.type +
		"</strong> size: <strong>" + file.size +
		"</strong> bytes</p>"
	);
	*/
	
	/*
	if (!f.type.match('.gltf')) {
        continue;
      }
*/
      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
			/*
          // Render thumbnail.
          var span = document.createElement('span');
          span.innerHTML = ['<img class="thumb" src="', e.target.result,
                            '" title="', escape(theFile.name), '"/>'].join('');
			document.getElementById('list').insertBefore(span, null);
			*/
			var filename = escape(theFile.name);
		  if (FileDB.setData(filename, URL.createObjectURL(theFile))) {
			  Output(escape(theFile.name));
		  }
		  //modeldb.AllocateNewSolid(theFile.name, e.target.result, );
		         
        };
      })(file);

      // Read in the image file as a data URL.
      reader.readAsDataURL(file);
	
	
}


function SaveFile2LocalStorage(file) {
      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
			/*
          // Render thumbnail.
          var span = document.createElement('span');
          span.innerHTML = ['<img class="thumb" src="', e.target.result,
                            '" title="', escape(theFile.name), '"/>'].join('');
			document.getElementById('list').insertBefore(span, null);
			*/
		  modeldb.AllocateNewSolid(theFile.name, e.target.result);
		  Output(escape(theFile.name)+':'+URL.createObjectURL(theFile));       
        };
      })(file);

      // Read in the image file as a data URL.
      reader.readAsDataURL(file);
	
	
}