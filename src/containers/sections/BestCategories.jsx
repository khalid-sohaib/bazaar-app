import React from 'react'
import { fetchCategories } from '../../utils/Api';
import { Box } from '@mui/material';
import { useQuery } from 'react-query';

import BestCategories from '../../sections/BestCategories'

export default function BestCategoriesContainer() {
    const querykey = 'category';
    const {data: categories, isLoading, isError, error} = useQuery(querykey, fetchCategories);
    console.log("categories", categories)
   
  return (
    <Box>
        <BestCategories
            categories={categories}
            isLoading={isLoading}
            isError={isError}
            error={error}
        />
    </Box>
  )
}
