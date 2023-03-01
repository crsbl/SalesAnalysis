import typeState from "./types";

let dayac = new Date();
let day = dayac.getDate() > 10 ? dayac.getDate() : "0" + dayac.getDate();
let month =
  dayac.getMonth() + 1 > 10
    ? dayac.getMonth() + 1
    : "0" + (dayac.getMonth() + 1);
let year = dayac.getFullYear();

const estadoInicial = {
  inputSearcher: "",
  date: {
    startDate: `${year}-${month}-${day}`,
    finishDate: `${year}-${month}-${day}`,
    state: false,
    type: false,
  },
  price: {
    startPrice: 0,
    finishPrice: 0,
    state: false,
  },
  productTypeCombobox: {
    state: false,
    selection: -1,
  },
  productBrandCombobox: {
    state: false,
    selection: -1,
  },
  sellersCombobox: {
    state: false,
    selection: -1,
  },
  organizeByComboBox: {
    state: false,
    selection: 0,
  },
};

function rootReducer(state = estadoInicial, accion) {
  switch (accion.type) {
    case typeState.CHANGE_STATE_PRODUCT_TYPE_COMBOBOX:
      return {
        ...state,
        productTypeCombobox: {
          ...state.productTypeCombobox,
          state: accion.payload,
        },
      };
    case typeState.CHANGE_STATE_PRODUCT_BRAND_COMBOBOX:
      return {
        ...state,
        productBrandCombobox: {
          ...state.productBrandCombobox,
          state: accion.payload,
        },
      };
    case typeState.CHANGE_STATE_SELLERS_COMBOBOX:
      return {
        ...state,
        sellersCombobox: {
          ...state.sellersCombobox,
          state: accion.payload,
        },
      };
    case typeState.CHANGE_SELECTION_PRODUCT_TYPE_COMBOBOX:
      return {
        ...state,
        productTypeCombobox: {
          ...state.productTypeCombobox,
          selection: accion.payload,
        },
      };
    case typeState.CHANGE_SELECTION_PRODUCT_BRAND_COMBOBOX:
      return {
        ...state,
        productBrandCombobox: {
          ...state.productBrandCombobox,
          selection: accion.payload,
        },
      };
    case typeState.CHANGE_SELECTION_SELLERS_COMBOBOX:
      return {
        ...state,
        sellersCombobox: {
          ...state.sellersCombobox,
          selection: accion.payload,
        },
      };
    case typeState.CHANGE_INPUT_ITEM_SEARCHER:
      return {
        ...state,
        inputSearcher: accion.payload,
      };
    case typeState.CHANGE_INPUT_START_DATE:
      return {
        ...state,
        date: { ...state.date, startDate: accion.payload },
      };
    case typeState.CHANGE_INPUT_FINISH_DATE:
      return {
        ...state,
        date: { ...state.date, finishDate: accion.payload },
      };
    case typeState.CHANGE_INPUT_CHECKBOX_DATE:
      return {
        ...state,
        date: { ...state.date, state: accion.payload },
      };
    case typeState.CHANGE_INPUT_START_PRICE:
      return {
        ...state,
        price: { ...state.price, startPrice: accion.payload },
      };
    case typeState.CHANGE_INPUT_FINISH_PRICE:
      return {
        ...state,
        price: { ...state.price, finishPrice: accion.payload },
      };
    case typeState.CHANGE_INPUT_CHECKBOX_PRICE:
      return {
        ...state,
        price: { ...state.price, state: accion.payload },
      };
    case typeState.CHANGE_SELECTION_ORGANIZE_BY_COMBOBOX:
      return {
        ...state,
        organizeByComboBox: {
          ...state.organizeByComboBox,
          selection: accion.payload,
        },
      };
      case typeState.CHANGE_STATE_ORGANIZE_BY_COMBOBOX:
        return {
          ...state,
          organizeByComboBox: {
            ...state.organizeByComboBox,
            state: accion.payload,
          },
        };
    default:
      return state;
  }
}
export default rootReducer;
