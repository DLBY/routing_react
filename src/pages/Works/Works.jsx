import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Worksbar from '../../Components/Worksbar';
import Work from './Work';

const Works = () => (
  <>
    <h1>Welcome on the works page. Please, select a category</h1>
    <Worksbar />
    <Switch>
      <Route path="/works/:workSlug">
        <Work />
      </Route>
    </Switch>
  </>
);
export default Works;
