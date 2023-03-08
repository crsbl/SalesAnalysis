import "./App.css";
import "./AppResponsive.css";
import ShowProducts from "./components/showProducts";
import SalesView from "./components/salesView";
import AnalysisData from "./components/analysisData";
import imgAnalysis from "./img/scanning_icon.svg";
import ModalAlert from "./components/modalAlert";
import objectData from "./mock.js";
import { useSelector } from "react-redux";
function App() {
  const selector = useSelector((state) => state.modalAlert);
  console.log(selector);
  return (
    <div className="App">
      {selector.modalAlert.state === true && (
        <ModalAlert
          type={selector.modalAlert.type}
          message={selector.modalAlert.message}
        />
      )}
      <header>
        <img src={imgAnalysis}></img>
        <h3>Analisis de ventas</h3>
        <button
          onClick={() => {
            console.log(objectData());
          }}
        >
          Objeto en consola
        </button>
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
