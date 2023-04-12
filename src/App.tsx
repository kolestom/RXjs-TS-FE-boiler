import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Main from './components/Main';



function App() {
  const [page, setPage] = useState('first');
  
  
  
  return (
    <>
    <NavBar />
      <Main />
     <Footer />
    </>
    
  )
}

export default App
