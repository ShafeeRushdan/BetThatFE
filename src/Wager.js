import React, { useState } from "react";
import { NavLink } from "react-router-dom"
function Wager (props) {

    const [amount, setAmount] = useState("");
    const handleSubmit = (e) => {
       
        // add localStorage.clear() to log out function 
     props.handleNewWager(amount)

    }
    const handleOnChangeN = (e) => {
    setAmount(e.target.value)
    }

    return (
        <div>

        <div class="card">
        <form onSubmit={(e) => { handleSubmit(e) }}>
            <h2>Make a wager</h2>
            <label>
               <h2> Wager amount </h2>
        <ul></ul>
                <input
                    type="text"
                    value={amount}
                    onChange={(e) => { handleOnChangeN(e) }}
                    />
            </label>
            <ul></ul>

            
        </form>
                    </div>
                    <h1>{amount}</h1>
                    <NavLink class="arcade-buttonnospace" to="/" type="submit"> Submit</NavLink>
                    
                    </div>

    );
}

export default Wager;



