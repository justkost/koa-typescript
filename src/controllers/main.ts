import { NODE_ENV, PORT } from 'src/config'

/**
 * Route '/'
 */
export async function main(ctx) {
  ctx.body = {
    port: PORT,
    node_env: NODE_ENV,
  }
}
