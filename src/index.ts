import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as logger from 'koa-logger'
import * as json from 'koa-json'
import * as bodyParser from 'koa-bodyparser'
import { PORT } from './config'

const app = new Koa()
const router = new Router()

// Middlewares
app.use(json())
app.use(logger())
app.use(bodyParser())
app.use(router.routes()).use(router.allowedMethods())

router.get('/', async (ctx, next) => {
  ctx.body = { status: 'ok' }
})

app.listen(PORT, () => {
  console.log(`STARTED! http://localhost:${PORT}`)
})
