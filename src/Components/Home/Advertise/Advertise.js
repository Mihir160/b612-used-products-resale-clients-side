import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BookingModal from '../../Products/BookingModal';
import AdvertiseCard from './AdvertiseCard'
const Advertise = () => {
    const [advertisedItems, setAdvertisedItems] = useState();

    useEffect(() => {
        axios.get("http://localhost:5000/advertisedItems").then((data) => {

            setAdvertisedItems(data.data);
        });
    }, []);
  
    return (
        <div >
            {advertisedItems && (
                <h2 className="text-3xl my-10 text-center">
                    Advertised Items:{advertisedItems.length}
                </h2>
            )}
         <div className="grid gap-6 grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3  mt-12 mb-12">
         {advertisedItems &&
                advertisedItems.map((advertisedItem) => (
                    <AdvertiseCard key={advertisedItem._id}
                    advertisedItem={advertisedItem}></AdvertiseCard>

                ))}
         </div>

        </div>
    );
};

export default Advertise;