import React, { useState } from "react";
import { NavLink } from "react-router-dom"
function Event (props) {

    const [name, setName] = useState("");
    const handleSubmit = (e) => {
        localStorage.setItem("currentUser", name)
        // add localStorage.clear() to log out function 
     props.handleNewEvent(name)

    }
    const handleOnChangeN = (e) => {
    setName(e.target.value)
    }

    return (
        <div>

        <div class="card">
        <form onSubmit={(e) => { handleSubmit(e) }}>
            <h2>Create a new event</h2>
            <label>
               <h2> Event name </h2>
        <ul></ul>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => { handleOnChangeN(e) }}
                    />
            </label>
            <ul></ul>

            
        </form>
                    </div>
                    <h1>{name}</h1>
                    <NavLink class="arcade-buttonnospace" to="/wager" type="submit"> Submit</NavLink>
                    
                    </div>

    );
}

export default Event;



