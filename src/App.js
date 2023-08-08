import './App.css';
import { ItemListConainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <>
    <NavBar />
    <ItemListConainer greeting ="Hola"/>
    </>
  );
}

export default App;
