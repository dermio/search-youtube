const SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';
const MY_API_KEY = 'AIzaSyDf9VtvE5wTSJyzYAfmWV6GJd_vzSa3r2w';


function renderResult() {
  console.log('renderResult() was called');

  // render each individual video with the
  // appropriate HTML markup
}


function displaySearchResults(data) {
	console.log('displaySearchResults() was called');

	// call renderResult() for each relevant
	// data item that should be rendered.
	// Save this result to a variable.
	renderResult();

	console.log(data);

	// Finally return the result variable
	// so it can rendered in the HTML
	// in the results section.

	console.log('render all the results in HTML');
}

function getDataFromApi(searchTerm, callback) {
	console.log('getDataFromApi() was called');

	// using the search values,
	// perform the ajax() or getJSON() request
	// with the YouTube API key

	// when get data back ajax() or getJSON(),
	// ajax() or getJSON() will invoke the callback function
	// e.g. getJSON(url, query, callback)
	// the callback is displaySearchResults()

	// snippet contains the thumbnails
	// items.snippet.thumbnails.medium.url


	let query = {
		part: 'snippet', // part: 'snippet' required by YouTube data API
		key: MY_API_KEY,
		q: searchTerm,
	};

	// console.log(query)
	// getJSON() or ajax() will call displaySearchResults();

	$.getJSON(SEARCH_URL, query, callback);
}


function watchSubmit() {
	$('#searchForm').on('submit', function (event) {
		console.log('watchSubmit() was called')
		event.preventDefault();

		// use the data from the Form submission
		// to call another function that handles
		// API request via getJSON() or ajax()

		let queryTarget = $(this).find('.js-query');
		let queryAnswer = queryTarget.val();
		console.log(queryAnswer);
		// clear out the queryTarget field
		queryTarget.val('');

		getDataFromApi(queryAnswer, displaySearchResults);
	});
}

$(watchSubmit);

///////////////
