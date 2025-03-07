import React, { createContext, useState } from "react";
import all_product from '../components/assets/all_product'


export const ShopContext = createContext(null)
const getDefaultCart=()=>{
        let cart = {};
        for (let index = 0; index < all_product.length+1; index++) {
            cart[index]=0;
            
        }
        return cart;
    }
    
const ShopContextProvider=(props)=>{
    const[cartItems,setCartItems]=useState(getDefaultCart());
    // console.log(cartItems);
    const addTocart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);

    }
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))

    }
    const getTotalCartAmount = () => {
        let total = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                total += itemInfo.new_price * cartItems[item]; // Accumulate the total amount
            }
        }
        return total; // Return the total amount after the loop
    }
    const getTotalCartItems=()=>{
        let totalItems=0;
        for(const items in cartItems){
            if(cartItems[items]>0){
                totalItems+=cartItems[items];
            }
        }
        return totalItems;
    }

    const contextValue={getTotalCartItems,getTotalCartAmount,all_product,cartItems,addTocart,removeFromCart};

    
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}
export default ShopContextProvider;