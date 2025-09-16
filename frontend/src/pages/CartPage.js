import React, {useEffect, useState} from 'react';
import axios from 'axios';
const API = process.env.REACT_APP_API_URL || 'http://localhost:8080/api';
const CART_ID = 'demo-cart';
export default function CartPage(){
  const [items, setItems] = useState([]);
  const load = ()=> axios.get(`${API}/cart/${CART_ID}`).then(r=>setItems(r.data));
  useEffect(()=>{ load() },[]);
  const update = (bookId, qty)=> axios.post(`${API}/cart/${CART_ID}/update`, { bookId, quantity: qty }).then(load);
  const checkout = ()=> axios.post(`${API}/cart/${CART_ID}/checkout`).then(res=>{
    alert(`Order total: $${res.data.total}`);
    load();
  });
  return (
    <div>
      <h2>Your cart</h2>
      <ul>
        {items.map((it, idx)=>(
          <li key={idx}>
            {it.book.title} — ${it.book.price} x {it.quantity}
            <button onClick={()=>update(it.book.id, it.quantity - 1)}>-</button>
            <button onClick={()=>update(it.book.id, it.quantity + 1)}>+</button>
            <button onClick={()=>update(it.book.id, 0)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={checkout}>Checkout</button>
    </div>
  )
}