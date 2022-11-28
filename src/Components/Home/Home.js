import React from 'react';
import Categories from './Categories/Categories';
import Advertise from './Advertise/Advertise';
import Header from './Header';
import Content from  '../Home/Content/Content';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Categories></Categories>
            <Advertise></Advertise>
            <Content></Content>
            
        </div>
    );
};

export default Home;