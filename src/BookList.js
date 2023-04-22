import React, {useState, useEffect} from 'react'
import {API_URL} from './components/Api';
import axios from 'axios';
import {useAppContext} from './components/context/appContext'
import {useNavigate} from 'react-router-dom'

export const BookList = () => {
  const [books,setBooks] = useState([]); 

  const { favorites, addToFavorites, removeFavorite} = useAppContext();
 
 const navigate = useNavigate();

  const favoriteChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean; 
  }


    useEffect(() => {
      axios.get(API_URL).then(response => {
        console.log(response.data)
        setBooks(response.data)
      }).catch(err=> console.log(err))
    }, []);
      
    

  

  return ( 
    <div className="book-list">
    
      {books.map((book) => (
        <div key = {book.id} className="book">
          <div>
            <h3>{book.title}</h3>
          </div>
          <div>
            <img src={book.image_url} alt="#" onClick ={()=>navigate(`/books/${book.id}`)}/>
          </div>
          <div>
            {favoriteChecker(book.id) ?   (
              <button onClick ={()=> removeFavorite(book.id)}>Remove From List</button>
            ):(
              <button onClick ={()=> addToFavorites(book)}>Add to List</button>
            )}
          </div>
          
        </div>
    
    

      ))}
    </div>

  )       
}
