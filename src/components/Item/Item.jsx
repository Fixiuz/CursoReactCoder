import './Item.css'
import {useState} from 'react';


function Item({producto}){
    console.log(producto);
    const {nombre,precio,descripcion,stock,categoria,img} = producto;
    const [contador, setContador] = useState(0);
    return (
            <div className='productos'>
                <h2>{nombre}</h2>
                <p>${producto.precio}</p>
                <p>{producto.descripcion}</p>
                <p>Quedan {producto.stock} disponibles</p>
                <p>{producto.categoria}</p>
                <img src={producto.img} alt=''/>
                {/* <div className='botones'>
                    <button onClick={()=>(setContador(contador+1))}>+</button>
                    <button onClick={()=>(setContador(contador-1))}>-</button>  
                </div> */}
                <button className='btn'>Agregar al carrito</button>
                {/* <p>{contador}</p> */}
        </div> 
    
        
      
    )
  
  
  }
export default Item

