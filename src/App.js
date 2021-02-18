import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation, useParams } from "react-router-dom";
import './App.scss';
import BackTop from './component/BackTop';
import Footer from './component/Footer';
import Header from "./component/Header";
import Menu from "./component/Menu";
import PayLoad from './component/Payload';
import Page from "./component/Router";

function App() {
  const [checkPay, setCheckPay] = useState(false);


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


  const show = () => {
    setCheckPay(true);
  }
  return (
    <Router>
      <Menu />
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
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
