import 'module-alias/register'
import * as Koa from 'koa'
import * as logger from 'koa-logger'
import * as json from 'koa-json'
import * as bodyParser from 'koa-bodyparser'
import { PORT, NODE_ENV } from 'src/config'
import router from 'src/routes'

const app = new Koa()

app.use(json())
app.use(logger())
app.use(bodyParser())
app.use(router.routes()).use(router.allowedMethods())

if (NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`STARTED! http://localhost:${PORT}`)
  })
}

export default app
