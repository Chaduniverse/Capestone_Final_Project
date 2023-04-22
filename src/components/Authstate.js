import {useState, useEffect} from 'react';
import { auth } from '../Firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Button } from '@mui/material';
import {useNavigate} from 'react-router-dom'


export default function Authstate() {

    const [authUser,setAuthUser] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setAuthUser(user)
             
              // ...
            } else {
              // User is signed out
              // ...
              setAuthUser('')
            }
          });

    }, [authUser])

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate('/signin')
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
          
    }



  return (
    <div>{authUser ?<> <p>Hello, {authUser.email}</p><Button onClick={handleSignOut} variant="outlined">Sign Out</Button></> : <p>Signed Out</p>} </div>
  )
}
