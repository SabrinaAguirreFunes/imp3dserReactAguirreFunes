import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="Nombre producto desde una props"/>
    </div>
  )
}

export default App
