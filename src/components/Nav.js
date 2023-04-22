import React from 'react';
import Authstate from '../components/Authstate';
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
     <nav className= "nav-bar"> 
    <Link to="/booklist" className= "logo"> The Book Keeper</Link>
    <ul>
      <li>
        <Link className ="nav-link" to ="/booklist">Books</Link>
      </li>
      <li>
        <Link className ="nav-link" to ="/readinglist">Reading List</Link>
      </li>
      <li>
        <Link className ="nav-link" to ="/Signin">SignIn</Link>
      </li>
      <li>
        <Link className ="nav-link" to ="/Signup">Signup</Link>
      </li>
      <li>
        <Authstate/>
      </li>
    </ul>
    </nav>
   
  )
}
