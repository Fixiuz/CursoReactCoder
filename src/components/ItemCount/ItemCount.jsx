import { useState } from 'react';
import './ItemCount.css';


function ItemCount({stock, nombreDelProducto}){
  
  const [contador, setContador] = useState(0);
  

  
  function modificarContador(operacion){
    if(operacion === '+'){
      if(contador < stock){
        setContador(contador + 1);
      }
      else{
        alert("No hay mas stock disponible");
      }
      
    }else{
      if(contador > 0){
        setContador(contador - 1);
      }
    }
    
    
  };
  function  agregarAlCarrito(){
    alert(`Vas a agregar ${contador} unidades de: ${nombreDelProducto} al carrito`);    setContador(0);

  } 
  return (
      <div className='botonCompleto'>
        <div className='items'>
          <button className='btn' onClick={() => modificarContador('-')}>-</button>
          <p>{contador}</p>
          <button className='btn' onClick={() => modificarContador('+')}>+</button>
        </div>
        <button className='btn' style={{with: '15rem'}} onClick={() => agregarAlCarrito()}>Agregar al carrito</button>
      </div>
      

  );
  

};
export default ItemCount;