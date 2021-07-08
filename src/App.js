
import './App.css';
import { Switch } from 'react-router-dom';
import Home from './Home'
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const history = useHistory();
  


return (
 <Router>
<div class="flex-grid-center">
  <div class="pure-button arcade-button blue">
	 BEGIN
  </div>
	
</div>
 <div className="app">

 
    <Route exact path='/'>

      <Home/>
    </Route>
    
    </div>
 </Router>
  );
}

export default App;
