import './App.css';
import Producto from './views/Producto';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Detalleproducto from './views/DetalleProducto';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Producto/>}></Route>
          <Route path="/producto/:id" element={<Detalleproducto></Detalleproducto>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
