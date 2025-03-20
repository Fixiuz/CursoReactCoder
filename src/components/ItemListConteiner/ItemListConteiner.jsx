import {useEffect} from 'react';

import './ItemListConteiner.css';
import productos from '../../productos';
import Item from '../Item/Item';

function ItemListConteiner(){
  
  
  
  useEffect(() => {
    console.log('esta es mi lista de productos' , productos);
  }, []);
  return (
    <div className='conteinerProductos'>
     
      {productos.map(el => {
        return(
          <Item key ={el.id} producto ={el}/>
        )
      })}


    </div>
  );
};
export default ItemListConteiner
