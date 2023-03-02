import mock from "../mock";
import "../styles/showProducts/index.css";
import "../styles/showProducts/indexResponsive.css";
import typeState from "../state/showProducts/types";
import functionShowProducts from "../functions/functionShowProducts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const ShowProducts = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.showProducts);

  let arrayTypesProducts = [...mock().typesProducts];
  let arrayProductBrand = [...mock().productBrand];
  let arraySellers = [...mock().sellers];
  let arrayOrganizeBy = [
    { id: 0, name: "Nombre producto" },
    { id: 1, name: "Precio ascendente" },
    { id: 2, name: "Precio descendente" },
  ];

  arrayTypesProducts.unshift({ id: -1, name: "todos" });
  arrayProductBrand.unshift({ id: -1, name: "todas" });
  arraySellers.unshift({ id: -1, name: "todos" });

  const [inputsCombobox, setInputsCombobox] = useState({
    inputProductType: "",
    inputProductBrandCombobox: "",
    inputSellersCombobox: "",
    inputorganizeByCombobox: "",
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

    let input03 = arrayOrganizeBy.find((list) => {
      return list.id == selector.organizeByComboBox.selection;
    }).name;

    setInputsCombobox({
      inputProductType: input00,
      inputProductBrandCombobox: input01,
      inputSellersCombobox: input02,
      inputorganizeByCombobox: input03,
    });
  }, [
    selector.productTypeCombobox.selection,
    selector.productBrandCombobox.selection,
    selector.sellersCombobox.selection,
    selector.organizeByComboBox.selection,
  ]);

  useEffect(() => {
    dispatch({
      type: typeState.CHANGE_INPUT_START_DATE,
      payload: functionShowProducts
        .filterShowProducts(selector)
        .sort((a, b) => {
          if (
            new Date(a.dateSales).getTime() > new Date(b.dateSales).getTime()
          ) {
            return 1;
          }
          if (
            new Date(a.dateSales).getTime() < new Date(b.dateSales).getTime()
          ) {
            return -1;
          }
          return 0;
        })[0].dateSales,
    });
  }, []);

  useEffect(() => {
    dispatch({
      type: typeState.CHANGE_INPUT_START_PRICE,
      payload: functionShowProducts
        .filterShowProducts(selector)
        .sort((a, b) => {
          if (parseInt(a.itemPrice) > parseInt(b.itemPrice)) {
            return 1;
          }
          if (parseInt(a.itemPrice) < parseInt(b.itemPrice)) {
            return -1;
          }
          return 0;
        })[0].itemPrice,
    });
  }, []);

  useEffect(() => {
    dispatch({
      type: typeState.CHANGE_INPUT_FINISH_PRICE,
      payload: functionShowProducts
        .filterShowProducts(selector)
        .sort((a, b) => {
          if (parseInt(a.itemPrice) < parseInt(b.itemPrice)) {
            return 1;
          }
          if (parseInt(a.itemPrice) > parseInt(b.itemPrice)) {
            return -1;
          }
          return 0;
        })[0].itemPrice,
    });
  }, []);

  const changeStateFilters = (state, type) => {
    let arrayType = [
      typeState.CHANGE_STATE_PRODUCT_TYPE_COMBOBOX,
      typeState.CHANGE_STATE_PRODUCT_BRAND_COMBOBOX,
      typeState.CHANGE_STATE_SELLERS_COMBOBOX,
      typeState.CHANGE_STATE_ORGANIZE_BY_COMBOBOX,
    ];

    arrayType
      .filter((listArrayType) => listArrayType !== type)
      .forEach((listType) => {
        dispatch({
          type: listType,
          payload: state,
        });
      });
  };

  return (
    <div className="divContainerShowProducts00">
      <h2>Filtros</h2>

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

      <div >
        <h3>Categoria</h3>
        <input
          readOnly
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

                changeStateFilters(false, typeState.CHANGE_STATE_PRODUCT_TYPE_COMBOBOX);
          }}
        ></input>
        <div
          style={
            selector.productTypeCombobox.state
              ? { display: "flex" }
              : { display: "none" }
          }
        >
          {arrayTypesProducts.map((listTypesProducts, index) => {
            return (
              <h3
                key={index}
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
          readOnly
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
                changeStateFilters(false, typeState.CHANGE_STATE_PRODUCT_BRAND_COMBOBOX);
          }}
        ></input>
        <div
          style={
            selector.productBrandCombobox.state
              ? { display: "flex" }
              : { display: "none" }
          }
        >
          {arrayProductBrand.map((listTypesProducts, index) => {
            return (
              <h3
                key={index}
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
          readOnly
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

                changeStateFilters(false, typeState.CHANGE_STATE_SELLERS_COMBOBOX);
          }}
        ></input>
        <div
          style={
            selector.sellersCombobox.state
              ? { display: "flex" }
              : { display: "none" }
          }
        >
          {arraySellers.map((listTypesProducts, index) => {
            return (
              <h3
                key={index}
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
          <input
            defaultChecked={selector.date.state}
            onChange={() => {
              changeStateFilters(false, typeState.CHANGE_INPUT_CHECKBOX_DATE);
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
          <h3> Rango en fechas</h3>
        </div>
        <div
          style={
            selector.date.state ? { display: "flex" } : { display: "none" }
          }
        >
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
                  alert("Fecha fin no puede ser menor a fecha inicio");
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

      <div>
        <div>
          <input
            defaultChecked={selector.price.state}
            onChange={() => {
              changeStateFilters(false, typeState.CHANGE_INPUT_CHECKBOX_PRICE);
              if (selector.price.state === true) {
                dispatch({
                  type: typeState.CHANGE_INPUT_CHECKBOX_PRICE,
                  payload: false,
                });
              } else {
                dispatch({
                  type: typeState.CHANGE_INPUT_CHECKBOX_PRICE,
                  payload: true,
                });
              }
             
            }}
            type="checkbox"
          ></input>
          <h3> Rango en precios</h3>
        </div>
        <div
          style={
            selector.price.state ? { display: "flex" } : { display: "none" }
          }
        >
          <div>
            <h3>Inicio</h3>
            <input
              value={selector.price.startPrice}
              onChange={(e) => {
                if (
                  parseInt(selector.price.finishPrice) <
                  parseInt(e.currentTarget.value)
                ) {
                  alert("Precio de inicio no puede ser mayor a precio fin");
                } else {
                  dispatch({
                    type: typeState.CHANGE_INPUT_START_PRICE,
                    payload: e.currentTarget.value,
                  });
                }
              }}
              disabled={selector.price.state ? false : true}
              type="number"
            ></input>
          </div>
          <div>
            <h3>Fin</h3>
            <input
              value={selector.price.finishPrice}
              onChange={(e) => {
                dispatch({
                  type: typeState.CHANGE_INPUT_FINISH_PRICE,
                  payload: e.currentTarget.value,
                });
              }}
              disabled={selector.price.state ? false : true}
              type="number"
            ></input>
          </div>
        </div>
      </div>

      <div>
        <h3>Ordenar por</h3>
        <input
          readOnly
          value={inputsCombobox.inputorganizeByCombobox}
          onClick={() => {
            selector.organizeByComboBox.state
              ? dispatch({
                  type: typeState.CHANGE_STATE_ORGANIZE_BY_COMBOBOX,
                  payload: false,
                })
              : dispatch({
                  type: typeState.CHANGE_STATE_ORGANIZE_BY_COMBOBOX,
                  payload: true,
                });
                changeStateFilters(false, typeState.CHANGE_STATE_ORGANIZE_BY_COMBOBOX);
          }}
        ></input>
        <div
          style={
            selector.organizeByComboBox.state
              ? { display: "flex" }
              : { display: "none" }
          }
        >
          {arrayOrganizeBy.map((listOrganizeBy, index) => {
            return (
              <h3
                key={index}
                onClick={() => {
                  dispatch({
                    type: typeState.CHANGE_STATE_ORGANIZE_BY_COMBOBOX,
                    payload: false,
                  });
                  dispatch({
                    type: typeState.CHANGE_SELECTION_ORGANIZE_BY_COMBOBOX,
                    payload: listOrganizeBy.id,
                  });
                }}
              >
                {listOrganizeBy.name}
              </h3>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShowProducts;
