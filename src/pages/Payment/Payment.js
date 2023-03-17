import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51M6AoIBSIlSsQgf2OlG5Vk0G8Y2lZfviCeidT0uD67RiiGjNRwpzho0jeUeVCQm21EWfw9x1kbRyrgnBsJ225Mxq00exB8m28L');
const Payment = () => {
    const data = useLoaderData()

    const { appointmentDate, treatment, slot, price } = data;


    return (
        <div>
            <h3 className="text-3xl text-center py-4 text-secondary">Please complete your payment for <span className='font-bold text-primary'> {treatment}</span></h3>
            <h3 className="text-3xl text-center py-4">Please pay <span className='font-bold text-primary'> {price}Tk</span> For Your Appointment on {appointmentDate} at{slot} </h3>

            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={data} />
                </Elements>
            </div>
        </div>

    );
};

export default Payment;