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
		console.log(producto)
		carrito[0].productos.push(...producto)
		const data = await req.modelsCarritos.updateById(...carrito)
		res.json(data)

	}
}
const obtenerProdCarrito = async (req,res)=>{
	const {params:{id}} = req
	const carrito = await req.modelsCarritos.getById(parseInt(id))
	carrito.message ? res.status(401).json({msj:carrito.message}) : res.json(carrito[0].productos)
}
const borraProdCarrito = async (req,res)=>{
	const {params:{id,id_prod}} = req
	const carrito = await req.modelsCarritos.getById(parseInt(id))
	if(carrito.message){
		res.status(401).json({msj:carrito.message})
	}else{
		//filtro 
		const result = carrito[0].productos.filter(e=> e.id !== parseInt(id_prod) )
		//asigno completo
		carrito[0].productos = result
		//actualizo
		const data = await req.modelsCarritos.updateById(...carrito)
		res.send(data)
	}
	
}
module.exports = {nuevoCarrito,borraCarrito,nuevoProdCarrito,obtenerProdCarrito,borraProdCarrito}

