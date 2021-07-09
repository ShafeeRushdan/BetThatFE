import React from "react";
import { NavLink } from "react-router-dom"

function Home() {

    return (
        <div class="flex-grid-center">
        <div class="pure-button arcade-button blue">
           
           <NavLink class="pure-button arcade-button blue" to="/login">
           BET THAT
        </NavLink>
        </div>
          
      </div>

    );

}

export default Home;