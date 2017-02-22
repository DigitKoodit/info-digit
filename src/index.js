import React from 'react';
import ReactDOM from 'react-dom';

import { IntlProvider , addLocaleData} from 'react-intl';
import fi from 'react-intl/locale-data/fi';
import App from './App';
import './index.css';

addLocaleData(fi);

ReactDOM.render(
  <IntlProvider locale="fi">
    <App />
  </IntlProvider>,
  document.getElementById('root')
);
