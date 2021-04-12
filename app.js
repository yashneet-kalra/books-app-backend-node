// import all the dependencies
const routes = require('./routes/routes');
const {app} = require('./dependencies/dependedncies');
const healthRouter = require('./routes/health');
// health api for aplication usage
app.use('/health', healthRouter)
// for all other api routes
app.use('/api', routes);

module.exports = app;