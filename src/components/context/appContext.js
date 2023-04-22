import { createContext, useContext} from 'react'; 
import { useState, } from 'react';

const Appcontext = createContext(null); 

export const useAppContext = () => {
    const context = useContext(Appcontext)
    if(context === undefined){
        throw new Error('Appcontext must be within appContextProvider!');
    }
    return context;
}


const AppContextProvider =({children}) => {
    const [favorites,setFavorites] = useState([])
    
    
    
    const addToFavorites = (book) => {
        const oldFavorites = [...favorites];
        const newFavorites = oldFavorites.concat(book);
        setFavorites(newFavorites)


    }
    
    const removeFavorite = (id) => {
        const oldFavorites = [...favorites];
        const newFavorites = oldFavorites.filter((book) => book.id !== id);
        setFavorites(newFavorites)

    }
    
    
    
    
    
    
    
    
    return (
        <Appcontext.Provider value = {{favorites,addToFavorites,removeFavorite}}>
            {children}
        </Appcontext.Provider>
    )
}

export default AppContextProvider;