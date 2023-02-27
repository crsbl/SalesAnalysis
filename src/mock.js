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
    { id: 0, name: "tecnología" },
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
      price: 24000,
    },
    {
      id: 1,
      idtypeProduct: 3,
      idProductBrand: 3,
      name: "Zapatilla rojas",
      price: 25000,
    },
    {
      id: 2,
      idtypeProduct: 3,
      idProductBrand: 3,
      name: "Zapatilla blancas",
      price: 20000,
    },
    {
      id: 3,
      idtypeProduct: 0,
      idProductBrand: 0,
      name: "Smart tv 42",
      price: 22500,
    },
    {
      id: 4,
      idtypeProduct: 0,
      idProductBrand: 0,
      name: "Smart tv 22",
      price: 285000,
    },
    {
      id: 5,
      idtypeProduct: 2,
      idProductBrand: 2,
      name: "Jeans mujer",
      price: 38900,
    },
    {
      id: 6,
      idtypeProduct: 2,
      idProductBrand: 2,
      name: "Jeans hombre",
      price: 31750,
    },
    {
      id: 7,
      idtypeProduct: 0,
      idProductBrand: 1,
      name: "Parlante pequeño",
      price: 156000,
    },
    {
      id: 8,
      idtypeProduct: 0,
      idProductBrand: 1,
      name: "Audifonos",
      price: 12200,
    },
  ];

  const sales = [
    { sellersId: 0, itemsId: 3, date: "2023-02-12" },
    { sellersId: 1, itemsId: 2, date: "2023-02-20" },
    { sellersId: 1, itemsId: 0, date: "2023-02-10" },
    { sellersId: 2, itemsId: 4, date: "2023-02-11" },
    { sellersId: 1, itemsId: 5, date: "2023-02-09" },
    { sellersId: 1, itemsId: 6, date: "2023-02-08" },
    { sellersId: 0, itemsId: 7, date: "2023-02-22" },
    { sellersId: 0, itemsId: 8, date: "2023-02-02" },
    { sellersId: 0, itemsId: 8, date: "2023-02-02" },
    { sellersId: 1, itemsId: 1, date: "2023-02-03" },
    { sellersId: 1, itemsId: 1, date: "2023-02-04" },
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
