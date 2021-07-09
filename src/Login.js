import React, { useState } from "react";
import { NavLink } from "react-router-dom"
function Login (props) {
    
    const [name, setName] = useState("");
    const handleSubmit = (e) => {
        localStorage.setItem("currentEvent", name)
        // add localStorage.clear() to log out function 
        props.handleSignUp(name)
    }

    const handleOnChangeN = (e) => {
    setName(e.target.value)
    }

    return (
    
        <div>
        
        <div class="card">
        
        <form onSubmit={(e) => { handleSubmit(e) }}>
          
            <h2>Sign up</h2>
            <label>
               <h2> Name </h2>
              
        <ul></ul>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => { handleOnChangeN(e) }}
                    />
            </label>
            <ul></ul>

            <button class="arcade-buttonnospace" type="submit"> Submit</button>
        </form>

      
        <ul></ul>
                    </div>
                    <h1>{name}</h1>
                    <NavLink class="pure-button arcade-button blue" to="/event">
          Bet 
        </NavLink>
                    </div>

    );
}

export default Login;



