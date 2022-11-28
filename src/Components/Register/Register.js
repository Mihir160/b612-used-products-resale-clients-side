import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useToken from '../Hooks/useToken';
const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail)
    const navigate = useNavigate();
    if (token) {
        navigate('/')
    }
    const handleSignUp = (data) => {

        setSignUPError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully.')

                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        userSave(data.name, data.email, data.role);
                    })
                    .catch(err => console.log(err));

            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
    }

    const userSave = (name, email, role) => {
        const user = { name, email, role }
        fetch('https://b612-used-products-resale-server-side-eight.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email)

            })

    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl shadow-white bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(handleSignUp)}>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label"> <span className="label-text">Name</span></label>
                                    <input type="text" {...register("name", {
                                        required: "Name is Required"
                                    })} className="input input-bordered w-full max-w-xs" />
                                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label"> <span className="label-text">Email</span></label>
                                    <input type="text"
                                        {...register("email", {
                                            required: "Email Address is required"
                                        })}
                                        className="input input-bordered w-full max-w-xs" />
                                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label"> <span className="label-text">Password</span></label>
                                    <input type="password"
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                                        })}
                                        className="input input-bordered w-full max-w-xs" />

                                    {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label"> <span className="label-text">Role</span></label>
                                    <select
                                        {...register('role')}
                                        className="select input-bordered w-full max-w-xs">
                                        <option>Seller</option>
                                        <option>Buyer</option>
                                    </select>
                                </div>
                                <input className='btn btn-outline w-full mt-6' value="Sign Up" type="submit" />
                                <div>
                                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                                </div>
                            </form>
                            <p>You have  Account? <Link className='text-white underline' to="/login">Please Login</Link></p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;