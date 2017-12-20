const Koa = require('koa')
const logger = require('koa-morgan')
const cors = require('koa2-cors')
const config = require('./config')

const routes = require('./routes')

const app = new Koa()

app.use(logger('tiny'))
app.use(cors({
  origin: '*',
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type'],
}))

app.use(routes.routes())

app.listen(config.server.port)