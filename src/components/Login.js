import React, { useContext } from "react";
import { userLoginContextObj } from "../context/user/userLoginContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    let [, , loginStatus, , error, onSubmit] = useContext(userLoginContextObj);

    if (loginStatus === true) {
        navigate('/players')
    }
    return (
        <div className="form-container sign-in-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Sign in</h1>
                {error && <p className="errorMsgP text-warning">{error}</p>}
                <div className="social-container">
                    <a href="#" className="social"> <i className="fab fa-facebook-f" /> </a>
                    <a href="#" className="social"><i className="fab fa-google-plus-g" /> </a>
                    <a href="#" className="social"> <i className="fab fa-linkedin-in" /> </a>
                </div>
                <span>or use your account</span>
                <input type="email" placeholder="Email" name="email" {...register('email')}
                />
                <input type="password" name="password" placeholder="Password" {...register('password')} />
                <a href="#" className="forgetPwd">Forgot your password?</a>
                <button>Sign In</button>
            </form>
        </div>
    );
}
