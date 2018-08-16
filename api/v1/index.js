import "babel-polyfill";
import routes from './routes/index';


export default (app) => {
  app.use('/api/v1', routes);
};
