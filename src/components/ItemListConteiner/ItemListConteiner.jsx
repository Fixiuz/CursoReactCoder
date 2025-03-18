import {useEffect, useState} from 'react';

import './ItemListConteiner.css';
import productos from '../../productos';
import Item from '../Item/Item';

function ItemListConteiner(){
  const[contador, setContador] = useState(0)
  
  
  useEffect(() => {
    console.log('esta es mi lista de productos' , productos);
  }, []);
  return (
    <div className='conteinerProductos'>
     
      {productos.map(el => {
        return(
          <Item producto ={el}/>
        )
      })}


    </div>
  );
};
export default ItemListConteiner
