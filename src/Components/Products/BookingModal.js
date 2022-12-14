import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../contexts/AuthProvider';

const BookingModal = ({booking}) => {
    const {user} = useContext(AuthContext)
    const {title, resale_price,_id, image} = booking
   
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value
        const itemName = form.itemName.value;
        const resalePrice = form.resalePrice.value
        const phone = form.phone.value
        const location = form.location.value
        const bookingId = _id
        const booking = {
            userName: name,
            email,
            itemName,
            resalePrice,
            phone,
            location,
            bookingId,
            image
        }
        fetch('https://b612-used-products-resale-server-side-eight.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                  
                    toast.success('Booking confirmed');
                }
                else{
                    toast.error(data.message);
                }
            })





    }


    return (
        <>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <form onSubmit={handleBooking}  className='grid grid-cols-1 gap-3 mt-10'>
                 
                    <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered shadow-sm shadow-white" />
                    <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full shadow-sm shadow-white input-bordered" />
                    <input name="itemName" type="text" defaultValue={title} disabled placeholder="Item name" className="input w-full input-bordered shadow-sm shadow-white" />
                    <input name="resalePrice" type="text" defaultValue= {resale_price} disabled placeholder="Resale price" className="input w-full input-bordered shadow-sm shadow-white" />
                    <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered shadow-sm shadow-white" />
                    <input name="location" type="text" placeholder="Meeting Location"  className="input w-full input-bordered shadow-sm shadow-white" />
                    <br />
                    <input className='btn bg-orange-800 text-white w-full' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    </>
    );
};

export default BookingModal;