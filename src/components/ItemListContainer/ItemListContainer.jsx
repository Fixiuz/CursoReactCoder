import {useEffect,useState} from 'react';

import './ItemListContainer.css';
import productos from '../../productos';
import Item from '../Item/Item';
import Loader from '../Loader/Loader';
import {fetchData} from '../../fetchData';
function ItemListContainer(){
  
  
  const[loading,setLoading] = useState(true);
  useEffect(() => {
    
    fetchData(true)
    .then(response => console.log(response))
    .catch(error => console.error(error))



    
    setTimeout(() => {
      
      
      setLoading(false);
      
    
    }, 2000); 
  }, []);

  return (
    <div className='containerProductos'>
     
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
export default ItemListContainer
