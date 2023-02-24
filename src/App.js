import "./App.css";
import ShowProducts from "./components/showProducts";
import SalesView from './components/salesView';
import { useState } from "react";

function App() {
  const [stateShowProducts, setStateShowProducts] = useState({
    inputSearcher: "",
    productTypeCombobox: {
      state: false,
      selection: 0,
    },
    productBrandCombobox: {
      state: false,
      selection: 0,
    },
    sellersCombobox: {
      state: false,
      selection: 0,
    },
  });

  return (
    <div className="App">
      <header>
        <h3>Analisis de ventas en proceso</h3>
      </header>
      <main>
        <section>
          <ShowProducts
            hookStateShowProducts={[stateShowProducts, setStateShowProducts]}
          />
        </section>
        <section>
          <SalesView/>
        </section>
      </main>
    </div>
  );
}

export default App;
