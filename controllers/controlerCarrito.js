const nuevoCarrito = async (req,res)=>{
	const timestamp = Date.now()
	const productos = []
	const data = await req.modelsCarritos.save({timestamp, productos})
	res.json(data)
}
const borraCarrito = async (req,res)=>{
	const data = await req.modelsCarritos.borrarById(parseInt(req.params.id))
	data.message ? res.json({error:data.message}) : res.json(data)
}
const nuevoProdCarrito = async (req,res)=>{
	const {params:{id}} = req
	const producto = await req.modelsProductos.getById(parseInt(id))
	const carrito = await req.modelsCarritos.getById(1)//fuerzo al primer carrito
	if(producto.message){
		res.json({error:producto.message})
	}else{
		carrito[0].productos.push(...producto)
		const data = await req.modelsCarritos.updateById(...carrito)
		res.json(data)

	}
	// const data = await req.modelsCarritos.save({timestamp, productos})
}

const obtenerProdCarrito = async (req,res)=>{
	const {params:{id}} = req
	const carrito = await req.modelsCarritos.getById(parseInt(id))
	carrito.message ? res.status(401).json({msj:carrito.message}) : res.json(carrito[0].productos)
}

module.exports = {nuevoCarrito,borraCarrito,nuevoProdCarrito,obtenerProdCarrito}

