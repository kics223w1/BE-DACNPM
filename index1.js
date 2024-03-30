let products = [];

let index = 1;

const generateNumbers = () => {
  let num1 = Math.floor(Math.random() * products.length);
  let num2 = Math.floor(Math.random() * products.length);

  while (num1 === num2 || Math.abs(num1 - num2) >= 6) {
    num1 = Math.floor(Math.random() * products.length);
    num2 = Math.floor(Math.random() * products.length);
  }

  return [num1, num2];
};

fetch('http://localhost:3000/products')
  .then((response) => response.json())
  .then((data) => {
    products = data;

    console.log(products.length);

    // Call the generateNumbers function for each product
    products.forEach((product) => {
      const [num1, num2] = generateNumbers();

      let id_products = [];
      let product_prices = [];

      let st = Math.min(num1, num2);
      let en = Math.max(num1, num2);

      for (let i = st; i < en; i++) {
        id_products.push(products[i].id);
        product_prices.push(products[i].price);
      }

      const totalPrice = product_prices.reduce((acc, price) => acc + price, 0);

      fetch('http://localhost:3000/bills', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_user: 1,
          id_products,
          total_price: totalPrice,
          product_prices,
        }),
      });
    });
  });
