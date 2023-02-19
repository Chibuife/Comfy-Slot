import React, { useEffect, useRef, useState } from 'react'
import Product from '../../ProductPage/ProductPage';
export let FilterdItem;
function SetItem() {
   
   
    const [active, setAtive] = useState(0);
    const [activeColor, setAtiveColor] = useState(0);
    const [activeCompany, setAtiveCompany] = useState(0);
    const [activeShiping, setActiveShipping] = useState();
    let amount;
    // amount = (parseFloat(value)/100).toFixed(2)
  let inputref = useRef()
  let myCateItem  = useRef([]);
  let itemCompany = useRef();
  let myColor = useRef([]);
  let myCheck = useRef();
    // useEffect(()=>{
    //   if(myCateItem.current !== undefined){
    //     console.log(myCateItem[active].textContent)
    //   }
    //   if(inputref !== undefined){
    //     console.log(inputref.current.value)
    //   }
    //   if(itemCompany.current !== undefined){
    //     console.log(itemCompany.current.value)
    //   }
    //   if(myColor.current !== undefined){
    //     console.log(myColor[activeColor].textContent)
    //   }
    // },[active || activeColor || activeCompany ])
    // if(amount){
    //   console.log(amount)
    // }
    // useEffect(()=>{
    //   if(myCheck.current !== undefined){
    //     console.log(myCheck.current.checked)
    //   }
    // }, [activeShiping])
return<>
{/* <Product price={price} setAtive={setAtive} setAtiveColor={setAtiveColor} setAtiveCompany={setAtiveCompany} setActiveShipping={setActiveShipping} inputref={inputref} myCateItem={myCateItem} itemCompany={itemCompany} myColor={myColor} myCheck={myCheck}/> */}
</>
}

export default SetItem