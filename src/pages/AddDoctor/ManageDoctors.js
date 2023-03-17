import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import ConfirmModal from './ConfirmModal';

const ManageDoctors = () => {

    const [deleteDoctor, setDeleteDoctor] = useState(null);
    const closeModal = () => {
        setDeleteDoctor(null)
    }
    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/doctors', {
                    headers: {

                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });
    const handleDeleteDoctor = doctor => {
        fetch(`http://localhost:5000/doctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {

            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch()
            })
    }
    return (
        <div>
            <h3 className='text-4xl font-bold py-4 text-primary text-center'>Manage Doctors {doctors?.length}</h3>

            <table className="table w-full">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Specialty</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        doctors?.map((user, i) => <tr key={i}>
                            <td>{i + 1}</td>
                            <td> <img src={user?.img} alt="" /></td>
                            <td className='font-bold'>{user?.name}</td>
                            <td className='font-bold'>{user.specialty}</td>
                            <td>  <label onClick={() => setDeleteDoctor(user)} htmlFor="confirmModal" className="btn btn-error">Delete</label></td>

                        </tr>)
                    }

                </tbody>
            </table>


            {
                deleteDoctor && <ConfirmModal
                    title={`Are you sure want to delete?`}
                    message={`If you delete ${deleteDoctor?.name} . It cannot be undone`}
                    closeModal={closeModal}
                    success={handleDeleteDoctor}
                    modalData={deleteDoctor}
                >

                </ConfirmModal>
            }

        </div>
    );
};

export default ManageDoctors;