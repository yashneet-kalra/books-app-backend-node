const logger = require('./../../middlewares/middlewares').logger.default;

let connection = require('mysql').createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.CORE_DB
})
connection.connect(function(err) {
    if (err) {
      logger.error('error connecting: MYSQL DB -->' + err.stack);
      return;
    }
    console.info('connected as id ' + connection.threadId);
  });

module.exports = {
    msqlClient: connection,
    closeConnection: connection.end
}