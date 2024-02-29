import axios from "axios";

export const fetchCategories = async () =>{

    const res = await axios.get(`https://fakestoreapi.com/products/categories`);
    return res.data;
}

export const fetchProducts = async () =>{
    const res= await axios.get(`https://fakestoreapi.com/products`);
    return res.data;
 }
 
 export const fetchProductsByCategory = async (category) =>{
     const res= await axios.get(`https://fakestoreapi.com/products/category/${category}`);
     return res.data;
    }
    
export const fetchCart = async () =>{
    const res= await axios.get(`https://fakestoreapi.com/carts/5`);
    return res.data;
    }

export const fetchProductById = async (productId) => {
        const response = await axios(`https://fakestoreapi.com/products/${productId}`);
            return response.data;
        };
