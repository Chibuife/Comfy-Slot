import React, { useState } from 'react'
import "../Style/HomePage.css"
import image1 from "./Image/homeImg1.jpg"
import image2 from "./Image/homeImg2.jpg"
import image3 from "./Image/homeImg3.jpg"
import mission from "./Image/mission.svg"
import vision from "./Image/vision.svg"
import history from "./Image/history.svg"
import search from "./Image/search.svg"
import { Link } from 'react-router-dom'

function Homepage() {
    const [activeIndex, setActiveIndex] = useState(false)
    const myObject = [
        {
            image: image1,
            category: "Entertainment Center",
            amount: "$599.99",
            SKU:"RecNZ0koOqEmilmoz"
        },
        {
            image: image2,
            category: "High-Back Bench",
            amount: "$399.99",
            SKU: "Recrfxv3EwpvJwvjq"

        },
        {
            image: image3,
            category: "Modern Bookshelf",
            amount: "$319.99",
            SKU: "Rec7CjDWKRgNQtrKe"

        }
    ]
    return (
        <div className='body'>
            <section className='sectionOne'>
                <div className='intro'>
                    <div className='intro-text'>
                        <h1>Design Your Comfort Zone</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?</p>
                        <Link><div className='shopnow'>SHOP NOW</div></Link>
                    </div>
                </div>
                <div className='introImg'>
                    <div className='landingPage'>
                        <div className='coloredDiv'></div>
                        <div ><img className='img1' src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f6786a3aca992.jpeg" alt="" /></div>
                        <div ><img className='img2' src=" https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg-2.789918645915c8acb36f.jpeg" alt="" /></div>
                    </div>
                </div>
            </section>


            <section className='sectionTwo'>
                <div className='sectionTwoTitle'><h1>Featured Products</h1><div></div></div>

                <main>
                    {
                        myObject.map((item, index) => {
                            return (
                                <div className='image'>
                                    <div className='item-image' onMouseOver={() => setActiveIndex(index)} onMouseOut={() => setActiveIndex(!index)} >
                                        <img className={index === activeIndex ? "hover" : "pic"} src={item.image} alt="" />
                                        <Link className={index === activeIndex ? 'searchContainer' : " none"} to={`product/${item.SKU}`}>
                                            <img className={index === activeIndex ? "img" : " none"} src={search} alt="" />
                                        </Link>
                                    </div>
                                    <div className='priceing'>
                                        <div>{item.name}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </main>

                <Link> <div className='allProduct'>All Products</div></Link> 
            </section>

            <section className='sectionThree'>
                <div className='description'><h2>Custom Furniture Built Only For You</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur.</p></div>
                <div className='grid-container'>
                    <div className='grid-item'><div><img src={mission} alt="" /></div><h1>Mission</h1> <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p></div>
                    <div className='grid-item'><div><img src={vision} alt="" /></div><h1>Vision</h1> <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p></div>
                    <div className='grid-item'><div><img src={history} alt="" /></div><h1>History</h1> <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p></div>
                </div>
            </section>

            <section className='sectionFour'>
                <div>

                    <div className='subscribe'>
                        <h1>Join our newsletter and get 20% off</h1>
                        <div className='description'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde quaerat ratione soluta veniam provident adipisci cumque eveniet tempore?</p></div>
                        <div className='emailInput'><input type="email" placeholder='Enter Email' /><div>Subscribe</div></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Homepage