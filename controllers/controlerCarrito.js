const nuevoCarrito = async (req,res)=>{
	const timestamp = Date.now()
	const {body:{nombre, descripcion, codigo, foto, precio, stock}} = req
	const data = await req.modelsCarrito.save({timestamp, nombre, descripcion, codigo, foto, precio, stock})
	res.json(data)
}

module.exports = {nuevoCarrito}

