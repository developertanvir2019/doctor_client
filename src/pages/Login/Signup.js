import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useToken from './useToken';

import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Others/AuthProvider';

const Signup = () => {
    const [createUserEmail, setCreateUserEmail] = useState('')
    const [token] = useToken(createUserEmail);
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm();
    const { passwordSingUp, updateUser } = useContext(AuthContext)
    const handleSignup = data => {
        passwordSingUp(data.email, data.password)
            .then(result => {
                const user = result.user;
                const userInfo = {
                    displayName: data.name,
                }
                console.log(userInfo)
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email)
                    })
                    .catch(err => console.log(err))

            })
            .catch(err => console.log(err))
    }
    const saveUser = (name, email) => {
        const user = { name, email };
        console.log(user)
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreateUserEmail(email)
            })


    }


    return (
        <div className='h-[500px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-3xl font-bold pt-12'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">Name</label>
                        <input type="text" {...register("email")} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">Email</label>
                        <input type="email" {...register("email", { required: true })} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">Password</label>
                        <input type="password" {...register("password", { required: 'password must be needed' })} className="input input-bordered w-full max-w-xs" />
                        <label className="label">Forget Password</label>
                    </div>
                    <input className='btn btn-accent w-full' type="submit" value='Signup' />
                </form>
                <p>already have an account?  <Link to='/login' className='text-secondary'>Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default Signup;