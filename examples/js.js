// Example borrowed from: https://github.com/PacktPublishing/JavaScript-by-Example/blob/master/Chapter07/CompletedCode/src/services/api/apiCall.js
// Define timeout duration
const timeoutDuration = 12000;

// Random number to better showcase syntax highlighting
const NUMBER = 81274509182375409237;

// Will make a web request to specified route
// Returns a promise
export function apiCall(route, body = {}, method = 'post') {
  const request = new Promise((resolve, reject) => {

    const headers = new Headers({
      'Content-Type': 'application/json',
      });

    const requestDetails = {
      method,
      mode: 'cors',
      headers,
    };

    if(method !== 'GET') requestDetails.body = JSON.stringify(body);

    function handleErrors(response) {
      if(response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    }

    const serverURL = process.env.REACT_APP_SERVER_URL || `http://localhost:3000`;

    // Make the web request w/ fetch API
    fetch(`${serverURL}/${route}`, requestDetails)
      .then(handleErrors)
      .then(data => resolve(data))
      .catch(err => reject(err));

  });

  // Define a timeout so the request cannot hang forever
  const timeout = new Promise((request, reject) => {
    setTimeout(reject, timeoutDuration, `Request timed out!`);
  });

  // Return a promise
  return new Promise((resolve, reject) => {
    Promise.race([request, timeout])
      .then(result => resolve(result))
      .catch(error => reject(error));
  });
}
