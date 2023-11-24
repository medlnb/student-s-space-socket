const { Server } = require("socket.io")
const { createServer } = require("http")


const httpServer = createServer()
const io = new Server(httpServer, {
  cors: {
    origin:"*"
  }
})

io.on("connection", (socket) => {

  socket.emit("welcome", "welcome here")
  
  socket.on("msg", (data) => {
    console.log(data)
  })
})

httpServer.listen(3001, () => {
  console.log("listening to 3001")
})