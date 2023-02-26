import mock from "../mock";
import "../styles/showProducts/index.css";
import typeState from "../state/showProducts/types";
import functionShowProducts from "../functions/functionShowProducts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const ShowProducts = ({ hookStateShowProducts }) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.showProducts);

  let arrayTypesProducts = [...mock().typesProducts];
  let arrayProductBrand = [...mock().productBrand];
  let arraySellers = [...mock().sellers];

  arrayTypesProducts.unshift({ id: -1, name: "todos" });
  arrayProductBrand.unshift({ id: -1, name: "todas" });
  arraySellers.unshift({ id: -1, name: "todos" });

  const [inputsCombobox, setInputsCombobox] = useState({
    inputProductType: "",
    inputProductBrandCombobox: "",
    inputSellersCombobox: "",
  });

  useEffect(() => {
    let input00 = arrayTypesProducts.find((list) => {
      return list.id == selector.productTypeCombobox.selection;
    }).name;
    let input01 = arrayProductBrand.find((list) => {
      return list.id == selector.productBrandCombobox.selection;
    }).name;
    let input02 = arraySellers.find((list) => {
      return list.id == selector.sellersCombobox.selection;
    }).name;

    setInputsCombobox({
      inputProductType: input00,
      inputProductBrandCombobox: input01,
      inputSellersCombobox: input02,
    });
    console.log(selector.date);
  }, [
    selector.productTypeCombobox.selection,
    selector.productBrandCombobox.selection,
    selector.sellersCombobox.selection,
  ]);

  useEffect(() => {
    dispatch({
      type: typeState.CHANGE_INPUT_START_DATE,
      payload: functionShowProducts.filterShowProducts(selector).sort((a, b) => {
        if (new Date(a.dateSales).getTime() > new Date(b.dateSales).getTime()) {
          return 1;
        }
        if (new Date(a.dateSales).getTime() < new Date(b.dateSales).getTime()) {
          return -1;
        }
        return 0;
      })[0].dateSales,
    });
    
  }, []);

  return (
    <div className="divContainerShowProducts00">
      <h2>Mostrar productos</h2>
      <div>
        <h3>Buscar producto</h3>
        <input
          value={selector.inputSearcher}
          onChange={(e) => {
            dispatch({
              type: typeState.CHANGE_INPUT_ITEM_SEARCHER,
              payload: e.currentTarget.value,
            });
          }}
        ></input>
      </div>
      <div>
        <h3>Categoria</h3>
        <input
          value={inputsCombobox.inputProductType}
          onClick={() => {
            selector.productTypeCombobox.state
              ? dispatch({
                  type: typeState.CHANGE_STATE_PRODUCT_TYPE_COMBOBOX,
                  payload: false,
                })
              : dispatch({
                  type: typeState.CHANGE_STATE_PRODUCT_TYPE_COMBOBOX,
                  payload: true,
                });
          }}
        ></input>
        <div
          style={
            selector.productTypeCombobox.state
              ? { display: "flex" }
              : { display: "none" }
          }
        >
          {arrayTypesProducts.map((listTypesProducts) => {
            return (
              <h3
                onClick={() => {
                  dispatch({
                    type: typeState.CHANGE_STATE_PRODUCT_TYPE_COMBOBOX,
                    payload: false,
                  });
                  dispatch({
                    type: typeState.CHANGE_SELECTION_PRODUCT_TYPE_COMBOBOX,
                    payload: listTypesProducts.id,
                  });
                }}
              >
                {listTypesProducts.name}
              </h3>
            );
          })}
        </div>
      </div>

      <div>
        <h3>Marcas</h3>
        <input
          value={inputsCombobox.inputProductBrandCombobox}
          onClick={() => {
            selector.productBrandCombobox.state
              ? dispatch({
                  type: typeState.CHANGE_STATE_PRODUCT_BRAND_COMBOBOX,
                  payload: false,
                })
              : dispatch({
                  type: typeState.CHANGE_STATE_PRODUCT_BRAND_COMBOBOX,
                  payload: true,
                });
          }}
        ></input>
        <div
          style={
            selector.productBrandCombobox.state
              ? { display: "flex" }
              : { display: "none" }
          }
        >
          {arrayProductBrand.map((listTypesProducts) => {
            return (
              <h3
                onClick={() => {
                  dispatch({
                    type: typeState.CHANGE_STATE_PRODUCT_BRAND_COMBOBOX,
                    payload: false,
                  });
                  dispatch({
                    type: typeState.CHANGE_SELECTION_PRODUCT_BRAND_COMBOBOX,
                    payload: listTypesProducts.id,
                  });
                }}
              >
                {listTypesProducts.name}
              </h3>
            );
          })}
        </div>
      </div>

      <div>
        <h3>Vendedor</h3>
        <input
          value={inputsCombobox.inputSellersCombobox}
          onClick={() => {
            selector.sellersCombobox.state
              ? dispatch({
                  type: typeState.CHANGE_STATE_SELLERS_COMBOBOX,
                  payload: false,
                })
              : dispatch({
                  type: typeState.CHANGE_STATE_SELLERS_COMBOBOX,
                  payload: true,
                });
          }}
        ></input>
        <div
          style={
            selector.sellersCombobox.state
              ? { display: "flex" }
              : { display: "none" }
          }
        >
          {arraySellers.map((listTypesProducts) => {
            return (
              <h3
                onClick={() => {
                  dispatch({
                    type: typeState.CHANGE_STATE_SELLERS_COMBOBOX,
                    payload: false,
                  });
                  dispatch({
                    type: typeState.CHANGE_SELECTION_SELLERS_COMBOBOX,
                    payload: listTypesProducts.id,
                  });
                }}
              >
                {listTypesProducts.name}
              </h3>
            );
          })}
        </div>
      </div>

      <div>
        <div>
          <h3> rango de fechas</h3>
          <input
            defaultChecked={selector.date.state}
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
            }}
            type="checkbox"
          ></input>
        </div>
        <div>
          <h3>Inicio</h3>
          <input
            value={selector.date.startDate}
            onChange={(e) => {
              if (
                new Date(selector.date.finishDate).getTime() <
                new Date(e.currentTarget.value).getTime()
              ) {
                alert("Fecha de inicio no puede ser mayor a fecha fin");
              } else {
                dispatch({
                  type: typeState.CHANGE_INPUT_START_DATE,
                  payload: e.currentTarget.value,
                });
              }
            }}
            disabled={selector.date.state ? false : true}
            type="date"
            data-date-format="DD MMMM YYYY"
          ></input>
        </div>

        <div>
          <h3>Fin</h3>
          <input
            value={selector.date.finishDate}
            onChange={(e) => {
              if (
                new Date(selector.date.startDate).getTime() >
                new Date(e.currentTarget.value).getTime()
              ) {
                alert("Fecha fin no puede ser menor a fecha inicio-------");
              } else {
                dispatch({
                  type: typeState.CHANGE_INPUT_FINISH_DATE,
                  payload: e.currentTarget.value,
                });
              }
            }}
            disabled={selector.date.state ? false : true}
            type="date"
            data-date-format="DD MMMM YYYY"
          ></input>
        </div>
      </div>
    </div>
  );
};

export default ShowProducts;
