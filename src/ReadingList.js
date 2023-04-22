import React from 'react';
import {useAppContext} from './components/context/appContext'

export const ReadingList = () => {
  const { favorites, addToFavorites, removeFavorite } = useAppContext();

  console.log("favorites are", favorites);

  const favoriteChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

  return (<div className="reading-list">
     {favorites.length > 0 ? (
       favorites.map((book) => (
        <div key={book.id} className="book">
          <div>
            <h3>{book.title}</h3>
          </div>
          <div>
            <img src={book.image_url} alt="#" />
          </div>
          <div>
            {favoriteChecker(book.id) ? (
              <button onClick={() => removeFavorite(book.id)}>
                Remove From List
              </button>
            ) : (
              <button onClick={() => addToFavorites(book)}>
                Add to List
              </button>
            )}
          </div>
          </div>
        )) 
        ) :( <h1>You don't have any books in your reading list.</h1>
        )};
        </div> 
   );
}
