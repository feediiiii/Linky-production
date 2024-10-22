import { useState } from 'react'

import './App.css'
import Big_first_title from "./sections/First_header_photo"
import Header from "./sections/Header"
import { IoIosAddCircle } from "react-icons/io";
import Linky_buttons_sections from './sections/Links_buttons_sections';
import First_options from './sections/First_options';
import Second_options from './sections/Second _options';
import Third_options from './sections/Third_options';
import Footer from './sections/Footer';
// import { Button } from '@/components/ui/button';









function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        
      <Header />
      <Big_first_title />
     
      <div className="card">
        <p className='text-[20px]'>
          <code>Harmonisez vos réseaux sociaux 😊🌟.</code> 
        </p>
      </div>
      
        <button onClick={() => setCount((count) => count + 1)} className="flex items-center mx-auto space-x-3">
          <div>  <IoIosAddCircle className="h-6 w-6 " /></div>
          <div> Créer un compte avec Linky</div>
        </button>

        <Linky_buttons_sections/>
        <First_options />
        <Second_options />
        <Third_options />

        <Footer />

        <button>Click me</button>

    </>
  )
}

export default App
