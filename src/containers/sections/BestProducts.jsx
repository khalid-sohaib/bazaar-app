import React from 'react';
import { useQuery } from 'react-query';
import BestProduct from '../../sections/BestProduct';
import { fetchProducts } from '../../utils/Api';

export default function BestProductsContainer() {

    const queryKey = 'productsKey';
    const {data  : products, isLoading, isError, error} = useQuery(queryKey, fetchProducts);
    


  return (
    <BestProduct
        products={products}
        isLoading={isLoading}
        isError={isError}
        error={error}
    />
  )
}
