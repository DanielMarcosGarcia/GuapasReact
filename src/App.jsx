import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <Header />
      <ItemListContainer stock={"No se encontraron productos!"} />
      <Footer />
    </div>
  );
}

export default App;
