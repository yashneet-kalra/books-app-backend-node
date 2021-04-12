const path = require('path');

const httpLogger = require('./../middlewares/middlewares').logger.winstonHttpLogger;
const {compression, express,cookieParser} = require('./../middlewares/middlewares');
// setup express dependencies
const app = express();
// setup initials
app.use(compression());
app.use(httpLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './../public')));
// use reverse proxy to redirect all requests starting from /api

function consoleForMiddleWare(req,res,next) {
    console.log('filtered api ', req.originalUrl);
    console.log('redirecting to ', uplinkServerAddress);
    next();
}
// app.use(apiFilterExpression, consoleForMiddleWare, httpProxy(uplinkServerAddress, true, httpProxyReqPathResolver));

module.exports = {
    app,
}