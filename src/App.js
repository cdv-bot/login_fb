import React from 'react';
import './App.scss';
import BackTop from './component/BackTop';
import Content from './component/Content';
import Footer from './component/Footer';
import Header from "./component/Header";
import Menu from "./component/Menu";
import Page from "./component/Router";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import BuyInfo from './component/Buy_info';
import { Suspense } from 'react';

function App() {

  const PageRouter = (Page) => {
    let result = null;
    result = Page.map((value, key) => (
      <Route
        key={key}
        exact={value.exact}
        path={value.path}
        render={props => <value.main {...props} />}
      />
    ));
    return result;
  }

  return (
    <Router>
      <Header />
      <Menu />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {/* <Route exact path="/">
          <Content />
        </Route>
        <Route exact path="/products/:id">
          <BuyInfo />
        </Route>
         */}
          {
            PageRouter(Page)
          }
        </Switch>
      </Suspense>
      <BackTop />
      <Footer />
    </Router >
  );
}

export default App;
