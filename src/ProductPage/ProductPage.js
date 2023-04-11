import React, { useEffect, useState, } from 'react'
import CurrencyFormat from 'react-currency-format';
import detail from "./image/image.svg"
import "../Style/ProductPage.css"
import sortImg from "./image/sort.svg"
import search from "./image/search.svg"
import { useRef } from 'react';
import { useReducer } from 'react';
import ShopingItems from "../Objects/ShopingItems";
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi'
import { BsFillGridFill } from 'react-icons/bs'
import { BsCheck } from 'react-icons/bs'

let tempProducts;
const initialState = {
  filtered_products: [],
  all_products: [],
  sort: 'price-lowest',
  filters: {
    text: '',
    company: 'all',
    category: 'all',
    color: 'all',
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
}
const reducer = (state, action) => {
  switch (action.type) {

    case "LOAD_PRODUCTS":
      let maxPrice = action.payload.map((p) => p.amount)
      maxPrice = Math.max(...maxPrice)
      return {
        ...state,
        all_products: [...action.payload],
        filtered_products: [...action.payload],
        filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
      }
    case 'SORT':
      return { ...state, sort: action.payload }
    case 'SORT_PRODUCTS':
      const { filtered_products } = state
      const { sort } = state
      if (sort === 'name (z-a)') {
        tempProducts = filtered_products.sort((a, b) => {
          return b.name.localeCompare(a.name)
        })
      }
      if (sort === 'name (a-z)') {
        tempProducts = filtered_products.sort((a, b) => {
          return a.name.localeCompare(b.name)
        })
      }
      if (sort === "price (lowest)") {
        tempProducts = filtered_products.sort((a, b) => {
          return a.amount - b.amount
        })
      }
      if (sort === "price (highest)") {
        tempProducts = filtered_products.sort((a, b) => {
          return b.amount - a.amount
        })
      }
      return { ...state, filtered_products: tempProducts }
    case 'FILTER':
      const { name, value } = action.payload;
      return { ...state, filters: { ...state.filters, [name]: value } }
    case "FILTER_PRODUCTS":
      const { all_products } = state
      const { text, category, company, color, price, shipping } = state.filters
      tempProducts = [...all_products]
      if (text !== '') {
        tempProducts = tempProducts.filter(
          (product) => product.name.toLowerCase().startsWith(text)
        )
      }
      if (category !== 'all') {
        tempProducts = tempProducts.filter(
          (product) => product.category === category.toLocaleLowerCase()
        )
      }
      if (company !== 'all') {
        tempProducts = tempProducts.filter(
          (product) => product.company === company.toLocaleLowerCase()
        )
      }
      if (color !== 'all') {
        tempProducts = tempProducts.filter(
          (product) => {
            if (!Array) {
              return product.color === color.toLocaleLowerCase()
            }
            else {
              return product.color.includes(color.toLocaleLowerCase())
            }
          }
        )
      }
      if (price !== 309999) {
        tempProducts = tempProducts.filter(
          (product) => product.amount <= parseFloat(price)
        )
      }
      if (shipping !== false) {
        tempProducts = tempProducts.filter(
          (product) => product.shipping === true
        )
      }
      return { ...state, filtered_products: tempProducts }
    case "CLEAR":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: '',
          company: 'all',
          category: 'all',
          color: 'all',
          price: 3099.99,
          shipping: false,
        }
      }
    default:
      throw new Error();
  }
}

function Product() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [activeIndex, setActiveIndex] = useState(false)
  const [activeVeiw, setActiveView] = useState(true)
  const [clear, setClear] = useState()
  
console.log(state)
  const filter = (e, i) => {
    const name = e.target.name;
    let value;
    if (name === "text") {
      value = e.target.value.toLocaleLowerCase()
    }
    if (name === "category") {
      value = e.target.textContent.toLocaleLowerCase()
    }
    if (name === "company") {
      value = e.target.value.toLocaleLowerCase()
    }
    if (name === "color") {
      value = e.target.textContent.toLocaleLowerCase()
      // console.log(value)
    }
    if (name === "price") {
      value = e.target.value
    }
    if (name === 'shipping') {
      value = e.target.checked
      
    }
    dispatch({ type: "FILTER", payload: { name, value } })
  }
  //sort product 
  const sortP = (e) => {
    let value;
    let name = e.target.name
    if (name === "sort") {
      value = e.target.value.toLocaleLowerCase()
    }
    dispatch({ type: "SORT", payload: value })
  }

  //function to sort product

  //function to filter the product
  useEffect(() => {
    dispatch({ type: 'FILTER_PRODUCTS' })
    dispatch({ type: 'SORT_PRODUCTS' })
  }, [state.filters, state.sort])


  //add the shoping item
  useEffect(() => {
    dispatch({ type: 'LOAD_PRODUCTS', payload: ShopingItems })
  }, [ShopingItems])

  const category = [
    "All", "Office", "Living Room", "Kitchen", "Bedroom", "Dining", "Kids"
  ];
  const company = [
    "all", "marcos", "liddy", "ikea", "caressa"
  ]
  const color = ["All", "red", "green", "blue", "black", "yellow"];
  const sort = [
    "Price (Lowest)", "Price (Highest)", "Name (A-Z)", "Name (Z-A)"
  ]
  return (
    <div className='productBody'>
      <div className='navigation'>
        <h1> <Link className='home' to="/"> Home </Link><Link className="path">/ Products</Link></h1>
      </div>
      <section className='section2'>

        <div className='sideBar'>
          <div className='classify'>
            <input name="text" onChange={filter} type="text" className='search' placeholder='Search' />
            <h4>Catergory</h4>
            <div className='category'>
              {
                category.map((item, index) => {
                  return (
                    <div>
                      <button className={state.filters.category === item.toLocaleLowerCase() ? 'activecat' : ""} onClick={filter} name="category">{item}</button></div>
                  )
                })
              }
            </div>
            <h4>Company</h4>
            <select id="" name="company" onChange={filter} value={state.filters.company} >

              {company.map((item, index) => {
                // console.log(clear)
                return (
                  <option>{item}</option>
                )
              })}
            </select>
            <h4>Colors</h4>
            <div multiple size="10" className='color'>
              {
                color.map((item, index) => {
                  return (
                    <div className="btnWapper" ><button className={state.filters.color === item.toLocaleLowerCase() ? ` ${item} activeColor` : `${item} noneActiveColor`} onClick={filter} name="color">{item}</button>{index !== 0 ? <div className={state.filters.color === item.toLocaleLowerCase() ? "check" : "notChecked"}><BsCheck /> </div> : null} </div>
                  )
                })
              }
            </div>
            <h4>Price</h4>
            <div>
              <CurrencyFormat value={parseFloat(state.filters.price)} displayType={'text'} decimalSeparator="." thousandSeparator={","} prefix={'$'} />
            </div>
            <input
              type="range"
              max={3099.99}
              value={state.filters.price} onChange={filter}
              name='price'
            />
            <div className='freeShipping'> <span>Free Shiping</span> <input name="shipping" onClick={filter} type="checkbox" checked={state.filters.shipping}  className='freeShiping' /> </div>
            <button onClick={()=> dispatch({ type: "CLEAR" }) || setClear("all")} className="clear">Clear Filters</button>
          </div>
        </div>

        <main>
          <div className='sortContainer'>
            <div className='arrange'>
              <div className={activeVeiw ? "clicked" : ""}>  <BsFillGridFill onClick={() => setActiveView(true)} /> </div>
              <div className={!activeVeiw ? "clicked" : ""}> <GiHamburgerMenu onClick={() => setActiveView(false)} /></div>
            </div>
            <div className='productfound'>
              <div>
                23 Products Found
              </div>
              <div className='thinline'></div>
            </div>
            <div className='sort'>
              Sort By
              <select name="sort" id="" onChange={sortP}>
                {sort.map((item) => {
                  return (
                    <option value={item}>{item}</option>
                  )
                })}
              </select>
            </div>
          </div>
          <div className='container'>
            <div className={activeVeiw ? 'imagContainer' : 'display-none'}>
              {state.filtered_products.map((item, index) => {
                return (
                  <div className='image-price'>
                    <div className='item-image' onMouseOver={() => setActiveIndex(index)} onMouseOut={() => setActiveIndex(!index)} >
                      <img className={index === activeIndex ? "hover" : "pic"} src={item.image} alt="" />
                      <Link className={index === activeIndex ? 'searchContainer' : " none"} to={item.SKU}>
                        <img className={index === activeIndex ? "img" : " none"} src={search} alt="" />
                      </Link>
                    </div>
                    <div className='priceing'>
                      <div>{item.name}</div>
                      <div className='price'><CurrencyFormat value={item.amount} displayType={'text'} decimalSeparator="." thousandSeparator={","} prefix={'$'} /></div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className={!activeVeiw ? 'imagContainerTwo' : 'display-none'} >
              {state.filtered_products.map((item) => {
                return (
                  <div className='image-price'>
                    <div className='image'>
                      <img src={item.image} alt="" />
                    </div>

                    <div className='priceing'>
                      <h1>{item.name}</h1>
                      <h5 className='price'>$ {item.amount}</h5>
                      <p>Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic ...</p>
                      <Link className='detail' to={item.SKU} >detail</Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </main>
      </section>
    </div>
  )
}

export default Product