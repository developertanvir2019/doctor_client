import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const navigate = useNavigate();
    const imgHostKey = process.env.REACT_APP_imgbb_key;
    console.log(imgHostKey)
    const { register, handleSubmit } = useForm();
    const { data: special, isLoading } = useQuery({
        queryKey: ['special'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/special')
            const data = await res.json();
            return data
        }
    })
    const handleAddDoctor = data => {
        const img = data.img[0];
        const formData = new FormData();
        formData.append('image', img);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.special,
                        img: imgData.data.url
                    }
                    //save doctors information in database..
                    fetch('http://localhost:5000/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            toast.success('Doctor added successfully')
                            navigate('/dashboard/manageDoctors')
                        })
                }
            })

    }
    return (
        <div className='w-96 p-7'>
            <h3 className='text-3xl'>Add Doctor</h3>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">Name</label>
                    <input type="text" {...register("name")} className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">Email</label>
                    <input type="email" {...register("email", { required: true })} className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">Specialty</label>
                    <select
                        {...register("special")}
                        className="select select-bordered w-full max-w-xs my-3">
                        <option disabled selected>Select a specialty</option>
                        {
                            special?.map(sp => <option key={sp._id}>{sp.name}</option>)
                        }
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">Add a photo</label>
                    <input type="file" {...register("img", { required: 'image is must needed' })} className="input input-bordered w-full max-w-xs" />
                </div>
                <input className='btn btn-accent w-full my-3' type="submit" value='Add Doctor' />
            </form>
        </div>
    );
};

export default AddDoctor;