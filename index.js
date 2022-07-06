const express = require('express')
const app = express()
const routerProductos = require('./routes/routerProductos.js')
const routerCarritos = require('./routes/routerCarritos.js')
const modelsProductos = require('./models/productos.js')
const modelsCarritos = require('./models/carritos.js')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use((req,res,next)=>{
	// const administrador = true
	// req.administrador = administrador
	req.modelsProductos = modelsProductos
	req.modelsCarritos = modelsCarritos
	next()
})

app.use('/api/productos',routerProductos)
app.use('/api/carritos',routerCarritos)



app.listen('8080',()=>{
	console.log('escuchando todo oki')
})