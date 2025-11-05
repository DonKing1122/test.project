'use client'
import { createContext, useState } from "react";
export const CartContext = createContext();

export default function CartProvider({children}){

    const [orders, setOrders] = useState([]);

    const add = (product) => {
        const exestingProduct = orders.find(elem => elem.idMedal === product.idMedal)
    }

    return(
        <CartContext.Provider>
            {children}
        </CartContext.Provider>
    )
}