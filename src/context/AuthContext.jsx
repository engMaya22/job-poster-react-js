
import { useEffect, useState } from "react";
import { createContext ,useContext} from "react";

    const AuthContext = createContext();
    export const useAuthContext = ()=> useContext(AuthContext);


    export const AuthProvider = ({children} )=>{

        const [isAuthinticate , setIAuthinticate ] = useState(false);
        const [user , setUser] = useState(null);
          
   
        useEffect(()=>{
            const storageData = localStorage.getItem('isAuth');
            if(storageData)
                 setIAuthinticate(JSON.parse(storageData))


        },[])

        
        const loginUser = async(user)=>{
            const res = await fetch('/api/login',{
                method: 'POST',
                headers :{
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(user),
            });
            // console.log(res);
            // if(res.ok){
                setIAuthinticate(true);
                setUser(user);
                // console.log(user)
                localStorage.setItem('isAuth',JSON.stringify(true))

            // }

            return;
        }

        const registerUser = async(user)=>{
            const res = await fetch('/api/users',{
                method: 'POST',
                headers :{
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(user),
            });

            return;

        
        }
        const logoutUser = async()=>{
            setIAuthinticate(false);
            setUser(null)

        }

        const value ={
            isAuthinticate ,
            user ,
            loginUser ,
            registerUser ,
            logoutUser

        };





    return <AuthContext.Provider value={value} >
             {children} 
           </AuthContext.Provider>
}