import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Button } from 'react-day-picker';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Others/AuthProvider';

const MyAppointment = () => {
    const { user } = useContext(AuthContext)
    const uri = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(uri);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h3 className='text-3xl'>My Appointments</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((book, i) => <tr key={i}>
                                <th>{i + 1}</th>
                                <td>{book.patient}</td>
                                <td>{book.treatment}</td>
                                <td>{book.appointmentDate}</td>
                                <td>{book.slot}</td>
                                {
                                    book.price && !book.paid && <td><Link to={`/dashboard/payment/${book._id}`}><button className='btn btn-primary'>pay</button></Link></td>
                                }
                                {
                                    book.price && book.paid && <span className='text-success'>Paid</span>
                                }
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;