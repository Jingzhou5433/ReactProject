import React, {Component, Fragment} from 'react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router';
import HomePage from '../../features/home/HomePage'
import EventDetailedPage  from '../../features/event/EventDetailed/EventDetailedPage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage';
import settingsDashboard from '../../features/user/Settings/SettingsDashboard';
import EventForm from '../../features/event/EventForm/EventForm';



class App extends Component {
  render() {
    return (
      <Fragment>
        {/* First find the route of '/', if match, load HomePage
        if it doesn't match, goes inside */}
        <Route exact path = '/' component={HomePage} /> 
        <Route 
          path='/(.+)'
          render={() => (
            <Fragment>
              <NavBar/>
              <Container className="main">
                <Route path = '/events' component={EventDashboard} />
                <Route path = '/events/:id' component={EventDetailedPage} />
                <Route path = '/people' component={PeopleDashboard} />
                <Route path = '/profile/:id' component={UserDetailedPage} />
                <Route path = '/settings' component={settingsDashboard} />
                <Route path = '/createEvent' component={EventForm} />
              </Container>
            </Fragment>
          )}
        />
      </Fragment>
      
      
        

      
    );
  }
}

export default App;
