import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation, useParams } from "react-router-dom";
import './App.scss';
import BackTop from './component/BackTop';
import Footer from './component/Footer';
import Header from "./component/Header";
import Menu from "./component/Menu";
import PayLoad from './component/Payload';
import Page from "./component/Router";
import Slider from "react-slick";
import './component/slick/slick-theme.scss';
import './component/slick/slick.scss';
import Homeload from './component/loading/homeload';


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
