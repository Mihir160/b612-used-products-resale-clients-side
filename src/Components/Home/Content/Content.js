import React from 'react';

const Content = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                    <div className="flex flex-col justify-center">
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                Apple iPhone 14 Pro

                            </h2>
                            <p className="text-base text-white md:text-lg">
                                Space Black, Silver, Gold, Deep Purple.Ceramic Shield front
                                Textured matte glass back and
                                stainless steel design
                            </p>
                        </div>
                        <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
                            <div className="text-white border-l-4 shadow-lg shadow-white rounded-lg   border-deep-purple-accent-400">
                                <div className="h-full p-5 border border-l-0 rounded-r">
                                    <h6 className="mb-2 font-semibold leading-5">
                                        Always-On display.
                                        Always at the ready.
                                    </h6>
                                    <p className="text-sm ">
                                        iPhone is also designed from the ground up to protect your privacy and put you in control of what you share and who you share it with
                                    </p>
                                </div>
                            </div>
                            <div className=" text-white border-l-4 shadow-lg shadow-white rounded-lg  border-deep-purple-accent-400">
                                <div className="h-full p-5 border border-l-0 rounded-r">
                                    <h6 className="mb-2 font-semibold leading-5">
                                        All-day
                                        battery life3
                                        even with so many
                                        new capabilities
                                    </h6>
                                    <p className="text-sm text-white">

                                        Now your Lock Screen is always glanceable, so you don’t even have to tap it to stay in the know.

                                        When iPhone is turned face down or in your pocket, it goes dark to save battery life.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img
                            className="object-cover w-full h-56 rounded shadow-lg shadow-white sm:h-96"
                            src="https://s.yimg.com/uu/api/res/1.2/Y0sdCqqSrXzmtFWgzjwgZg--~B/aD0xMzMzO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-09/280da9d0-33d8-11ed-beeb-9f0777e02779.cf.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;