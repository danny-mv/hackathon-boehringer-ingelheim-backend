import { Router } from 'express'
import * as glob from 'glob'

import * as path from 'path'

function register(routePath: string, router: Router) {
  // eslint-disable-next-line import/no-dynamic-require, global-require
  const routeModule = require(routePath)
  if (typeof routeModule === 'function') {
    routeModule(router)
  } else if (routeModule && typeof routeModule.register === 'function') {
    routeModule.register(router)
  } else {
    // eslint-disable-next-line no-console
    console.error(`No register function found in module ${routePath}`)
  }
}
export function registerRoutes(router: Router): void {
  const normalizedDirname = path.normalize(__dirname).replace(/\\/g, '/')
  const routes = glob.sync(`${normalizedDirname}/**/*.route.@(js|ts)`)
  routes.map((route) => register(route, router))
}
