import "./App.css";
import "./AppResponsive.css";
import ShowProducts from "./components/showProducts";
import SalesView from "./components/salesView";
import AnalysisData from "./components/analysisData";
import imgAnalysis from './img/scanning_icon.svg'
import objectData from './mock.js';

function App() {
  return (
    <div className="App">
      <header>
        <img src={imgAnalysis}></img>
        <h3>Analisis de ventas</h3>
        <button onClick={(()=>{
          console.log(objectData())
        })}>Objeto en consola</button>
        
      </header>
      <main>
        <section>
          <ShowProducts />
          {/* <AnalysisData /> */}
        </section>
        <section>
          <SalesView />
        </section>
      </main>
    </div>
  );
}

export default App;
