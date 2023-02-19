import React, { useState } from 'react'
// import ShopingItems from '../Objects/ShopingItems'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import { BsCheck } from 'react-icons/bs'
import subImage1 from "../Asset/subimages/iXlbK9A6_o.jpeg"
import subImage2 from "../Asset/subimages/A11k7xmf_o.jpeg"
import subImage3 from "../Asset/subimages/rPR1K8nP_o.jpeg"
import subImage4 from "../Asset/subimages/t89LageS_o.jpeg"

import "../Style/ProductItem.css"
let cartitems = []
const ProductItem = ({ cartNumber, ShopingItems, setCartNumber, setCartId }) => {
    // console.log(ShopingItems)
    // const [numberOfItems, setNumberOfItems] = useState(1);
    let params = 4
    let item = ShopingItems[params]
    const subImages = [item.image, subImage1, subImage2, subImage3, subImage4]
    const [selectImage, setSelectImage] = useState(item.image)
    const [checkColor, setCheckColor] = useState(item.color[0] || item.color)
    // console.log(selectImage)
    if (ShopingItems) {
        return (
            <div className='productItemBody'>
                <button className='cBtn'>BACK TO PRODUCT</button>
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
                                    return <button className={color} onClick={() => setCheckColor(color)}>
                                        {checkColor === color ?
                                            <BsCheck />
                                            : <></>}
                                    </button>
                                }) : <button className={item.color}><BsCheck /></button>
                        } </h4>
                        <div className='numberofitem'>
                            <div className='button' onClick={() => setCartNumber(cartNumber-1)}>-</div>
                            <div className='input'>{cartNumber}</div>
                            <div className='button' onClick={() => setCartNumber(cartNumber+1)}>+</div>
                        </div>
                        <button className='cBtn' onClick={() => setCartId(cartNumber+ 7)}>ADD TO CHART</button>
                    </article>
                </section>
            </div>
        )
    }
}
export const myItemList = cartitems;
export default ProductItem;