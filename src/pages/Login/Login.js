import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Others/AuthProvider';

const Login = () => {
    const [loginUserEmail, setLoginUserEmail] = useState('')
    const { register, handleSubmit } = useForm();
    const { logIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handlelogin = data => {
        logIn(data.email, data.password)
            .then(res => {
                const user = res.user;
                toast.success('Login successful')
                navigate(from, { replace: true })
                setLoginError('')

            })
            .catch(err => setLoginError(err.message))
    }
    return (
        <div className='h-[500px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-3xl font-bold'>Log in</h2>
                <form onSubmit={handleSubmit(handlelogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">Email</label>
                        <input type="email" {...register("email", { required: true })} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">Password</label>
                        <input type="password" {...register("password", { required: true })} className="input input-bordered w-full max-w-xs" />
                        <label className="label">Forget Password</label>
                    </div>
                    <input className='btn btn-accent w-full' type="submit" value='Login' />
                </form>
                <p className='text-red-600'>{loginError}</p>
                <p>New to doctors Portal  <Link to='/signup' className='text-secondary'>Create an Account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;


