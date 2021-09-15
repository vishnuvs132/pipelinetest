import express from 'express'
import { configData } from './config'
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

app.set("port", configData.port)

const server = app.listen(app.get("port"), function () {
  console.log(`Server started! At http://${process.env['HOSTNAME'] || 'localhost'}:${app.get("port")}`)
})

function onError (error: NodeJS.ErrnoException) {
  if (error.syscall !== "listen") {
    throw error
  }
  const port = app.get("port")
  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges")
      process.exit(1)
    case "EADDRINUSE":
      console.error(bind + " is already in use")
      process.exit(1)
    default:
      throw error
  }
}
server.on("error", onError)
