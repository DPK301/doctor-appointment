const jsonServer = require('json-server')
const doctorServer = jsonServer.create()
const router = jsonServer.router('db.json')
const middleware = jsonServer.defaults()
const port = 3001
doctorServer.use(middleware)
doctorServer.use(router)
doctorServer.listen(port,()=>{console.log("rest server listening on port ",+port);})