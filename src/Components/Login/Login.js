import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    // const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    // const [token] = useToken(loginUserEmail);
    // const location = useLocation();
    // const navigate = useNavigate();

    // const from = location.state?.from?.pathname || '/';

    // if (token) {
    //     navigate(from, { replace: true });
    // }

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        // signIn(data.email, data.password)
        //     .then(result => {
        //         const user = result.user;
        //         console.log(user);
        //         setLoginUserEmail(data.email);
        //     })
        //     .catch(error => {
        //         console.log(error.message)
        //         setLoginError(error.message);
        //     });
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl shadow-white bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(handleLogin)}>
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
                                    <label className="label"> <span className="label-text">Forget Password?</span></label>
                                    {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                                </div>
                                <input className='btn btn-outline w-full' value="Login" type="submit" />
                                <div>
                                    {loginError && <p className='text-red-600'>{loginError}</p>}
                                </div>
                            </form>
                            <p>You have no Account? <Link className='text-white underline' to="/signup">Please Create new Account</Link></p>
                            <div className="divider">OR</div>
                            <button className='btn btn-outline w-full'><FaGoogle className='m-2'></FaGoogle> GOOGLE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;