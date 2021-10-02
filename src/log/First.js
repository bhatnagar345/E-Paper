import React from "react";

const First =(props)=>{
    const {
        email,
        setemail,
        password,
        setpassword,
        handleLogin,
        handleSignup,
        hasAccount,
        sethasAccount,
        emailerror,
        passworderror,
        clearError,
        clearInput,
    } = props;
    return (
        <section className ="login">
           <div className="loginContainer">
               <label>Username</label>
               <input type="text" autoFocus required value ={email} 
                   onChange ={(e) => setemail(e.target.value)}
               />
               <p className="errorMsg">{emailerror}</p>
               <label >Password</label>
               <input type="password"
               required
               value={password}
               onChange={(e)=> setpassword(e.target.value)}
                />
                <p className="errorMsg">{passworderror}</p>
                <div className="btnContainer">
                    {
                        hasAccount ?(
                              <>
                              <button className="bts" onClick ={handleLogin}>Sign In</button>
                              <p>Don't have an account ? <span onClick ={()=>{sethasAccount(!hasAccount); clearInput();clearError()}}>Sign up</span></p>
                              </>
                        ) :(
                            <>
                              <button className="bts"  onClick ={handleSignup}>Sign up</button>
                              <p>Have an Account ? <span onClick ={()=>{sethasAccount(!hasAccount); clearInput();clearError()}}>Sign in</span></p>
                              </>
                        )
                    }
                </div>
           </div>
        </section>
    )
};
export default First;