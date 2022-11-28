import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import WishlistCheckout from './WishlistCheckout';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK)
const WishlistPayment = () => {

    const wishlist = useLoaderData()
    const {itemName,resalePrice } =  wishlist
    return (
        <div>
            <div className="card w-96 lg:m-48 bg-base-100 shadow-xl shadow-white">
                <div className="card-body">
                    <h2 className="card-title">{itemName}</h2>
                    <p>Please pay your amount $ {resalePrice}</p>
                    <div>
                        <Elements stripe={stripePromise}>
                            <WishlistCheckout wishlist={wishlist} />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishlistPayment;