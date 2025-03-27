import productData from "../utils/productData";

//  using promise with timeout to mimic an API call
const fetchProducts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productData);
    }, 1000);
  });
};

export default fetchProducts;
