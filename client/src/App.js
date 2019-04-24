import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import Loader from './components/shared/Loader/Loader';
import TheNavbar from './components/Layout/TheNavbar/TheNavbar';
import TheFooter from './components/Layout/TheFooter/TheFooter';
import AppSpinner from './components/shared/AppSpinner/AppSpinner';

const PageHome = React.lazy(() => import('./pages/PageHome/PageHome'));
const PageMeetupDetail = React.lazy(() =>
  import('./pages/PageMeetupDetail/PageMeetupDetail')
);

const PageMeetupFind = React.lazy(() =>
  import('./pages/PageMeetupFind/PageMeetupFind')
);

const PageNotFound = React.lazy(() =>
  import('./pages/PageNotFound/PageNotFound')
);

const App = () => {
  return (
    <div id="app">
      <TheNavbar />
      <div className="page-wrapper">
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/" component={PageHome} />
            <Route exact path="/meetups/:id" component={PageMeetupDetail} />
            <Route exact path="/find" component={PageMeetupFind} />
            <Route path="*" exact component={PageNotFound} />
          </Switch>
        </Suspense>
      </div>
      <TheFooter />
    </div>
  );
};

export default App;
