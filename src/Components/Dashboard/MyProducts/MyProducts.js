import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const MyProducts = () => {
    const {user} = useContext(AuthContext)

    
    const {data : myProducts, refetch} = useQuery({
        queryKey: ['myProducts', user?.email],
        queryFn: async () => {
           try{
            const res = await fetch(`http://localhost:5000/product?email=${user?.email}`,)
            const data = await res.json();
            return data; 
           }
           catch(error){

           }
        }
    })

    console.log(myProducts)

    const deleteMyProduct = myproduct =>{
     
        fetch(`http://localhost:5000/products/${myproduct}`,{
            method: 'DELETE',
            headers:{
                // 'content-type': 'application/json', 
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                refetch()
                toast.success('deleted myproduct')
            }
   
        })
        
    }
    

    const advertiseProduct = myproduct =>{
        console.log(myproduct)
        fetch('http://localhost:5000/advertise',{
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(myproduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            toast.success('suceesfully advitise')
        })

    }
    return (
        <div>
            <div>
                <h2 className="text-3xl mb-4">My Products</h2>
                <div className="overflow-x-auto">
                    <table className="table lg:w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Advertise</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myProducts?.map((myproduct, i) => <tr key={myproduct._id}>
                                    <th>{i + 1}</th>
                                    <td><img className='w-24 ' src={myproduct.image} alt="" srcset="" /></td>
                                    <td>{myproduct.title}</td>
                                    <td>{myproduct.resale_price}</td>
                                    <td><button onClick={() => advertiseProduct(myproduct)} className='btn btn-xs bg-green-600'>Advertise</button></td>
                                    <td><button  onClick={() => deleteMyProduct(myproduct._id)} className='btn btn-xs bg-red-600'>Delete</button></td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyProducts;