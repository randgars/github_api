const Router = require('koa-router')
const bodyParser = require('koa-body')()

const repos = require('../controllers/repos')

const router = new Router()

router.get('/api/repos', repos.getAll)
router.get('/api/repos/:repo/commits', repos.getCommits)

module.exports = router