import './App.scss';
import { Navbar, MainPage, Footer }  from './components';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  
  return (
    <Router>
      <div className = "App">
        <Navbar/>
        <body className = "App-body">
          <Switch>
            <Route path = "/" exact component = {MainPage}/>
          </Switch>
        </body>
        <footer className = "App-footer">
          <Footer/>
        </footer>
      </div>
    </Router>
  );
}

export default App;
