import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Others/AuthProvider';

const Modal = ({ treatment, selected, refetch }) => {
    const { user } = useContext(AuthContext)
    const handleBooking = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const slot = form.slot.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
            appointmentDate: format(selected, 'PP'),
            treatment: treatment?.name,
            patient: name,
            slot,
            email,
            phone,
            price: treatment?.price,
        };
        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Booking confirmed')
                    refetch();
                }
                else {
                    toast.error(`you already added this `)
                }
            })
    }
    return (
        <div>

            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold py-4">{treatment?.name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4'>
                        <input type="text" value={format(selected, 'PP')} className="input input-bordered w-full " disabled />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                treatment?.slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input readOnly defaultValue={user?.displayName ? user?.displayName : 'Default Name'} name='name' type="text" placeholder="Your name" className="input input-bordered w-full " />
                        <input disabled defaultValue={user?.email} name='email' type="text" placeholder="Email address" className="input input-bordered w-full " />
                        <input required name='phone' type="text" placeholder="Phone number" className="input input-bordered w-full " /> <br />
                        <input className='btn btn-accent w-full ' type="submit" value='Submit' />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Modal;