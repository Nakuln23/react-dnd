import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import QuestionDashboard from './components/questionDashboard/Index'


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={QuestionDashboard}/>
      </Switch>
    </Router>
    
  );
}

export default App;
