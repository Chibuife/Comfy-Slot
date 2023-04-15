import React, { useEffect, useState } from 'react'
import Logo from '../Asset/subimages/logo.svg'
import { Link, Outlet } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa'
import { FaUserPlus } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import '../Style/PagesLayout.css'
import { useSelector } from 'react-redux';
import { FaUserMinus } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { logOut, monitorAuthState } from './utilis';
const PagesLayout = () => {
    const totalQuantity = useSelector(state => state.totalQuantity)
    const [active, setActive] = useState(false)
    const [login, setLogin] = useState(false)
    useEffect(() => {
        monitorAuthState(setLogin)
    }, [])
    console.log(login)
    return (
        <div className='layout'>
            <nav>
                <img src={Logo} alt="" height={50} />
                <div className='pagesLink'>
                    <Link className='link' to='/'>Home</Link>
                    <Link className='link' to='about'>About</Link>
                    <Link className='link' to="/product">Product</Link>
                </div>
                <div>
                    <Link to={'/cart'}>
                        <span>Cart </span>
                        <div className='cart'>
                            <FaShoppingCart />
                            <div className='numberOfItems'>{0 + totalQuantity}</div>
                        </div>
                    </Link>
                    <Link className='login' to={login ? "" : "/auth/login"}>
                        {login ?
                            <span onClick={logOut}>
                                Logout
                            </span>
                            :
                            <span >
                                Login
                            </span>
                        }
                        {login ? <span onClick={logOut} ><FaUserMinus /> </span> : <span><FaUserPlus /> </span>}
                        {/* <FaUserPlus /> */}
                        {/* <FaUserMinus /> */}
                    </Link>
                </div>
                <div className='hamBurgerMenu' onClick={() => setActive(true)}><GiHamburgerMenu /></div>
            </nav>


            <main>
                <div className={active ? "navPage" : 'navPage navPageNone'}>
                    <div className='topBar'>
                        <img src={Logo} alt="" height={50} />
                        <div onClick={() => setActive(false)} ><IoClose /></div>
                    </div>
                    {/* */}
                    <Link to='/' onClick={() => setActive(false)} >  <div className='link' > Home  </div></Link>
                    {/* */}
                    <Link to='about' onClick={() => setActive(false)} ><div className='link'> About</div></Link>
                    <Link to="/product" onClick={() => setActive(false)} > <div className='link'> Product</div></Link>
                    <div className='iconsCon'>
                        <Link className='cart' to={'/cart'} onClick={() => setActive(false)} >
                            <div> Cart</div>
                            <div className='shop'>
                                <FaShoppingCart />
                                <div className='numberOfItems'>{0 + totalQuantity}</div>
                            </div>
                        </Link>
                        <Link to={login ? "" : "/auth/login"} className='login'>
                            {login ?
                                <div onClick={logOut}>
                                    Logout
                                </div>
                                :
                                <div>
                                    Login
                                </div>
                            }
                            {login ? <span onClick={logOut} ><FaUserMinus /> </span> : <FaUserPlus />}

                        </Link>
                    </div>
                </div>
                <Outlet />
            </main>
            <section className='sectionFive'>
                <div className='copyRight'> <span className='data'> © 2023 </span> <span className='comfy'>ComfySloth</span> <span className='right'>All rights reserved</span></div>
            </section>
        </div>
    )
}

export default PagesLayout