import "./App.css";
import ShowProducts from "./components/showProducts";
import SalesView from "./components/salesView";
import AnalysisData from "./components/analysisData";

function App() {
  return (
    <div className="App">
      <header>
        <h3>Analisis de ventas en proceso</h3>
      </header>
      <main>
        <section>
          <ShowProducts />
          <AnalysisData />
        </section>
        <section>
          <SalesView />
        </section>
      </main>
    </div>
  );
}

export default App;
