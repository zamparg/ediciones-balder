import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './containers/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/category/:id' element={<ItemListContainer/>}/>
      <Route path='/item/:id'element={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<Cart/>}/>
      </Routes>
      
   </BrowserRouter>
  );
}

export default App;