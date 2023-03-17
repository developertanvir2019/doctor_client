import React from 'react';
import background from '../../../assets/images/appointment.png';

const ConnectForm = () => {
    return (
        <section
            className='text-center py-12'
            style={{
                background: `url(${background})`
            }}
        >
            <h4 className="text-2xl text-secondary font-bold">Contact Us</h4>
            <h4 className="text-3xl text-white font-bold py-3 mb-12">Stay connected with us</h4>
            <div className='flex justify-center'>

                <form>
                    <input type="text" placeholder="Email Address" className="input input-bordered input-sm w-full my-3" /> <br />
                    <input type="text" placeholder="Subject" className="input input-bordered input-sm w-full my-3" /> <br />
                    <textarea className="textarea textarea-primary" placeholder="Your message"></textarea> <br />
                    <button type='submit' className='btn btn-primary mt-5'>Submit</button>

                </form>
            </div>

        </section>
    );
};

export default ConnectForm;