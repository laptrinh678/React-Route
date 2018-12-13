import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './component/Layout'
import Home from './component/home'
import Catenew from './component/Catenew'
import New from './component/new'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/category" component={Catenew} />
            <Route exact={true} path="/detailnew/:id" component={New} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
