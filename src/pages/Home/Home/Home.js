import React from 'react';
import Banner from '../Banner/Banner';
import ConnectForm from '../ConnectForm/ConnectForm';
import Info from '../Info/Info';
import MakeApoinment from '../MakeApoinment/MakeApoinment';
import OurServices from '../OurServices/OurServices';
import Tesimonial from '../Tesimonial/Tesimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Info></Info>
            <OurServices></OurServices>
            <MakeApoinment></MakeApoinment>
            <Tesimonial></Tesimonial>
            <ConnectForm></ConnectForm>
        </div>
    );
};

export default Home;