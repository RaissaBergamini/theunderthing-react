import React from 'react'
import Home from './pages/home'
import Media from './pages/mediaServer'
import Tech from  './pages/tech'
import Cook from  './pages/cooking'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import HeaderMenu from "./components/HeaderMenu";
import { Divider, Container } from "semantic-ui-react";

const Content = styled(Container)`
  margin-top: 6em
  flex: 1;
`;

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  const App = () => {
  flex-direction: column;
`;

const MissingPage = () => <h1>URL doesn't exist</h1>;


const App = () => {

  return (
<Router>
    <Wrapper>
      <HeaderMenu
        onItemClick={item => this.onItemClick(item)}
        items={[
          ["Home", "/"],
          ["Media Server", "/media"],
          ["Tech", "/tech"],
          ["Cooking", "/cook"],
        ]}
        headerIcon={"terminal"}
      />
      <Divider />
      <Content>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/media" component={Media} />
          <Route path="/tech" component={Tech} />
          <Route path="/cook" component={Cook} />
          <Route component={MissingPage} />
        </Switch>
      </Content>
    </Wrapper>
  </Router>
  )
}

export default App
