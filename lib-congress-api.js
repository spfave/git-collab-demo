// VARIABLES
const congressLibUrl = "https://www.loc.gov/"; // + fo=json for JSON return
const congressLibUrlEnd = "fo=json&c=1";

// const testUrl = "/search-results.html?q=dogs&format=";
const testUrl = "/search-results.html?q=dogs&format=photos";

// Get search query parameters
const genSearchQueryURL = () => {
  // const queryString = location.search;
  const queryString = testUrl;
  const queryTerms = queryString.split(/=|&/);
  const querySubject = queryTerms[1];
  const queryFormat = queryTerms[3];
  // console.log(queryTerms);
  // console.log(querySubject);
  // console.log(queryFormat);

  // Generate query search string url to pass to API
  let searchString;
  if (queryFormat && querySubject) {
    searchString = `${congressLibUrl}${queryFormat}/?q=${querySubject}&${congressLibUrlEnd}`;
  } else if (querySubject) {
    searchString = `${congressLibUrl}search?q=${querySubject}&${congressLibUrlEnd}`;
  } else {
    alert("Invalid search");
    return;
  }

  searchLibCongress(searchString);
};

// Perform library of Congress API request call
const searchLibCongress = (searchQ) => {
  //
  fetch(searchQ).then((response) => {
    if (response.ok) {
      response.json().then((data) => {
        console.log(data);
      });
    } else {
    }
  });
};

// TESTING
genSearchQueryURL();
