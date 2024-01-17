import React, { useContext, useEffect, useState } from 'react'
import "./Navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import { NavLink, useNavigate } from 'react-router-dom';
import { LoginContext } from '../context/ContextProvider';
import RightHeader from './RightHeader';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import LogoutIcon from '@mui/icons-material/Logout';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

function Navbar() {
    const navigate=useNavigate();
    const { account, setAccount } = useContext(LoginContext)
    console.log(setAccount);
    console.log(account);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

     const[text,setText]=useState("")
     console.log(text );
     const[liOpen,setLiOpen]=useState(true);
     const {products}=useSelector(state=>state.getProductsData)
 
    const [dropen, setDropen] = useState(false);
    const getdetailvaliduser = async () => {
        const res = await fetch("https://amazon-shop-backend.onrender.com/validuser", {
            method: "GET",
            headers: {
                Accept: "application",
                "Content-type": "application/json"
            },
            // credentials: "include"
        });
        const data = await res.json();
        //  console.log(data);
        if (res.status !== 201) {
            console.log("Error");
        } else {
            console.log("Data Valid");
            setAccount(data)
        }
    }

    const handleopen = () => {
        setDropen(true)
    }
    const handledrclose = () => {
        setDropen(false)
    }


    const logoutUser = async () => {
        const res2 = await fetch("https://amazon-shop-backend.onrender.com/logout", {
            method: "GET",
            headers: {
                Accept: "application",
                "Content-type": "application/json"
            },
            // credentials: "include"
        });
        const data2 = await res2.json();
         console.log(data2);
        if (res2.status !== 201) {
            console.log("Error");
        } else {
            console.log("Data Valid");
            // alert("logout")
            toast.success("User Logout Successfully", {
                position: "top-center",
            })
            navigate("/")
            setAccount(false);
        }
    }

    const getText=(iteams)=>{
        setText(iteams)
        setLiOpen(false)
    }


    useEffect(() => {
        getdetailvaliduser()
    }, [])
    return (
        <header>
            <nav>
                <div className='left'>
                    <IconButton className='hamburgur' onClick={handleopen}>
                    {/* <IconButton className='hamburger' onClick={handleopen}> */}
                        <MenuIcon style={{ color: "#fff" }} />
                    </IconButton>

                    <Drawer open={dropen} onClose={handledrclose} >
                        <RightHeader logclose={handledrclose} userlog={logoutUser} />
                    </Drawer>
                    <div className='navlogo'>
                        <NavLink to="/"><img src='./amazon_PNG25.png' alt='not found' /></NavLink>
                    </div>
                    <div className='nav_searchbaar'>
                        <input type='text' name='' placeholder='Search Your Product' onChange={(e)=>getText(e.target.value)} />
                        <div className='search_icon'>
                            <SearchIcon id="search" />
                        </div>
                        {
                            text&&
                            <List className='extrasearch' hidden={liOpen}>
                                {
                                    products.filter(product=>product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
                                       <ListItem>
                                           <NavLink to={`/getproductsone/${product.id}`} onClick={()=>setLiOpen(true)}>
                                           {product.title.longTitle}
                                           </NavLink>
                                       </ListItem> 
                                    ))
                                }
                            </List>
                        }
                    </div>
                </div>
                <div className='right'>
                    <div className='nav_btn'>
                        <NavLink to="/login">SignIn</NavLink>
                    </div>
                    <div className='cart_btn'>

                        {
                            account ? <NavLink to="/buynow">

                                <Badge badgeContent={account.carts.length} color="primary">
                                    {/* <Badge color="primary"> */}
                                    <ShoppingCartIcon id="icon" />
                                </Badge>
                            </NavLink> : <NavLink to="/login">

                                <Badge badgeContent={0} color="primary">
                                    <ShoppingCartIcon id="icon" />
                                </Badge>
                            </NavLink>
                        }
                    <ToastContainer/>
                        <p>Cart</p>
                    </div>
                    {
                        account ? <Avatar className='avtar2'
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >{account.fname[0].toUpperCase()}</Avatar>
                            :
                            <Avatar className='avtar'
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            ></Avatar>
                    }
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        {
                            account ? <MenuItem onClick={handleClose} onDoubleClick={logoutUser} ><LogoutIcon style={{fontSize:16,marginRight:3}}/>Logout</MenuItem> : ""
                        }
                    </Menu>
                </div>
            </nav>
        </header>
    )

}
export default Navbar
