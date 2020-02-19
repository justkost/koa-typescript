import { RouterContext } from 'koa-router'
import * as Koa from 'koa'

function wrapper(): Koa.Middleware {
  return errorHandler
}

async function errorHandler(ctx: RouterContext, next) {
  try {
    await next()
    const status = ctx.status || 404
    if (status === 404) {
      ctx.throw(404)
    }
  } catch (err) {
    ctx.status = err.status || 500
    ctx.body = { message: err.message }
  }
}

export default wrapper
