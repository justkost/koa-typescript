import { NODE_ENV, PORT } from 'src/config'
import { RouterContext } from 'koa-router'

class MainController {
  /**
   * GET /
   */
  static async home(ctx: RouterContext) {
    ctx.body = {
      port: PORT,
      node_env: NODE_ENV,
    }
  }
}

export default MainController
