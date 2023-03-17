import React from 'react';

const Review = ({ data }) => {
    const { name, img, review, location } = data;
    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <p>{review}</p>
                <div className="flex items-center justify-evenly mt-4">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img alt='' src={img} />
                        </div>
                    </div>
                    <div>
                        <h5 className="text-lg">{name}</h5>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;