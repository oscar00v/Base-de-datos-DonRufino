// #1 Llamar a la biblioteca express
const express = require('express')

const ProductRoutes = require('./routes/ProductRoutes.js')

const router = require('./api/v2/routes')
const db = require('./db.js');
// #2a Crear una aplicación o instancia de express
const app = express()
const port = process.env.PORT || 3000

// #2b Configurar express para que pueda recibir datos de tipo JSON
app.use(express.json())

// #3 Definir rutas
app.get('/', (req, res) => {
  res.send('hello world╰(*°▽°*)╯')
})

// app.use(router) // Le digo a express que use las rutas
app.use(ProductRoutes)
// #4 Levantar el servidor
app.listen(port, () => {
  console.log(`😁App listening on port ${port} 🚀`)
})