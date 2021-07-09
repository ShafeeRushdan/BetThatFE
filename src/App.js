
import './App.css';
import Home from './Home'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './Login'
import Event from './Event'
import Wager from './Wager'

function App() {
  
  const handleSignUp = (name) => {
   fetch(`http://localhost:3000/users`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: name})
    })
      .then(response => response.json())
      .then(data => console.log(data))
  }

  const handleNewEvent = (name) => {
    fetch(`http://localhost:3000/events`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: name})
    })
      .then(response => response.json())
      .then(data => console.log(data))
  }

  const handleNewWager = (amount) => {
    fetch(`http://localhost:3000/wagers`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: amount})
    })
      .then(response => response.json())
      .then(data => console.log(data))
  }
  
  
  return (
 
 <Router>

 <div className="app">

  <Route exact path='/'>
    <Home/>
  </Route>
    
  <Route exact path='/login'>
    <Login handleSignUp={handleSignUp}/>
  </Route>

  <Route exact path='/event'>
    <Event handleNewEvent={handleNewEvent}/>
  </Route>

  <Route exact path='/wager'>
    <Wager handleNewWager={handleNewWager}/>
  </Route>
    
    </div>
 </Router>
  );
}

export default App;
