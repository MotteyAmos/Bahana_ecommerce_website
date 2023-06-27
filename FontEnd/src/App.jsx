import { HomePage, AboutPage } from "./Pages"
import {
  Routes,
  Route
} from "react-router-dom";
import { Footer, Header } from "./components";
import AllFabric from "./Pages/AllFabric";
import { clothe_17 } from "../public/images";

function App() {


  return (
    <div className="">
      <Header/>
    
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contact_us" element={<Footer/>}/>
        <Route path="/all_fabrics" element={<AllFabric fabric_val={{img:clothe_17, text:"AFRICAN PRINT"}}/>}/>
      </Routes>
    
    </div>
  )
}

export default App
