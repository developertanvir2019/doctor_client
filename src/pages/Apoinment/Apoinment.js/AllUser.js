import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUser = () => {
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users`)
            const data = await res.json();
            return data;
        }
    })

    const handleMakeAdmit = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <div>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Make admin</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, i) => <tr key={i}>
                            <th>{i + 1}</th>
                            <td>{user?.name}</td>
                            <td>{user.email}</td>
                            <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmit(user._id)} className="btn btn-primary">Make Admin</button>}</td>
                            <td><button className="btn btn-danger">Delete</button> </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllUser;