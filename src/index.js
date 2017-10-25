import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Link } from 'react-router'

import { IntlProvider , addLocaleData} from 'react-intl';
import fi from 'react-intl/locale-data/fi';
import App from './App';
import Admin from './Admin'
import './index.css';

addLocaleData(fi);

ReactDOM.render(
  <IntlProvider locale="fi">
    <BrowserRouter>
      <Switch>
        <Route exact path="/admin" component={Admin}/>
        <Route exact path="/" component={App}/>
      </Switch>
    </BrowserRouter>
  </IntlProvider>,
  document.getElementById('root')
);
