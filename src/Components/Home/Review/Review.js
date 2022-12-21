import React from 'react';
import img1 from '../../../image/003-calendar.png'
import img2 from '../../../image/001-quality.png'
import img3 from '../../../image/002-rating.png'
import img4 from '../../../image/001-people.png'
import img5 from '../../../image/002-smartphone-call.png'
import img6 from '../../../image/003-order.png'
const Review = () => {
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-2xl font-bold'>Loved by customers, represented by numbers</h1>
            </div>
            <div>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="p-8 border-b sm:border-r">
                            <div className="max-w-md text-center">
                                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full  sm:w-16 sm:h-16">
                                    <img src={img1} alt="" srcset="" />
                                </div>
                                <h6 className="mb-2 font-semibold leading-5">Established Date</h6>
                                <p className="mb-3 text-sm">
                                    July 2022
                                </p>
                            </div>
                        </div>
                        <div className="p-8 border-b lg:border-r">
                            <div className="max-w-md text-center">
                                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full  sm:w-16 sm:h-16">
                                    <img src={img2} alt="" srcset="" />
                                </div>
                                <h6 className="mb-2 font-semibold leading-5">Alexa Ranking</h6>
                                <p className="mb-3 text-sm">
                                    #2 in C2B Buyback Bangladesh
                                </p>
                            </div>
                        </div>
                        <div className="p-8 border-b sm:border-r lg:border-r-0">
                            <div className="max-w-md text-center">
                                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full sm:w-16 sm:h-16">
                                    <img src={img3} alt="" sizes="" srcset="" />
                                </div>
                                <h6 className="mb-2 font-semibold leading-5">Google Reviews Ranking</h6>
                                <p className="mb-3 text-sm ">
                                    4.2
                                </p>
                            </div>
                        </div>
                        <div className="p-8 border-b lg:border-b-0 lg:border-r">
                            <div className="max-w-md text-center">
                                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full sm:w-16 sm:h-16">
                                    <img src={img4} alt="" srcset="" />
                                </div>
                                <h6 className="mb-2 font-semibold leading-5">Total Customers</h6>
                                <p className="mb-3 text-sm ">
                                    233 Thousand
                                </p>
                            </div>
                        </div>
                        <div className="p-8 border-b sm:border-b-0 sm:border-r">
                            <div className="max-w-md text-center">
                                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full sm:w-16 sm:h-16">
                                    <img src={img5} alt="" srcset="" />
                                </div>
                                <h6 className="mb-2 font-semibold leading-5">Total Devices</h6>
                                <p className="mb-3 text-sm ">
                                    231 Thousand
                                </p>
                            </div>
                        </div>
                        <div className="p-8">
                            <div className="max-w-md text-center">
                                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full  sm:w-16 sm:h-16">
                                <img src={img6} alt="" srcset="" />
                                </div>
                                <h6 className="mb-2 font-semibold leading-5">
                                    Total Orders Value</h6>
                                <p className="mb-3 text-sm">
                                143 crores
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;