import './App.css'
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';





function App() {
 

  return (
    <>
      <NavBar/>
      
      <ItemListConteiner greetings="Mensaje de bienvenida"/>
      <Products/>
      <ItemCount stock={8} nombreDelProducto='Mesa'/>
      <Products/>
      <ItemCount stock={5} nombreDelProducto='Sillon'/>
      <Products/>
      <ItemCount stock={14} nombreDelProducto='Silla'/>
      <Footer/>

      
      
    </>
  )
}

export default App
