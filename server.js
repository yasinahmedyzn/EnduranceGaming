const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// app.get('/hello/:name', (req, res) => {
//   res.send('Hello World!'+ req.params.name)
//   // res.status(500)
//   // res.json({"yasin":25})
// })
app.use(express.static(path.join(__dirname, "static")))


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
