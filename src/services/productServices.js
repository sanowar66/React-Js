const getProduct = () => {
 return( [
    { id: 1, name: "Laptop", price: 120000, quantity: 10 },
    { id: 2, name: "Computer", price: 90000, quantity: 5 },
    { id: 3, name: "Monitor", price: 20000, quantity: 15 },
  ]
 )
};

export const productServices = {
  getProduct
};
