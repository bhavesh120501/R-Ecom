import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './Home'
import { About } from './About'
import { Products } from './Products'
import { Contact } from './Contact'
import { SingleProduct } from './SingleProduct'
import { Cart } from './Cart'
import { ErrorPage } from './ErrorPage'
import { Nav } from './Components/Nav'
import { Footer } from './Components/Footer'

function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Products' element={<Products/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/SingleProduct/:id' element={<SingleProduct/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App
