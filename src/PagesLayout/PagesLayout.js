import React from 'react'
import Logo from '../Asset/subimages/logo.svg'
import { Link, Outlet, useLocation, } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa'
import { FaUserPlus } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import '../Style/PagesLayout.css'
import { useSelector } from 'react-redux';
const PagesLayout = () => {
    const location = useLocation();
    const path = location.pathname;
    const itemsList = useSelector(state => state.itemsList)
    const totalQuantity = useSelector(state => state.totalQuantity)

    console.log(itemsList.length)
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
                    <div>
                        Cart
                        <div className='cart'>
                            <FaShoppingCart />
                            <div className='numberOfItems'>{0 + totalQuantity}</div>
                        </div>
                    </div>
                    <div className='login'>
                        Login
                        <FaUserPlus />
                    </div>
                </div>
                <div className='hamBurgerMenu'><GiHamburgerMenu /></div>
            </nav>
            <div className={path === '/' || itemsList.length === 0 && path === '/cart'  ? '' : 'navigation'}>
                {
                    path === '/' || itemsList.length === 0 && path === '/cart' ?
                    <></>
                        : <h1> <Link className='home' to="/"> Home </Link><Link to={path} className="path">{path}</Link></h1>

                }
                {/* {pagesnav} */}
            </div>
            <main> <Outlet /></main>
            <section className='sectionFive'>
                <div className='copyRight'> <span className='data'> © 2023 </span> <span className='comfy'>ComfySloth</span> <span className='right'>All rights reserved</span></div>
            </section>
        </div>
    )
}

export default PagesLayout