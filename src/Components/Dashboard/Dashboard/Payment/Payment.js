import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK)
console.log(stripePromise)
const Payment = () => {
    const booking = useLoaderData()
    const { itemName, resalePrice } = booking
    return (
        <div>
            <div className="card w-96 lg:m-48 bg-base-100 shadow-xl shadow-white">
                <div className="card-body">
                    <h2 className="card-title">{itemName}</h2>
                    <p>Please pay your amount $ {resalePrice}</p>
                    <div>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm booking={booking} />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;