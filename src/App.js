import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ItemListConainer } from "./components/itemlistcontainer/ItemListContainer";
import { ItemDetailConainer} from "./components/itemdetailcontainer/ItemDetailContainer";
import { NavBar} from "./components/navbar/NavBar";



function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element ={<ItemListConainer greeting ="Hola"/>} />
        <Route path="/categoria/:id" element ={<ItemListConainer greeting ="Hola"/>} />
        <Route path="/item/:id" element ={<ItemDetailConainer/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
