import './App.css';
import { Navbar, Home, Footer }  from './components';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <Navbar/>
        </header>
        <body className="App-body">
          <Home/>
        </body>
        <footer className="App-footer">
          <Footer/>
        </footer>
      </div>
    </Router>

  );
}

export default App;
