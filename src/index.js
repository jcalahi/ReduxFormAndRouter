import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import ReduxPromise from 'redux-promise';
//
// import reducers from './reducers';
// import PostsIndex from './components/posts-index';
// import PostsNew from './components/posts-new';
//
// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
//
// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <BrowserRouter>
//       <div>
//         <Switch>
//           <Route path="/posts/new" component={PostsNew} />
//           <Route path="/" component={PostsIndex} />
//         </Switch>
//       </div>
//     </BrowserRouter>
//   </Provider>
//   , document.querySelector('.container')
// );

const Datasource = {
  getComments: function() {
    console.log('get comments');
  }
};

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: Datasource.getComments()
    };
    this.handleChange = this.handleChange.bind(this);
  }
  render() {
    return (

    );
  }
}

const App = ()=> {
  return (
    <div>
      App Container
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('.container')
);
