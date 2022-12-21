import React from 'react';
import Categories from './Categories/Categories';
import Advertise from './Advertise/Advertise';
import Header from './Header';
import Content from  '../Home/Content/Content';
import SellStep from './SellStep/SellStep';
import Review from './Review/Review';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Categories></Categories>
            <Advertise></Advertise>
            <Content></Content>
            <SellStep></SellStep>
            <Review></Review>
            
        </div>
    );
};

export default Home;