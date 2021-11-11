//Difference between axios and fetch | Make the HTTP request GET() | get the status code and status message
//Separate by each link
//Resolve problem 'UnhandledPromiseRejectionWarning';

const axios = require("axios").default;

const validate = (links) => {
  links.map((obj) => {
    axios
      .get(obj.href)
      .then((response) => {
				obj.status = response.status;
				obj.message = response.statusText;
				console.log(obj);
      })
      .catch((error) => {
				obj.status = error.response.status;
				console.log(obj);
      });
  });
};

exports.validate = validate;

/* status: 200,
  statusText: 'OK' */
