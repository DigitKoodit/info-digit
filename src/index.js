import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route } from 'react-router-dom'
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
      <div>
        <Route exact to="/" component={App}/>
        <Route exact to="/admin" component={Admin}/>
      </div>
    </BrowserRouter>
  </IntlProvider>,
  document.getElementById('root')
);
