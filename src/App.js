import React, { useContext } from 'react';
import Login from './components/Login';
import JobPage from './components/JobPage';
import { JobsProvider, UserProvider } from './AppContext'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import JobDetails from './components/JobDetails';

function App() {
  return (
    <JobsProvider>
      <UserProvider>
        <Router>
          <Switch>
            <Route path='/main' exact component={JobPage} />
            <Route path='/' exact component={Login} />
            <Route path='/detail/:id' exact component={JobDetails} />
          </Switch>
        </Router>
      </UserProvider>
    </JobsProvider>

  );
}

export default App;
