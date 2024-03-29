import React, { useState } from 'react'
// import ShopingItems from '../Objects/ShopingItems'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import { BsCheck } from 'react-icons/bs'
import subImage1 from "../Asset/subimages/iXlbK9A6_o.jpeg"
import subImage2 from "../Asset/subimages/A11k7xmf_o.jpeg"
import subImage3 from "../Asset/subimages/rPR1K8nP_o.jpeg"
import subImage4 from "../Asset/subimages/t89LageS_o.jpeg"
import "../Style/ProductItem.css"
import { Link, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/CartSlice'
import { useSelector } from "react-redux";

const ProductItem = ({ ShopingItems }) => {
    const dispatch = useDispatch();
    let params = useParams();
    let detail = ShopingItems.filter((list) => {
        return list.SKU === params.productid
    })
    let item = detail[0]
    const subImages = [item.image, subImage1, subImage2, subImage3, subImage4]
    const [selectImage, setSelectImage] = useState(item.image)
    const [checkColor, setCheckColor] = useState(item.color[0] || item.color)
    console.log(checkColor)
    const [number, setNumber] = useState(1)
    const addItem = () => dispatch(addToCart({ item, checkColor, number }))

    if (ShopingItems) {
        return (
            <>
                <div className='navigation'>
                    <h1> <Link className='home' to="/"> Home </Link><Link className="path" to='/product'>/ Products</Link> <Link className="path"> / {item.name}</Link></h1>
                </div>
                <div className='productItemBody'>

                    <Link className='cBtn' to={'/product'}>BACK TO PRODUCT</Link>
                    <section>
                        <article>
                            <img src={selectImage} alt="" />
                            <div className='subimage'>
                                {
                                    subImages.map((image, index) => {
                                        return <div className={selectImage === image ? "activeImage" : " "} key={index} onClick={() => setSelectImage(image)}><img src={image} alt="" /></div>
                                    })
                                }
                            </div>
                        </article>
                        <article>
                            <h1>{item.name}</h1>
                            <span className='star'>
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarHalf />
                                <BsStar />
                                <BsStar /> </span>
                            (100 customer reviews)
                            <h4 className='price'>$ {item.amount}</h4>
                            <p>Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge</p>
                            <div className='border'>
                                <h4>Available : <span>{item.Available}</span></h4>
                                <h4>SKU : <span>{item.SKU}</span></h4>
                                <h4>Brand  : <span>{item.company}</span></h4>
                            </div>
                            <h4 className='colors'>Colors  :{
                                Array.isArray(item.color) ?
                                    item.color.map((color) => {
                                        return <button
                                         className={checkColor === color ? `${color}` : `opacity ${color}`}
                                          onClick={() => setCheckColor(color)}>
                                            {checkColor === color ?
                                                <BsCheck />
                                                : <></>}
                                        </button>
                                    }) : <button className={item.color}><BsCheck /></button>
                            } </h4>
                            <div className='numberofitem'>
                                <div className='button' onClick={() => number > 1 ? setNumber(number - 1) : null}>-</div>
                                <div className='input'>{number}</div>
                                <div className='button' onClick={() => number < 10 ? setNumber(number + 1) : null}>+</div>
                            </div>
                            <Link to={'/cart'} onClick={addItem}>
                                <button to="/cart" className='cBtn' >
                                    ADD TO CHART
                                </button>
                            </Link>
                        </article>
                    </section>
                </div>
            </>
        )
    }
}
// export const myItemList = addItem;
export default ProductItem;