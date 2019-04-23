import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppNavbar from './components/Layout/AppNavbar/AppNavbar';
import Loader from './components/shared/Loader/Loader';

const BookListPage = React.lazy(() =>
  import('./pages/BookListPage/BookListPage')
);
const BookPageEdit = React.lazy(() =>
  import('./pages/BookPageEdit/BookPageEdit')
);
const BookPageCreate = React.lazy(() =>
  import('./pages/BookPageCreate/BookPageCreate')
);

const App = () => {
  return (
    <div className="App">
      <AppNavbar />
      <Suspense fallback={<Loader />}>
        <div className="container">
          <Switch>
            <Route exact path="/" component={BookListPage} />
            <Route exact path="/books/:id/edit" component={BookPageEdit} />
            <Route exact path="/create" component={BookPageCreate} />
          </Switch>
        </div>
      </Suspense>
    </div>
  );
};

export default App;
