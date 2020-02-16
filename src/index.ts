import * as Koa from 'koa'
import * as logger from 'koa-logger'
import * as json from 'koa-json'
import * as bodyParser from 'koa-bodyparser'
import { PORT } from './config'
import router from './routes'

const app = new Koa()

app.use(json())
app.use(logger())
app.use(bodyParser())
app.use(router.routes()).use(router.allowedMethods())

app.listen(PORT, () => {
  console.log(`STARTED! http://localhost:${PORT}`)
})
