import './App.css';
import {Routes, Route} from 'react-router-dom'

import Signin from './Signin';
import Signup from './Signup';
import { BookList } from './BookList';
import {BookDetails } from './components/BookDetails';
import Nav from './components/Nav';
import { ReadingList } from './ReadingList';
import {Footer} from './components/Footer';





function App() {
  return (
    <div>

      <Nav/>
     

        <Routes>
            <Route path = "/booklist" element = {<BookList/>}/>
            <Route path = "/books/:id" element = {<BookDetails/>}/>
            <Route path = "/readinglist" element = {<ReadingList/>}/>
            <Route path = "/Signin" element = {<Signin/>}/>
            <Route path = "/Signup" element = {<Signup/>}/>
        
        </Routes>
        <Footer/>
      
       
    </div>
  )
}

export default App;
