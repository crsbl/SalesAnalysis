import "../styles/analysisData/index.css"

const AnalysisData = ()=>{


    return<div className="divContainerAnalysisData00">
 <h2>Analisis de Datos</h2>
 <div>
       
        <div>
          <input
          /*   defaultChecked={selector.date.state}
            onChange={() => {
              if (selector.date.state === true) {
                dispatch({
                  type: typeState.CHANGE_INPUT_CHECKBOX_DATE,
                  payload: false,
                });
              } else {
                dispatch({
                  type: typeState.CHANGE_INPUT_CHECKBOX_DATE,
                  payload: true,
                });
              }
            }} */
            type="checkbox"
          ></input>
          <h3>Mas ventas</h3>
        </div>
      </div>

    </div>
}

export default AnalysisData;