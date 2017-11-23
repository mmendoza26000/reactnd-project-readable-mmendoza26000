import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const Root = ({store}) => (
    <Provider store={store}>
        <MuiThemeProvider>
            <Router>
                <div>
                    <Route path="/:categoryName?" component={App} />
                </div>
            </Router>
        </MuiThemeProvider>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root;