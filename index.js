const SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';
const MY_API_KEY = 'AIzaSyDf9VtvE5wTSJyzYAfmWV6GJd_vzSa3r2w';


function renderResult() {
  console.log('renderResult() was called');

  // render each individual video with the
  // appropriate HTML markup
}


function displaySearchResults() {
	console.log('displaySearchResults() was called');

	// call renderResult() for each relevant
	// data item that should be rendered.
	// Save this result to a variable.
	renderResult();

	// Finally return the result variable
	// so it can rendered in the HTML
	// in the results section.

	console.log('render all the results in HTML');
}

function getDataFromApi() {
	console.log('getDataFromApi() was called');

	// using the search values,
	// perform the ajax() or getJSON() request
	// with the YouTube API key

	// when get Data back from call the function
	// that will render the results as HTML

	displaySearchResults();
}


function watchSubmit() {
	$('#searchForm').on('submit', function (event) {
		console.log('watchSubmit() was called')
		event.preventDefault();

		// use the data from the Form submission
		// to call another function that handles
		// API request via getJSON() or ajax()
		getDataFromApi();
	});
}

$(watchSubmit);


////

console.log(SEARCH_URL);
console.log(MY_API_KEY);