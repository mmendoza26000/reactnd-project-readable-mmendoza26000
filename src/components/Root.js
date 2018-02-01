import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import AddPost from './AddPost';
import EditPost from './EditPost';
import PostDetail from './PostDetail';
import { getAllCategories, getAllPosts } from '../actions';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const Root = ({store}) => {

    //Fetch initial data from server
    store.dispatch(getAllCategories());
    store.dispatch(getAllPosts());

    return(
        <Provider store={store}>
            <MuiThemeProvider>
                <Router>
                    <div>
                        <Route exact path="/:categoryName?" component={App} />
                        <Route path="/add/post/:categoryName" component={AddPost} />
                        <Route path="/edit/post/:postId" component={EditPost} />
                        <Route exact path="/:categoryName/:postId" component={PostDetail} />
                    </div>
                </Router>
            </MuiThemeProvider>
        </Provider>
    )

}

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root;