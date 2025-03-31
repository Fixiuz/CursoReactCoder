
import './ItemDetail.css'
// import {useState} from 'react';


function ItemDetail({producto, volverAlInicio}){
    // console.log(producto);
    const {nombre,precio,descripcion,stock,categoria} = producto;
    // const [contador, setContador] = useState(0);
    return (
            <div className='productos'>
                <h2>{nombre}</h2>
                <p>${producto.precio}</p>
                {/* <p>{producto.descripcion}</p> */}
                <p>Quedan {producto.stock} disponibles</p>
                {/* <p>{producto.categoria}</p> */}
                
                {/* <div className='botones'>
                    <button onClick={()=>(setContador(contador+1))}>+</button>
                    <button onClick={()=>(setContador(contador-1))}>-</button>  
                </div> */}
                <button className='btn'>Agregar al carrito</button>
                <button className='btn'onClick={volverAlInicio}>Volver al incio </button>

                {/* <p>{contador}</p> */}
        </div> 
    
        
      
    )
  
  
  }
export default ItemDetail