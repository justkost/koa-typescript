import { NODE_ENV, PORT } from 'src/config'

class MainController {
  /**
   * Route '/'
   */
  static async home(ctx) {
    ctx.body = {
      port: PORT,
      node_env: NODE_ENV,
    }
  }
}

export default MainController
