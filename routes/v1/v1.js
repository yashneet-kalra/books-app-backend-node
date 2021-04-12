const {express} = require('./../../middlewares/middlewares');
const { route } = require('./users');
const router = express.Router();

const usersRouter = require('./users');

router.use('/users/', usersRouter);

module.exports = router;