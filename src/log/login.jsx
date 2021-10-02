import React ,{useState,useEffect} from "react";
import fire from "./fire";
import './login.css';
import Hero from "./Hero";
import First from "./First";
const Login = ()=>{
    const [user, setuser] = useState('');
    const [email, setemail] = useState('');
    const [emailerror, setemailerror] = useState('');
    const [password, setpassword] = useState('');
    const [passworderror, setpassworderror] = useState('');
    const [hasAccount, sethasAccount] = useState(false);

    const clearInput =()=>{
        setemail("");
        setpassword('');
    }
    const clearError =()=>{
        setpassworderror('');
        setemailerror('');
    }

    const handleLogin =()=>{
        clearError();
        fire
        .auth()
        .signInWithEmailAndPassword(email,password)
        .catch((err) =>{
            if(err.code === "auth/invalid-email" || err.code === "auth/user-disabled" || err.code === "auth/user-not-found" )
            setemailerror(err.message);
            if(err.code === "auth/wrong-password")
            setpassworderror(err.message);
        });
    };

    const handleSignup = ()=>{
        clearError();
        fire
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .catch((err) =>{
            if(err.code === "auth/email-already-in-use" || err.code === "auth/invalid-email" )
            setemailerror(err.message);
            if(err.code === "auth/weak-password")
            setpassworderror(err.message);
        });
    }


    const handleLogout = ()=>{
        fire.auth().signOut();
    };

    const authListener =()=>{
        fire.auth().onAuthStateChanged(user =>{
            if(user){
                clearInput();
                setuser(user);
            }
            else{
                setuser("");
            }
        })
    }

    useEffect(()=>{
        authListener();
    },[])
    return (
        <>
        <div className="App">
        {user ? (
            <Hero handleLogout ={handleLogout}/>
        ) : (
            <First
                    email ={email}
                    setemail={setemail}
                    password ={password}
                    setpassword ={setpassword}
                    handleLogin ={handleLogin}
                    handleSignup ={handleSignup}
                    hasAccount ={hasAccount}
                    sethasAccount ={sethasAccount}
                    emailerror ={emailerror}
                    passworderror ={passworderror}
                    clearError ={clearError}
                    clearInput ={clearInput}
                />
        )}
                
                
        </div>
         
        </>
    )
}
export default Login;