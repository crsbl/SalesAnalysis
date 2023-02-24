import mock from "../mock";

const functionShowProducts = {
  filterShowProducts: (selector) => {
    let arrayResult00 = [];
    const sales = [...mock().sales];
    const sellers = [...mock().sellers];
    const items = [...mock().items];
    const productBrands = [...mock().productBrand];
    const typesProducts = [...mock().typesProducts];

    sales.forEach((listSales) => {
      sellers.forEach((listSellers) => {
        if (listSales.sellersId == listSellers.id) {
          if (
            listSales.sellersId ==
            (selector.sellersCombobox.selection == -1
              ? listSellers.id
              : selector.sellersCombobox.selection)
          ) {
            items.forEach((listItems) => {
              if (listSales.itemsId === listItems.id) {
                productBrands.forEach((listProductBrands) => {
                  if (listItems.idProductBrand === listProductBrands.id) {
                    if (
                      listItems.idProductBrand ==
                      (selector.productBrandCombobox.selection == -1
                        ? listProductBrands.id
                        : selector.productBrandCombobox.selection)
                    ) {
                      typesProducts.forEach((listTypesProducts) => {
                        if (listItems.idtypeProduct === listTypesProducts.id) {
                          if (
                            listItems.idtypeProduct ===
                            (selector.productTypeCombobox.selection == -1
                              ? listTypesProducts.id
                              : selector.productTypeCombobox.selection)
                          ) {
                            console.log(listSellers.name, listSales.date);
                            arrayResult00.push({
                              dateSales: listSales.date,
                              itemName: listItems.name,
                              sellername: listSellers.name,
                              TypesProductsName: listTypesProducts.name,
                              productBrandName: listProductBrands.name,
                              itemPrice: listItems.price,
                            });
                          }
                        }
                      });
                    }
                  }
                });
              }
            });
          }
        }
      });

      /*     mock().sellers.forEach((listSellers) => {
        if (listSales.sellersId === listSellers.id) {
          mock().items.forEach((listItems) => {
            if (listSales.itemsId === listItems.id) {
              mock().productBrand.forEach((listProductBrand) => {
                if (listProductBrand.id === listItems.idProductBrand) {
                  mock().typesProducts.forEach((listTypesProducts) => {
                    if (listTypesProducts.id ===  listItems.idtypeProduct) {
                      arrayResult00.push({
                        dateSales: listSales.date,
                        sellername: listSellers.name,
                        itemName: listItems.name,
                        TypesProductsName: listTypesProducts.name,
                        ProductBrandName: listProductBrand.name,
                        itemPrice: listItems.price,
                      });
                    }
                  });
                }
              });
            }
          });
        }
      }); */
    });

    const result = arrayResult00.filter(
        (number) =>
          number.itemName.toLowerCase().slice(0, selector.inputSearcher.length) ==
          selector.inputSearcher.toLowerCase()
      );


    return result;
  },
};

export default functionShowProducts;
