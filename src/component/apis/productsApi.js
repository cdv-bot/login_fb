// api/productApi.js
import axiosClient from './axiosClient';

class ProductApi {
  getNam = (params) => {
    const url = '/api/product_nam';
    return axiosClient.get(url, { params });
  };
  get = (id) => {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  };
}
const productApi = new ProductApi();
export default productApi;