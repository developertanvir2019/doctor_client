import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import apoinment from '../../../assets/images/appointment.png'

const MakeApoinment = () => {
    return (
        <section className='mt-32' style={{
            background: `url(${apoinment})`
        }}
        >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className="lg:w-1/2 rounded-lg -mt-32 hidden lg:block " alt='' />
                    <div>
                        <h5 className='text-secondary text-2xl font-bold py-2'>Appointment</h5>
                        <h1 className="text-4xl font-bold text-white">Make an appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary text-white font-bold">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeApoinment;