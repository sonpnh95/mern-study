import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import routeUrl from './common/routeUrl/routeUrl';
import 'bootstrap/dist/css/bootstrap.min.css';
import FA from 'react-fontawesome'

import Navbar from './layouts/Navbar'

import ExercisesList from './components/exercises/ExercisesList'
import ExercisesEdit from './components/exercises/ExercisesEdit'
import ExercisesAdd from './components/exercises/ExercisesAdd'
import UserAdd from './components/users/UserAdd'

function App() {
  return (
    <Router>
      <Navbar />
      <FA name="accusoft" />
      <Switch>
        <Route path={routeUrl.exercisesList} component={ExercisesList} />
        <Route path={routeUrl.exercisesEdit} component={ExercisesEdit} />
        <Route path={routeUrl.exercisesAdd} component={ExercisesAdd} />
        <Route path={routeUrl.userAdd} component={UserAdd} />
      </Switch>
    </Router>
  );
}

export default App;
