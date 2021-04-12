var express = require('./../../middlewares/middlewares').express;
var router = express.Router();
const logger = require('./../../middlewares/middlewares').logger.default;
const {msqlClient} = require('./../../dependencies/utils/mySql')
/* GET users listing. */
router.get('/', function(req, res) {
  logger.info('sending response from /users api');
  res.send('respond with a resource');
});

router.post('/register', (req, res) => {
  const {username, password} = req.body
  if (!username || !password) {
    res.status(400).send({
      ok: false, status : 400, err_code: 'ERR_INPUT', message: 'Either of username or password is not provided'
    })
    return
  }
  // add user in the database
  msqlClient.query(`insert into Users (username, password) values ('${username}', '${password}')`, (err, results, _fields) => {
    logger.info('error --> ', err);
    if (err) {
      res.status(400).send({
        ok: false, status: 400, 
        err_code: 'ERROR', message: err.toString()
      })
      return
    }
    console.log(results);
    res.status(200).send({
      ok: true, status: 200, message: 'User added successfully!'
    })
  })
})

router.post('/login', (req, res) => {
  const {username, password} = req.body
  if (!username || !password) {
    res.status(400).send({
      ok: false, status : 400, err_code: 'ERR_INPUT', message: 'Either of username or password is not provided'
    })
    return
  }
  // add user in the database
  msqlClient.query(`select * from Users where username='${username}' and password='${password}' limit 1`, (err, results, _fields) => {
    logger.info('error --> ', err);
    if (err) {
      res.status(400).send({
        ok: false, status: 400, 
        err_code: 'ERROR', message: err.toString()
      })
      return
    }
    if (!results[0]) {
      res.status(404).send({
        ok: false, status: 404, err_code: 'NOT_FOUND', message: 'User not found by given combination of username and password!'
      })
      return
    }
    res.status(200).send({
      ok: true, status: 200, data: results[0] || null
    })
  })
})

module.exports = router;
