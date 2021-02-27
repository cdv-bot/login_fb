import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import BackTop from './component/BackTop';
import Footer from './component/Footer';
import Header from "./component/Header";
import Homeload from './component/loading/homeload';
import Menu from "./component/Menu";
import Page from "./component/Router";
import './component/slick/slick-theme.scss';
import './component/slick/slick.scss';


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
      <Suspense fallback={<Homeload />}>
        <Switch>
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
