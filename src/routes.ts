import * as Router from 'koa-router'
import { main } from 'src/controllers/main'

const router = new Router()

router.get('/', main)

export default router
