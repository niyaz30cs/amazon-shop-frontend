import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {ToastContainer,toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function SignUp() {
    const [userData, setUserData] = useState({
        fname: "",
        email: "",
        mobile: "",
        password: "",
        cpassword: ""
    })
    console.log(userData);

    const addData = (e) => {
        const { name, value } = e.target;

        setUserData(()=>{
            return{
                ...userData,
                [name]:value
            }
        })
    };
        
    const sendData=async(e)=>{
        e.preventDefault();
        const{fname,email,mobile,password,cpassword}=userData

       if(fname===""){
        toast.warn("please fill the name",{
            position:"top-center",
        })
       }else if(email===""){
        toast.warn("Enter Email please",{
            position:"top-center",
        })
       }else if(mobile===""){
        toast.warn("Enter Your Mobile Number",{
            position:"top-center",
        })
       }else if(password===""){
        toast.warn("Please Enter Password",{
            position:"top-center",
        })
       }else if(cpassword===""){
        toast.warn("Please Enter Cpassword",{
            position:"top-center",
        })
       }else{
        const res=await fetch("https://amazon-shop-backend.onrender.com/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
             body:JSON.stringify({
                fname,email,mobile,password,cpassword
             })
        });
        const data=await res.json();
        console.log(data);
       }

        const res=await fetch("https://amazon-shop-backend.onrender.com/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
             body:JSON.stringify({
                fname,email,mobile,password,cpassword
             })
        });
        const data=await res.json();
        console.log(data);
        if(res.status===422 ||!data){
        
            toast.warn("invalid data",{
                position:"top-center",
            })
        }else{
            
            toast.success("Data Aadded Successfull",{
                position:"top-center",
            })

            setUserData({...userData,fname:"",email:"",mobile:"",password:"",cpassword:""})
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
                            <h1>SignUp</h1>
                            <div className='form_data'>
                                <label htmlFor='fname'>Your Name</label>
                                <input type='text'
                                    onChange={addData}
                                    value={userData.fname}
                                    name='fname' placeholder='Enter Your Name' id='fname' />
                            </div>
                            <div className='form_data'>
                                <label htmlFor='email'>Email</label>
                                <input type='text'
                                    onChange={addData}
                                    value={useState.email}
                                    name='email' placeholder='Enter Email' id='email' />
                            </div>
                            <div className='form_data'>
                                <label htmlFor='mobile'>Mobile</label>
                                <input type='text'
                                    onChange={addData}
                                    value={userData.mobile}
                                    name='mobile' placeholder='Enter Number' id='mobile' />
                            </div>
                            <div className='form_data'>
                                <label htmlFor='password'>Password</label>
                                <input type='password'
                                    onChange={addData}
                                    value={userData.password}
                                    placeholder='At Least 6 Char' name='password' id='password' />
                            </div>
                            <div className='form_data'>
                                <label htmlFor='password'>Password Again</label>
                                <input type='password'
                                    onChange={addData}
                                    value={userData.cpassword}
                                    name='cpassword' id='cpassword' />
                            </div>
                            <button className='signin_btn' onClick={sendData}>Continue</button>
                            <div className='signin_info'>
                                <p>Already have an Account?</p>
                                <NavLink to="/login">SignIn</NavLink>
                            </div>
                        </form>
                    </div>
                    <ToastContainer/>
                </div>
            </section>
        </>
    )
}

export default SignUp
