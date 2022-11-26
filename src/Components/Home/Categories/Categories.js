import React from 'react';
import {useQuery} from '@tanstack/react-query'
import Category from './Category';
const Categories = () => {
    const {data: categories=[] } = useQuery ({
        queryKey:['categories'],
        queryFn: async () =>{
            const res = await fetch('http://localhost:5000/categories')
            const data = await res.json()
            return data
        }
    })
  
    return (
        <div>
            
            <div className='grid gap-6 grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3  mt-12 mb-12'>
                {
                    categories.map((category) => <Category key={category._id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;