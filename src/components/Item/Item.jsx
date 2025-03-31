import './Item.css'

// import {useState} from 'react';


function Item({producto, filtrarProducto}){
    // console.log(producto);
    const {nombre,precio,descripcion,stock,categoria} = producto;
    // const [contador, setContador] = useState(0);
    
    function agregarAlCarrito(prod){
        const nuevoProducto = {
            ...prod,
            cantidad:1
        }
        console.log('Vas a agregar ', nuevoProducto);
    }
    
    return (
            <div className='productos'>
                <h2>{nombre}</h2>
                <p>${precio}</p>
                {/* <p>{producto.descripcion}</p> */}
                <p>Quedan {stock} disponibles</p>
                {/* <p>{producto.categoria}</p> */}
                
                {/* <div className='botones'>
                    <button onClick={()=>(setContador(contador+1))}>+</button>
                    <button onClick={()=>(setContador(contador-1))}>-</button>  
                </div> */}
                <button className='btn'onClick={()=> agregarAlCarrito(producto)}>Agregar al carrito</button>
                <button className='btn' onClick={()=> filtrarProducto(producto)}>Ver detalle </button>

                {/* <p>{contador}</p> */}
        </div> 
    
        
      
    );
  };
export default Item

