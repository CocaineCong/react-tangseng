import './App.css';
import React, {useEffect} from 'react';
import './App.css';
import {useLocation, useNavigate, useRoutes} from "react-router-dom";
import routes from "./router";
import {message,Layout} from "antd";
import Footer from './components/Footer';

function App() {
  const location = useLocation()
  return (
      <div className="App">
          <Layout>
            <BeforeRouterEnter />
          </Layout>
      {/* {location.pathname !== '/Login' ? null : <Footer />} */}
      </div>
  );
}

function BeforeRouterEnter(){
  // TODO如果没有access_token就跳到登陆页面
  const outlet = useRoutes(routes)
  return outlet;
}

export default App;