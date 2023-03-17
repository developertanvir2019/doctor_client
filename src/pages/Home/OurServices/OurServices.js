import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import treatement from '../../../assets/images/treatment.png'


const OurServices = () => {
    return (
        <div className='my-14'>
            <h3 className='text-2xl text-center my-3 text-primary font-bold'>OUR SERVICES</h3>
            <h3 className='text-3xl text-center my-3 font-bold'>Services We Provide</h3>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                <div className="card w-96 bg-base-100 shadow-xl my-3 mx-4">
                    <figure className="px-10 pt-10">
                        <img src={fluoride} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Fluoride Treatment</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl my-3 mx-4">
                    <figure className="px-10 pt-10">
                        <img src={cavity} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Cavity Filling</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl my-3 mx-4">
                    <figure className="px-10 pt-10">
                        <img src={whitening} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Teeth Whitening</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
            </div>

            <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-14 mx-5 px-14 my-14 pt-10 max-w-full'>
                <div className='lg:w-3/4'>
                    <img src={treatement} alt="" />
                </div>
                <div className='lg:pt-10'>
                    <div>
                        <h2 className='text-4xl font-bold mb-5'>Exceptional Dental Care, on Your Terms</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className='btn btn-primary text-white font-bold mt-5 ml-0'>Get Start</button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default OurServices;