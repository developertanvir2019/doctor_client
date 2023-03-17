import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Options from './Options';
import Modal from './Modal';
import { useQuery } from '@tanstack/react-query';

const Available = ({ selected }) => {
    // const [appointment, setAppointment] = useState([])
    const [treatment, setTreatment] = useState(null);
    const date = format(selected, 'PP')
    console.log(selected);
    const { data: appointment = [], refetch } = useQuery({
        queryKey: ['appointment', date],
        queryFn: () => fetch(`http://localhost:5000/appointmentOption?date=${date}`)
            .then(res => res.json())
    })
    // useEffect(() => {
    //     fetch('http://localhost:5000/appointmentOption')
    //         .then(res => res.json())
    //         .then(data => setAppointment(data))
    // }, [])
    return (
        <div>
            <p className='text-secondary text-center font-bold text-2xl my-12 pt-14'>Available Appointments on You picked {format(selected, 'PP')}.</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5'>
                {
                    appointment.map(appoin => <Options key={appoin._id} appoin={appoin} setTreatment={setTreatment}></Options>)
                }
            </div>
            <Modal refetch={refetch} selected={selected} treatment={treatment}></Modal>
        </div>
    );
};

export default Available;