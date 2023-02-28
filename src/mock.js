const mock = () => {
  const productBrand = [
    { id: 0, name: "Panasonic" },
    { id: 1, name: "Sony" },
    { id: 2, name: "Polemic" },
    { id: 3, name: "Dc" },
    { id: 4, name: "Spitfire" },
    { id: 5, name: "Ehpale" },
    { id: 6, name: "Casa Pewu" },
  ];

  const sellers = [
    { id: 0, taxNumber: "18.181.222-2", name: "Cristobal Ortega" },
    { id: 1, taxNumber: "22.222.222-2", name: "Juanita Perez" },
    { id: 2, taxNumber: "18.181.222-2", name: "Andres Aviles" },
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
    {
      id: 9,
      idtypeProduct: 1,
      idProductBrand: 5,
      name: "Sofá 3 cuerpos ",
      price: 80200,
    },
    {
      id: 10,
      idtypeProduct: 1,
      idProductBrand: 5,
      name: "Silla nativa cuero",
      price: 45200,
    },
    {
      id: 11,
      idtypeProduct: 1,
      idProductBrand: 6,
      name: "Mesa comedor",
      price: 97560,
    },
    {
      id: 12,
      idtypeProduct: 1,
      idProductBrand: 6,
      name: "Silla terraza",
      price: 74800,
    },
    {
      id: 13,
      idtypeProduct: 1,
      idProductBrand: 6,
      name: "Sillon",
      price: 128000,
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
    { sellersId: 2, itemsId: 9, date: "2023-02-22" },
    { sellersId: 1, itemsId: 10, date: "2023-02-02" },
    { sellersId: 0, itemsId: 12, date: "2023-02-02" },
    { sellersId: 1, itemsId: 11, date: "2023-02-03" },
    { sellersId: 1, itemsId: 13, date: "2023-02-04" },
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
