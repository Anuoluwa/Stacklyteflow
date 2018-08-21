import express from 'express';
import expressApiVersioning from 'express-api-versioning';
import path from 'path';


const app = express();

app.use(expressApiVersioning({
  apiPath: path.join(__dirname, './api'), // absolute path to the api directory
  test: /\/api\/(v[0-9]+).*/, // regular expression to get the version number from the url
  entryPoint: 'index.js', // entry point exports a function which takes an instance of express as parameter.
  instance: app, // passes an instance of express to the entry point
}, (error, req, res, next) => {
  if (error && error.code === 104) {
    //  require('./UI/index').default(app);
    res.status(200).send({ message: 'Welcome to the client side' });
  }
  if (error && error.code !== 104) {
    //  require('./UI/index').default(app);
    res.status(500).send({ message: error.message });
  }
  /* eslint-disable no-unreachable */
  next();
  /* eslint-enable */
}));

export default app;
