import { ServerPlugin } from '.'

export const corsPlugin: ServerPlugin = ({
  root,
  app,
  server,
  watcher,
  resolver,
  config
}) => {
  app.use(async (ctx, next) => {
    await next()
    ctx.set('Access-Control-Allow-Origin', '*')
  })
}
