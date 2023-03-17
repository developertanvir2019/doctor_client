import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import phone from '../../../assets/icons/phone.svg'
import marker from '../../../assets/icons/marker.svg'

const Info = () => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
            <div className="card card-side my-3 bg-primary px-2 mx-4 text-white shadow-xl">
                <figure><img className='pl-3' src={clock} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Opening Hours!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                </div>
            </div>
            <div className="card card-side my-3 bg-accent px-2 mx-4 text-white shadow-xl">
                <figure><img className='pl-3' src={marker} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Visit our location.</h2>
                    <p>Brooklyn, NY 10036, United States.</p>
                </div>
            </div>
            <div className="card card-side my-3 bg-primary px-2 mx-4 text-white shadow-xl">
                <figure><img className='pl-3' src={phone} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Contact us now.</h2>
                    <p>developertanvir2019@gamil.com</p>
                </div>
            </div>
        </div>
    );
};

export default Info;