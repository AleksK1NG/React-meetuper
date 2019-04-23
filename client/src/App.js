import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import Loader from './components/shared/Loader/Loader';
import TheNavbar from './components/shared/TheNavbar/TheNavbar';
import TheFooter from './components/shared/TheFooter/TheFooter';

const BookPageEdit = React.lazy(() =>
  import('./pages/BookPageEdit/BookPageEdit')
);
const BookPageCreate = React.lazy(() =>
  import('./pages/BookPageCreate/BookPageCreate')
);

const PageHome = React.lazy(() => import('./pages/PageHome/PageHome'));
const PageMeetupDetail = React.lazy(() =>
  import('./pages/PageMeetupDetail/PageMeetupDetail')
);

const App = () => {
  return (
    <div id="app">
      <TheNavbar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={PageHome} />
          <Route exact path="/meetups/:id" component={PageMeetupDetail} />
          <Route exact path="/create" component={BookPageCreate} />
        </Switch>
      </Suspense>
      <TheFooter />
    </div>
  );
};

export default App;
