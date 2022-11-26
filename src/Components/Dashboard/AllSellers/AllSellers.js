import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';


const AllSellers = () => {

    const roleType = 'Seller'
    const url = `http://localhost:5000/users?role=${roleType}`;

    const { data: seller = [], refetch } = useQuery({
        queryKey: ['role', roleType],
        queryFn: async () => {
            const res = await fetch(url, {
            });
            const data = await res.json();
            return data;
        }
    })
  
    const sellerDelete = seller =>{
        console.log(seller)
        fetch(`http://localhost:5000/users/${seller._id}`,{
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
                toast.success('deleted seller')
            }
   
        })
        
    }
    return (
        <div>
            
            <div>
                <h2 className="text-3xl mb-4">All Sellers</h2>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                seller.map((userSeller, i) => <tr key={userSeller._id}>
                                    <th>{i + 1}</th>
                                    <td>{userSeller.name}</td>
                                    <td>{userSeller.email}</td>
                                    <td><button onClick={() => sellerDelete(userSeller)} className='btn btn-xs btn-danger'>Delete</button></td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllSellers;