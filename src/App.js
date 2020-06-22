import React from 'react';
// import './App.css';
import Login from './components/Login';
import JobPage from './components/JobPage';
import { JobsProvider, UserProvider } from './AppContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import JobDetails from './components/JobDetails';

function App() {
  return (
    <JobsProvider>
      <UserProvider>
        <Router>
          <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/main' exact component={JobPage} />
            <Route path='/detail/:id' exact component={JobDetails} />
          </Switch>
        </Router>
      </UserProvider>
    </JobsProvider>
  );
}

export default App;
