import React from 'react';
import Join from '../src/components/Join/ Join'
import Chat from '../src/components/Chat/Chat'
import {Route,Switch} from 'react-router-dom';

const App = ()=>(
  <Switch>
     <Route path="/" exact component={Join} />
    <Route psth='/chat' exact component={Chat} />
  </Switch>
);
export default App;