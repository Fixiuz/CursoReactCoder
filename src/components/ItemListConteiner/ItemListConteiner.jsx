import {useEffect,useState} from 'react';

import './ItemListConteiner.css';
import productos from '../../productos';
import Item from '../Item/Item';
import Loader from '../Loader/Loader';

function ItemListConteiner(){
  
  
  const[loading,setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  // useEffect(() => {
  //   console.log('esta es mi lista de productos' , productos);
  // }, []);
  return (
    <div className='conteinerProductos'>
     
      {
        loading ? 
        <Loader/>
        :
        productos.map(el => {
        return(
          <Item key ={el.id} producto ={el}/>
        )
      })}


    </div>
  );
};
export default ItemListConteiner
