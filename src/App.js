import React, { useContext } from 'react';
import Login from './components/Login';
import JobPage from './components/JobPage';
import { JobsProvider, UserProvider } from './AppContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import JobDetails from './components/JobDetails';

function App() {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route path='/' exact component={Login} />
          <JobsProvider>
            <Route path='/main' exact component={JobPage} />
            <Route path='/detail/:id' exact component={JobDetails} />
          </JobsProvider>
        </Switch>
      </Router>
    </UserProvider>

  );
}

export default App;
