import './App.css';
import { Navbar, MainPage, AboutPage, ProjectsPage }  from './components';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className      = "App">
        <header className = "App-header">
        <Navbar/>
        <div class        = "nav-space"></div>
        <Switch>
          <Route path     = "/" exact component         = {MainPage}/>
          <Route path     = "/about" exact component    = {AboutPage}/>
          <Route path     = "/projects" exact component = {ProjectsPage}/>
        </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
