import React, { useContext } from 'react'
import "./RightHeader.css"
import Avatar from '@mui/material/Avatar';
import { LoginContext } from '../context/ContextProvider';
import { NavLink } from 'react-router-dom';
import { Divider } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

function RightHeader({userlog,logclose}) {
    const { account, setAccount } = useContext(LoginContext)
    console.log(setAccount);

    return (
        <>
            <div className='rightheader'>
                <div className='right_nav'>
                    {
                        account ? <Avatar className='avtar2'>{account.fname[0].toUpperCase()}</Avatar>
                            :
                            <Avatar className='avtar'></Avatar>
                    }
                     {account?<h3>Hello,{account.fname.toUpperCase()}</h3>:""}
                </div>
                <div className='nav_btn' onClick={()=>logclose()}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/">Shop By Category</NavLink>
                    <Divider style={{width:"100%",marginLeft:"-20px"}} />
                    <NavLink to="/">Today's Deal</NavLink>
                    {
                        account ? <NavLink to="/buynow">Your Orders</NavLink> : <NavLink to="/login">Your Orders</NavLink>
                    }
                    <Divider style={{width:"100%",marginLeft:"-20px"}} />
                    <div className='flag'>
                        <NavLink to="/">Settings</NavLink>
                        <img src='https://media.istockphoto.com/id/472317739/vector/flag-of-india.jpg?s=612x612&w=0&k=20&c=ejlQRX4C_Mb40wz1JQcB5vKYcOKlfRtry2W6UcX6mlo=' alt='flag' style={{width:35,marginLeft:10,marginBottom:15}} />

                    </div>
                    {
                    account ?
                        <div className="flag">
                            <LogoutIcon style={{ fontSize: 18, marginRight: 4 }} />
                            <h3 onClick={() => userlog()} style={{ cursor: "pointer", fontWeight: 500 }}>Log Out</h3>
                        </div>
                        : <NavLink to="/login">Sign in</NavLink>
                }
                </div>
            </div>
        </>
    )
}

export default RightHeader
