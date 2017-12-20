const Router = require('koa-router')
const bodyParser = require('koa-body')()

const repositories = require('../controllers/repositories')

const router = new Router()

router.get('/api/repositories', bodyParser, repositories.getAll)

module.exports = router