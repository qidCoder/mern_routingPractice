import logo from './logo.svg';
import './App.css';

//need to import the router
import { Router } from '@reach/router';

//import components
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        {/* 1. localhost:3000/home: This should display the home page, with a generic "Welcome" heading */}
        <Home path="/home" />

        {/* 2. localhost:3000/4: This should display the number "4", or any other number that was sent through */}
        <Home path='/:num' />


        {/* 3. localhost:3000/hello: This should display the word "hello" or any other word that was sent through */}
        <Home path='/home/:word'/> 

        {/* 4. localhost:3000/hello/blue/red: This should display the word "hello" in blue text with a red background. It should work with any other valid word and colors. */}
        <Home path='/:word/:color1/:color2' />
      </Router>

    </div>
  );
}

export default App;




