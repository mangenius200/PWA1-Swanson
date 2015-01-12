// 14 total errors
//make the function
(function(){
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results");
		searchInput = document.forms[0].search;
		currentSearch = '';
	
	// Validates search query
	var validate = function(query){
		
		// Trim whitespace from start and end of search query
		while(query.charAt(0) === " "){//while loop
        }
        // loop through the entire function
		while(query.charAt(0) === " "){//while loop
        query = query.substring(1, query.length);
		};
         //going through the length of the function
		while(query.charAt(query.length-1) === ""){
			query = query.substring(0, query.length-1);
            }
		
		// Check search length, must have 3 characters
		if(query.length < 3){
			alert("Your search query is too small, try again.");//alert the user
			
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();
			return;//return the result
		};
		// search for the parameter query
		search(query);
	};
	
	// Finds search matches
	var search = function(query){
		
		// split the user's search query string into an array
		var queryArray = query.join(" ");
		
		// array to store matched results from database.js
		var results = [];

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++){
		
			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			var dbTitleEnd = db[i].indexOf('|');
			var dbitem = db[i].tolowercase().substring(0, dbTitleEnd);
			
			// loop through the user's search query words
			// save a lowercase variable of the search keyword
			for(var ii=0, jj=queryArray.length; ii<jj; ii++){
				var qitem = queryArray[ii].tolowercase();//allow for lower case inputs
				
				// is the keyword anywhere in the video title?
				// If a match is found, push full db[i] into results array
				var compare = dbitem.indexOf(qitem);
				if(compare !== -1){ //compare function
					results.push(db[i]);//store results
				};
			;
		;
		
		results.sort();//sort results
		
		// Check that matches were found, and run output functions
		if(results.length = 0){
			noMatch();//just in case there is no match
		}else{
			showMatches(results);//show results
		};
	};
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){
		var html = ''+// declare variable
			'<p>No Results found.</p>'+//just in case no variable is found
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'//look for javascript
		;
		resultsDIV.innerHTML = html;//store the results
	};
	
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>', //make the html
			title, //make a title
			url//make a url
		;
		
		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){//make a for loop in the function
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');
			title = results[i].subString(0, titleEnd);
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function(){
		var query = searchInput.value;//make variable
		validate(query); //call the function

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
		return false;//return the value
	;

})();

