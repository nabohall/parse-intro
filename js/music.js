// Initialize Parse app
Parse.initialize('Uz5sme1RZWmlpu0Dgj7CGurRozym9fCIzhs3py8n','oTapNtnUcgymgkkjgApKV5abDwtP8aavly1utDTm');

// Create a new sub-class of the Parse.Object, with name "Music"
var Music = Parse.Object.extend('Music');

// // Create a new instance of your Music class 
// var musicItem = new Music();

// // Set a property 'band' equal to a band name
// var bandName = $('#band-name').val();
// musicItem.set('band', bandName);

// // Set a property 'website' equal to the band's website
// var urlForm = $('#url').val();
// musicItem.set('website', urlForm);
    
// // Set a property 'song' equal to a song
// var songForm = $('#song').val();
// musicItem.set('song', songForm);

// // Save your instance of your song -- and go see it on parse.com!
// musicItem.save();
// musicItem.save();
// musicItem.save();
// musicItem.save();
// musicItem.save();
// musicItem.save();
// musicItem.save();

// Click event when form is submitted
$('form').submit(function() {

	// Create a new instance of your Music class 


	// For each input element, set a property of your new instance equal to the input's value


	// After setting each property, save your new instance back to your database

	var musicItem = new Music();

	$(this).find('input').each(function() {
		musicItem.set($(this).attr('id'), $(this).val());
		$(this).val('');
	});

	// var bandName = $('#band-name').val();
	// musicItem.set('band', bandName);


	// var urlForm = $('#url').val();
	// musicItem.set('website', urlForm);
	    

	// var songForm = $('#song').val();
	// musicItem.set('song', songForm);

	musicItem.save();

	// $('#band-name').val('');
	// $('#website').val('');
	// $('#song').val('');
	return false
})


// Write a function to get data
var getData = function() {
	

	// Set up a new query for our Music class


	// Set a parameter for your query -- where the website property isn't missing


	/* Execute the query using ".find".  When successful:
	    - Pass the returned data into your buildList function
	*/
}

// A function to build your list
var buildList = function(data) {
	// Empty out your unordered list
	
	// Loop through your data, and pass each element to the addItem function

}


// This function takes in an item, adds it to the screen
var addItem = function(item) {
	// Get parameters (website, band, song) from the data item passed to the function

	
	// Append li that includes text from the data item


	
	// Time pending, create a button that removes the data item on click
	
}

// Call your getData function when the page loads


