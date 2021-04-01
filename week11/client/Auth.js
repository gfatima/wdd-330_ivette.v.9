import Auth from './auth.js';
//Auth class which provides basic JWT based authentication for our app.
// Requires: access to the makeRequest  functions
  // if a token was passed in we should send it on.
  if (token) {
    options.headers.Authorization = `Bearer ${token}`;
  }
  