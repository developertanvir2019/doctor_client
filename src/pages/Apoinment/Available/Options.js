import React from 'react';

const Options = ({ appoin, setTreatment }) => {
    const { name, slots, price } = appoin;
    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <h2 className="text-2xl text-secondary text-center">{name}</h2>
                <p className='text-center'>{slots.length > 0 ? slots[0] : 'Try another day'}</p>
                <p className='text-center'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                <p className='text-2xl text-center'>price :{price}</p>
                <div className="card-actions justify-center my-4">
                    <label onClick={() => setTreatment(appoin)} htmlFor="my-modal-3" className="btn btn-primary text-white">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Options;