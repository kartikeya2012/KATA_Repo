import React, {useEffect, useState} from 'react';
import axios from 'axios';
const API = process.env.REACT_APP_API_URL || 'http://localhost:8080/api';
const CART_ID = 'demo-cart';
export default function BookList(){
  const [books, setBooks] = useState([]);
  useEffect(()=>{
    axios.get(`${API}/books`).then(res=>setBooks(res.data)).catch(console.error);
  },[]);
  const addToCart = async (bookId)=>{
    await axios.post(`${API}/cart/${CART_ID}/add`, { bookId, quantity: 1 });
    alert('Added to cart');
  }
  return (
    <div>
      <h2>Books</h2>
      <ul>
        {books.map(b=>(
          <li key={b.id}>
            <b>{b.title}</b> by {b.author} — ${b.price}
            <button onClick={()=>addToCart(b.id)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  )
}