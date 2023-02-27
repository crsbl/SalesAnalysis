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
    });

    let start = new Date(selector.date.startDate);
    let finish = new Date(selector.date.finishDate);

    arrayResult00 = arrayResult00.filter(
      (number) =>
        number.itemName.toLowerCase().slice(0, selector.inputSearcher.length) ==
        selector.inputSearcher.toLowerCase()
    );

    if (selector.date.state === true) {
      arrayResult00 = arrayResult00.filter(
        (list) =>
          start.getTime() <= new Date(list.dateSales).getTime() &&
          new Date(list.dateSales).getTime() <= finish.getTime()
      );
    }

    if (selector.price.state === true) {
      arrayResult00 = arrayResult00.filter(
        (list) =>
          parseInt(selector.price.startPrice) <= parseInt(list.itemPrice) &&
          parseInt(list.itemPrice) <= parseInt(selector.price.finishPrice)
      );
    }

    switch (selector.organizeByComboBox.selection) {
      case 0:
        arrayResult00 = arrayResult00.sort((a, b) => {
          if (a.itemName > b.itemName) {
            return 1;
          }
          if (a.itemName < b.itemName) {
            return -1;
          }
          return 0;
        });
        break;
      case 1:
        arrayResult00 = arrayResult00.sort((a, b) => {
          if (parseInt(a.itemPrice) > parseInt(b.itemPrice)) {
            return 1;
          }
          if (parseInt(a.itemPrice) < parseInt(b.itemPrice)) {
            return -1;
          }
          return 0;
        });
        break;
      case 2:
        arrayResult00 = arrayResult00.sort((a, b) => {
          if (parseInt(a.itemPrice) < parseInt(b.itemPrice)) {
            return 1;
          }
          if (parseInt(a.itemPrice) > parseInt(b.itemPrice)) {
            return -1;
          }
          return 0;
        });
        break;
      case 3:
        break;
      default:
        break;
    }

    return arrayResult00;
  },
};

export default functionShowProducts;
