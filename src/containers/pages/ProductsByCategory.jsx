import React, { useEffect } from 'react'
import ProductsByCategory from '../../pages/productsByCategory/ProductsByCategory';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchProductsByCategory } from '../../utils/Api';

export default function ProductsByCategoryContainer() {
  const location = useLocation();
  const category = location.state?.category || 'jewelery';
  // const [products, setProducts] = useState([]);
  const queryKey = ['products', category]; 
  const { data: products, isLoading, isError, error, refetch } = useQuery(
    queryKey,
    () => fetchProductsByCategory(category)
  );

  const length = products?.length || 0;

  useEffect(() => {
    window.scrollTo(0, 0);

    // Update products when the category changes
    refetch();
  }, [category, refetch]);

  return (
    <ProductsByCategory
      category={category}
      products={products}
      isLoading={isLoading}
      isError={isError}
      error={error}
      length={length}
    />
  )
}
