const http = require('http');
const url = require('url');
const query = require('querystring');
const htmlHandler = require('./htmlResponses.js');
const jsonHandler = require('./jsonResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const routes = {
  GET: {
    '/': htmlHandler.getIndex,
    '/style.css': htmlHandler.getCSS,
    '/getBreads': jsonHandler.getBreads,
    '/getRecords': jsonHandler.getRecords,
    '/bundle.js': htmlHandler.getBundle,
    notFound: jsonHandler.notFound,
  },
  POST: {
    '/calculateBolus': jsonHandler.calculateBolus,
  },

};

const parseBody = (request, response, handler) => {
  const body = [];

  request.on('error', (err) => {
    console.dir(err);
    response.statusCode = 400;
    response.end();
  });

  request.on('data', (chunk) => {
    body.push(chunk);
  });

  request.on('end', () => {
    const bodyString = Buffer.concat(body).toString();
    const bodyParams = query.parse(bodyString);

    handler(request, response, bodyParams);
  });
};

// const handlePost = (request, response, parsedUrl) => {
//   if (parsedUrl.pathname === '/calculateBolus') {
//     parseBody(request, response, jsonHandler.calculateBolus(request, response, body));
//     // add blood glucose value
//     // parseBody(request, response,jsonHandler.addBG(request, response));
//   }
// };

// const handleGet = (request, response, parsedUrl) => {
//   if (parsedUrl.pathname === '/style.css') {
//     htmlHandler.getCSS(request, response);
//   } else if (parsedUrl.pathname === '/getBreads') {
//     // add new endpoints, maybe refactor for less code?
//     jsonHandler.getBreads(request, response);
//   } else if (parsedUrl.pathname === '/') {
//     htmlHandler.getIndex(request, response);
//   } else {
//     jsonHandler.notFound(request, response);
//   }
// };

const onRequest = (request, response) => {
  const parsedUrl = url.parse(request.url);

  if (routes.GET[parsedUrl.pathname]) {
    routes.GET[parsedUrl.pathname](request, response);
  } else if (routes.POST[parsedUrl.pathname]) {
    parseBody(request, response, routes.POST[parsedUrl.pathname]);
  } else {
    routes.GET[notFound(request.response)];
  }

  // if (request.method === 'POST') {
  //   handlePost(request, response, parsedUrl);
  // } else {
  //   handleGet(request, response, parsedUrl);
  // }
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on 127.0.0.1: ${port}`);
});
