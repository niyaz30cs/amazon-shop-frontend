import React, { useContext, useState } from 'react'
import "./Both.css";
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { LoginContext } from '../context/ContextProvider';

function SignIn() {
    const [logdata, setData] = useState({
        email: "",
        password: ""
    })
    console.log(logdata);
    const{account,setAccount}=useContext(LoginContext)
    console.log(account);
    const addData = (e) => {
        const { name, value } = e.target;

        setData(() => {
            return {
                ...logdata,
                [name]: value
            }
        })

    };

    const sendData = async (e) => {
        e.preventDefault();

        const { email, password } = logdata;
        const res = await fetch("https://amazon-shop-backend.onrender.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        })
        const data = await res.json();
        console.log(data);
        if (res.status === 400 || !data) {
            console.log("invalid details");
            toast.warn("please fill the Details", {
                position: "top-center",
            })

        } else {
            console.log("data valid");
            setAccount(data)
            toast.success("User Login Successfully", {
                position: "top-center",
            })

            setData({ ...logdata, email: "", password: "" });
        }
    }
    return (
        <>
            <section>
                <div className='sign_container'>
                    <div className='sign_header'>
                        <img src="./blacklogoamazon.png" alt='logo' />
                    </div>
                    <div className='sign_form'>
                        <form method='POST'>
                            <h1>SignIn</h1>
                            <div className='form_data'>
                                <label htmlFor='email'>Email</label>
                                <input type='text'
                                    onChange={addData}
                                    value={logdata.email}
                                    name='email' placeholder='Enter Email' id='email' />
                            </div>
                            <div className='form_data'>
                                <label htmlFor='password'>Password</label>
                                <input type='password'
                                    onChange={addData}
                                    value={logdata.password}
                                    placeholder='At Least 6 Char' name='password' id='password' />
                            </div>
                            <button className='signin_btn' onClick={sendData} >Continue</button>
                        </form>
                    </div>
                    <div className='create_accountinfo'>
                        <p>New To Amazon</p>
                        <NavLink to="/register"><button>Create Your Amazon Account</button></NavLink>
                    </div>
                </div>
                <ToastContainer />
            </section>
        </>
    )
}

export default SignIn
