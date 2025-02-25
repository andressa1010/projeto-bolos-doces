import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/home"
import Cardapio from "./Pages/cardapio"
import Contato from "./Pages/contato"
import BolosFesta from "./Pages/bolosFesta"
import Avaliacoes from "./Pages/avaliacoes"
import BolosCarrinho from "./Pages/bolosCarrinho"
import ScrollToTop from "./components/scrollToTop"



function App() {
  

  return (
    <>
    
     <BrowserRouter>
     <ScrollToTop/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cardapio" element={<Cardapio/>}/>
      <Route path="/contato" element={<Contato/>}/>
      <Route path="/bolosfesta" element={<BolosFesta/>}/>
      <Route path="/avaliacoes" element={<Avaliacoes/>}/>
      <Route path="/boloscarrinho" element={<BolosCarrinho/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
