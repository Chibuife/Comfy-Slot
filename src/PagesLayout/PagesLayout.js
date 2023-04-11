import React, { useState } from 'react'
import Logo from '../Asset/subimages/logo.svg'
import { Link, Outlet } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa'
import { FaUserPlus } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import '../Style/PagesLayout.css'
import { useSelector } from 'react-redux';
// import { IoCloseSharp } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
const PagesLayout = () => {
    const totalQuantity = useSelector(state => state.totalQuantity)
    const [active, setActive] = useState(false)
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
                    <Link className='login' to={"/auth/login"}>
                        <span>
                        Login
                        </span>
                        <FaUserPlus />
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
                        <Link to={"/auth/login"} className='login'>
                            <div>  Login</div>
                            <FaUserPlus />
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