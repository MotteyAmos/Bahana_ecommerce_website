import { HomePage, AboutPage,AllBags,AllFabric, AllCufLink } from "./Pages"
import {
  Routes,
  Route
} from "react-router-dom";
import { Footer, Header } from "./components";
import { clothe_17,cuff_link_Banner,ladies_bag_21  } from "../public/images";


function App() {


  return (
    <div className="">
      <Header/>
    
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contact_us" element={<Footer/>}/>
        <Route path="/all_fabrics" element={<AllFabric val={{img:clothe_17, text:"AFRICAN PRINT"}}/>}/>
        <Route path="/all_bags" element={<AllBags val={{img:ladies_bag_21, text:"BAGS & PURSE"}}/>}/>
        <Route path="/all_cuffLink" element={<AllCufLink val={{img:cuff_link_Banner, text:"CUFF LINK"}}/>}/>


      </Routes>
    
      <Footer/>
    </div>
  )
}

export default App
