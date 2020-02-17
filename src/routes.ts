import * as Router from 'koa-router'
import MainController from 'src/controllers/MainController'

const router = new Router()

router.get('/', MainController.home)

export default router
