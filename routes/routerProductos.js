const express= require('express')
const rutas = express.Router()
const {nuevoProducto,consultaProducto,actualizaProducto,borrarProducto}=require('../controllers/controlerProductos.js')

//disponible para usuarios y administradores
// Me permite listar todos los productos disponibles ó un producto por su id 
//el signo de pregunta hace que no sea obligatorio
rutas.get('/:id?',consultaProducto)

//- Para incorporar productos al listado (disponible para administradores)
rutas.post('/',nuevoProducto)
//Actualiza un producto por su id (disponible para administradores)
rutas.put('/:id',actualizaProducto)

//Borra un producto por su id (disponible para administradores)
rutas.delete('/:id',borrarProducto)


module.exports = rutas