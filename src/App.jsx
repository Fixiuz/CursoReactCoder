import './App.css'
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router';
import ItemDetail from './components/ItemDetail/ItemDetail';






function App() {
 

  return (
    <>
      <BrowserRouter>
       <NavBar/> 
       <Routes>
          <Route path='/' element ={<ItemListContainer/>} />
          <Route path='/categoria/:categoria' element={<ItemListContainer/>} />
          <Route path='/detalle/:id' element={<ItemDetail/>} />
          
          <Route path='*' element={<p> 404 NOT FOUND </p>} />


       </Routes>
      </BrowserRouter> 

    </>
  )
}

export default App
