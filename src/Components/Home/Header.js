import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://cdn.vox-cdn.com/uploads/chorus_asset/file/24002874/Apple_iPhone_14_Pro_iPhone_14_Pro_Max_hero_220907.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Iphone 14 Pro Max</h1>
                        <p className="mb-5">Released 2022, September 16 </p>
                        <button className="btn btn-primary">Iphone</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Header;