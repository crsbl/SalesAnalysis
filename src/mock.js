const mock = () => {
  const productBrand = [
    { id: 0, name: "Panasonic" },
    { id: 1, name: "Sony" },
    { id: 2, name: "Polemic" },
    { id: 3, name: "Dc" },
  ];

  const sellers = [
    { id: 0, taxNumber: "18.181.222-2", name: "Cristobal" },
    { id: 1, taxNumber: "22.222.222-2", name: "Juanita" },
    { id: 2, taxNumber: "18.181.222-2", name: "Andres" },
  ];

  const typesProducts = [
    { id: 0, name: "Electrodomesticos" },
    { id: 1, name: "Muebles" },
    { id: 2, name: "Prendas de vestir" },
    { id: 3, name: "Calzado" },
  ];

  const items = [
    {
      id: 0,
      idtypeProduct: 3,
      idProductBrand: 3,
      name: "Zapatilla negras",
      price: 2400,
    },
    {
      id: 1,
      idtypeProduct: 3,
      idProductBrand: 3,
      name: "Zapatilla rojas",
      price: 2400,
    },
    {
      id: 2,
      idtypeProduct: 3,
      idProductBrand: 3,
      name: "Zapatilla blancas",
      price: 2400,
    },
    {
      id: 3,
      idtypeProduct: 0,
      idProductBrand: 0,
      name: "Smart tv 42",
      price: 2400,
    },
    {
      id: 4,
      idtypeProduct: 0,
      idProductBrand: 0,
      name: "Smart tv 22",
      price: 2400,
    },
  ];

  const sales = [
    { sellersId: 0, itemsId: 3, date: "23-02-2023" },
    { sellersId: 0, itemsId: 0, date: "25-02-2023" },
    { sellersId: 1, itemsId: 3, date: "26-02-2023" },
    { sellersId: 1, itemsId: 2, date: "27-02-2023" },
    { sellersId: 1, itemsId: 0, date: "28-02-2023" },
    { sellersId: 2, itemsId: 3, date: "29-02-2023" },
    { sellersId: 2, itemsId: 4, date: "0-02-2023" },
  ];

  return {
    productBrand,
    sellers,
    typesProducts,
    sales,
    items,
  };
};

export default mock;
