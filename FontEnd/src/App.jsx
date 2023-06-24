import { HomePage, AboutPage } from "./Pages"
import {
  Routes,
  Route
} from "react-router-dom";
import { Footer, Header } from "./components";


function App() {


  return (
    <div className="">
      <Header/>
    
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contact_us" element={<Footer/>}/>
      </Routes>
    
    </div>
  )
}

export default App
