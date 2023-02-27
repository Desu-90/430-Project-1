const breads = {
  bagels: [
    {
      crB: {
        name: 'Cinammon Raisin Bagel, toasted',
        servingS: '1 bagel',
        carbs: '65 g',
        fiber: '3 g',
        fat: '2.0 g',
        protein: '12 g',
        calories: '320',
      },
      eggB: {
        name: 'Egg Bagel',
        servingS: '1 large bagel',
        carbs: '69 g',
        fiber: '3 g',
        fat: '3.0 g',
        protein: '14 g',
        calories: '360',
      },
      plainB: {
        name: 'Plain Bagel, toasted',
        servingS: '1 bagel',
        carbs: '48 g',
        fiber: '2 g',
        fat: '1.5 g',
        protein: '9 g',
        calories: '240',
      },
    },
  ],
  bread: [
    {
      bananaB: {
        name: 'Banana Bread',
        servingS: '1 oz',
        carbs: '15 g',
        fiber: '0 g',
        fat: '3.0 g',
        protein: '1 g',
        calories: '90',
      },
      bostonBrownB: {
        name: 'Boston Brown Bread',
        servingS: '1 slice',
        carbs: '19 g',
        fiber: '2 g',
        fat: '0.5 g',
        protein: '2 g',
        calories: '90',
      },
      whiteB: {
        name: 'White Bread',
        servingS: '1 oz',
        carbs: '14 g',
        fiber: 'less than 1 g',
        fat: '1.0 g',
        protein: '2 g',
        calories: '80',
      },
    },
  ],
};

const bgRecord = {};

const respondJSON = (request, response, status, object) => {
  response.writeHead(status, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify(object));
  response.end();
};

const respondJSONMeta = (request, response, status) => {
  response.writeHead(status, { 'Content-Type': 'application/json' });
  response.end();
};

const getRecords = (request, response) => {
  const responseJSON = {
    bgRecord,
  };
  respondJSON(request, response, 200, responseJSON);
};

const getBreads = (request, response) => {
  const responseJSON = {
    breads,
  };
  respondJSON(request, response, 200, responseJSON);
};

// const addBG = (request, response, body) => {
//   // default json message
//   const responseJSON = {
//     message: 'Please enter your current Glucose value',
//   };

//   if (!body.glucose) {
//     responseJSON.id = 'missingParams';
//     return respondJSON(request, response, 400, responseJSON);
//   }

//   let responseCode = 204;

//   // If the user doesn't exist yet
//   if (!users[body.glucose]) {
//     responseCode = 201;
//     bgRecord[body.glucose] = {};
//   }

//   bgRecord[body.glucose].glucose = body.glucose;

//   if (responseCode === 201) {
//     responseJSON.message = 'Glucose added';
//     return respondJSON(request, response, responseCode, responseJSON);
//   }

//   return respondJSONMeta(request, response, responseCode);
// };

const notFound = (request, response) => {
  const responseJSON = {
    message: 'The page you are looking for was not found',
    id: 'notFound',
  };

  respondJSON(request, response, 404, responseJSON);
};

module.exports = {
  notFound,
  getBreads,
  getRecords,
  // addBG
};
