import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { hashSync } from "bcryptjs";

export default function Register(props) {
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState('');

    async function onSubmit(users) {
        try {
            let response1 = await axios.get(`http://localhost:4000/users?email=${users.email}`);
            let userList = response1.data;
            console.log(userList);
            if (userList.length === 0) {
                let hashedPassword = hashSync(users.password, 5)
                users.password = hashedPassword;
                let response = await axios.post('http://localhost:4000/users', users)
                console.log(response);
                if (response.status === 201) {
                    props.onRegistrationSuccess();
                    // console.log("done");

                } else {
                    console.log("Network error");
                }
            }
            else {
                setError('*User already existed');
            }
        }
        catch (err) {
            console.log(err);
        }

    }
    return (
        <div className="form-container sign-up-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="mt-3">Create Account</h1>
                {error && <p className="errorMsgP text-warning">{error}</p>}
                <div className="social-container">
                    <a href="#" className="social"> <i className="fab fa-facebook-f" /> </a>
                    <a href="#" className="social"> <i className="fab fa-google-plus-g" /> </a>
                    <a href="#" className="social"> <i className="fab fa-linkedin-in" /> </a>
                </div>
                <span>or use your email for registration</span>
                <input type="text" name="name" placeholder="Name" required {...register('name')}
                />
                <input type="email" name="email" placeholder="Email" required {...register('email')} />
                <input type="password" name="password" placeholder="Password" required {...register('password')} />
                <button className="m-3">Sign Up</button>
            </form>
        </div>
    );
}
