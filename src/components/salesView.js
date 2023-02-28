import "../styles/salesView/index.css";
import "../styles/salesView/indexResponsive.css";
import functionShowProducts from "../functions/functionShowProducts";
import { useSelector } from "react-redux";

const SalesView = () => {
  const selector = useSelector((state) => state.showProducts);

  return (<>
    <div className="divContainerSalesView00">
      <div>
        <h3>Fecha</h3>
        <h3>Nombre producto</h3>
        <h3>Nombre vendedor</h3>
        <h3>Categoria</h3>
        <h3>Marca</h3>
        <h3>Precio</h3>
      </div>

      <div>
        {functionShowProducts
          .filterShowProducts(selector)
          .map((listFilterShowProducts) => {
            return (
              <div>
                <h3>{listFilterShowProducts.dateSales}</h3>
                <h3>{listFilterShowProducts.itemName}</h3>
                <h3>{listFilterShowProducts.sellername}</h3>
                <h3>{listFilterShowProducts.TypesProductsName}</h3>
                <h3>{listFilterShowProducts.productBrandName}</h3>
                <h3>${listFilterShowProducts.itemPrice.toLocaleString("de-DE")}</h3>
              </div>
            );
          })}
      </div>

    </div>
    
    <div className="divContainerSalesView01">
      
      <div>
        <h3>Cantidad:</h3>
        <h3>{functionShowProducts.filterShowProducts(selector).length}</h3>
      </div>

      <div>
      <h3>Total:</h3>
      <h3>
       ${functionShowProducts
          .filterShowProducts(selector)
          .reduce((acc, Value) => (acc += Value.itemPrice), 0).toLocaleString("de-DE")}
      </h3>
    </div>

    </div>
    
    
    </>
  );
};

export default SalesView;
