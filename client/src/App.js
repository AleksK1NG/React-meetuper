import React, { Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import Loader from './components/shared/Loader/Loader';
import TheNavbar from './components/Layout/TheNavbar/TheNavbar';
import TheFooter from './components/Layout/TheFooter/TheFooter';
import { loadUser } from './ducks/auth';
import PageSecret from './pages/PageSecret/PageSecret';
import ProtectedRoute from './components/common/ProtectedRoute/ProtectedRoute';

import { ToastContainer, toast } from 'react-toastify';

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
const PageLogin = React.lazy(() => import('./pages/PageLogin/PageLogin'));
const PageRegister = React.lazy(() =>
  import('./pages/PageRegister/PageRegister')
);

const App = ({ loadUser }) => {
  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div id="app">
      <TheNavbar />
      <div className="page-wrapper">
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/" component={PageHome} />
            <Route exact path="/meetups/:id" component={PageMeetupDetail} />
            <ProtectedRoute exact path="/find" component={PageMeetupFind} />
            <Route exact path="/login" component={PageLogin} />
            <Route exact path="/register" component={PageRegister} />
            <Route path="/secret" component={PageSecret} />
            <Route path="*" exact component={PageNotFound} />
          </Switch>
        </Suspense>
      </div>
      <TheFooter />
      <ToastContainer position={toast.POSITION.TOP_CENTER} />
    </div>
  );
};

export default connect(
  null,
  { loadUser }
)(App);
