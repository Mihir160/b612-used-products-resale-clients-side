import React from 'react';
import img1 from '../../../image/price-list.png'
import img2 from '../../../image/003-pickup-truck.png'
import img3 from '../../../image/001-pay.png'
const SellStep = () => {
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-2xl font-bold'>Sell Old Mobile Phone for Instant Cash</h1>
                <p className=''>We buy old used new second hand Mobile Phones  in just 3 easy steps</p>
            </div>
            <div>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
                        <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">

                            <div className="relative p-5 text-white  rounded-sm">
                                <div className="">
                                    <img className='w-20 h-20 ' src={img1} alt="" srcset="" />

                                </div>
                                <div className='flex items-center gap-4 mt-2'>
                                    <p className='btn btn-circle btn-sm bg-white text-black'>1</p>
                                    <p> Check Price</p>
                                </div>
                                <p className="mb-2 text-sm mt-2">
                                    Provide device details and get the best price through our advanced pricing engine.
                                </p>

                            </div>
                        </div>
                        <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">

                            <div className="relative p-5 text-white  rounded-sm">
                                <div className="">
                                    <img className='w-20 h-20 ' src={img2} alt="" srcset="" />

                                </div>
                                <div className='flex items-center gap-4 mt-2'>
                                    <p className='btn btn-circle btn-sm bg-white text-black'>2</p>
                                    <p> Schedule Pickup</p>
                                </div>
                                <p className="mb-2 text-sm mt-2">
                                Free pickup from your home or office address as per your chosen date and time slot.
                                </p>

                            </div>
                        </div>
                        <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">

                            <div className="relative p-5 text text-white  rounded-sm">
                                <div className="">
                                    <img className='w-20 h-20 ' src={img3} alt="" srcset="" />

                                </div>
                                <div className='flex items-center gap-4 mt-2'>
                                    <p className='btn btn-circle btn-sm bg-white text-black'>3</p>
                                    <p> Get Paid</p>
                                </div>
                                <p className="mb-2 text-sm mt-2">
                                Instant and 100% onspot secure payment at the time of device pickup.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellStep;