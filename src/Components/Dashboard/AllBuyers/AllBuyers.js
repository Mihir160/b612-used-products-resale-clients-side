import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {
    const roleType = 'Buyer'
    const url = `http://localhost:5000/users?role=${roleType}`;

    const { data: Buyers = [], refetch } = useQuery({
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
                toast.success('deleted buyers')
            }
   
        })
        
    }
    return (
        <div>

            <div>
                <h2 className="text-3xl mb-4">All Buyers</h2>
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
                                Buyers.map((userBuyer, i) => <tr key={userBuyer._id}>
                                    <th>{i + 1}</th>
                                    <td>{userBuyer.name}</td>
                                    <td>{userBuyer.email}</td>
                                    <td><button onClick={() => sellerDelete(userBuyer)} className='btn btn-xs btn-danger'>Delete</button></td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllBuyers;