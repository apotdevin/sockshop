import React from "react";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import { CardGrid } from "./components/CardGrid";
import { Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;

const NotFound = () => <h1>Not Found</h1>;
const Contact = () => <h1>CONTACT ME AT...</h1>;
const Terms = () => <h1>THESE ARE THE TERMS AND CONDITIONS</h1>;
const Paid = () => <h1>THANKS FOR YOUR PAYMENT!</h1>;

class App extends React.Component {
  render() {
    return (
      <Layout style={{ height: "auto" }}>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <img
            src={'https://i.imgsafe.org/bb/bb032c48d8.png'}
            alt={"shopIcon"}
            height={"64px"}
            style={{ float: "left", marginRight: "20px" }}
          />
          <Menu
            theme="dark"
            mode="horizontal"
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">
              <Link to="/">Store</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/contact">Contact</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/terms">Terms and Conditions</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content
          className={"App"}
          style={{ padding: "0 50px", marginTop: 84, height: "100%" }}
        >
          <Switch>
            <Route path="/" exact component={CardGrid} />
            <Route path="/contact/" component={Contact} />
            <Route path="/terms/" component={Terms} />
            <Route path="/paid/" component={Paid} />
            <Route component={NotFound} />
          </Switch>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          SockShop ©2019 Created by APotdevin
        </Footer>
      </Layout>
    );
  }
}

export default App;
