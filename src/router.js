import React from 'react';
import { Router, Route, Redirect } from 'dva/router';
import App from './routes/App';
import AAA from './routes/AAA';
import BBB from './routes/BBB';
import EEE from './routes/EEE';
import FFF from './routes/FFF';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <App>
        <Route path='/' exact render={() => <Redirect to='/aaa' />} />
        <Route path="/aaa" component={AAA} />
        <Route path="/aaa/eee" component={EEE} />
        <Route path="/aaa/fff" component={FFF} />      
        <Route path="/bbb" component={BBB} />
      </App>
    </Router>
  );
}

export default RouterConfig;
