const nuevoProducto = async (req,res)=>{
	const timestamp = Date.now()
	const {body:{nombre, descripcion, codigo, foto, precio, stock}} = req
	const data = await req.modelsProductos.save({timestamp, nombre, descripcion, codigo, foto, precio, stock})
	res.json(data)
}
const consultaProducto = async (req,res)=>{
	const data = await req.modelsProductos.getById(req.params.id)
	data.message ? res.status(404).json({Error:data.message}) : res.json(data)
}
const actualizaProducto = async (req,res)=>{
	req.body = {...req.body,id:parseInt(req.params.id)}
	const data = await req.modelsProductos.updateById(req.body)
	data.message ? res.status(404).json({Error:data.message}) : res.json(data)
}
const borrarProducto = async (req,res)=>{
	const data = await req.modelsProductos.borrarById(parseInt(req.params.id))
	data.message ? res.status(404).json({Error:data.message}) : res.json(data)
}


module.exports = {nuevoProducto,consultaProducto,actualizaProducto,borrarProducto}