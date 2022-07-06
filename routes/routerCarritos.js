const express= require('express')
const rutas = express.Router()

// Me permite listar todos los productos guardados en el carrito
rutas.get('/:id/productos',(req,res)=>{
	res.send('todo oki')
})

// Crea un carrito y devuelve su id
rutas.post('/',(req,res)=>{
	res.send('todo oki')
})

//Para incorporar productos al carrito por su id de producto
rutas.post('/:id/productos',(req,res)=>{
	res.send('todo oki')
})

//- Vacía un carrito y lo elimina.

rutas.delete('/:id',(req,res)=>{
	res.send('todo oki')
})

// Eliminar un producto del carrito por su id de carrito y de producto

rutas.delete('/:id/productos/:id_prod',(req,res)=>{
	res.send('todo oki')
})


module.exports = rutas