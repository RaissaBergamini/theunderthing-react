import React from "react";
import ReactDOM from "react-dom";
import { Container, Header } from "semantic-ui-react";

import Card from "./components/card";
import Menu from "./components/menu";
import Home from "./components/homepage"


import "./semantic.solar.css";

const App = ({ children }) => (
  <Container style={{ margin: 20 }}>
    <Header as="h2">The Underthing Server </Header>

    {children}
  </Container>
);

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);
var developers = [
                  {name:'Raissa Bergamini', description:'Systems Engineer, data engineering and devops lover. Lives with three birds and a blackberry tree.', job:'Cloud Architect', photo:'./img/raissa.jpg', linkGit:"https://github.com/RaissaBergamini"}, 
                  {name:'Gabriel Meneses', description:'', job:'Data Engineer'}
                ]

ReactDOM.render(
  <App>
    <Menu/>
    <Home></Home>
    <Card header="Developers" people={developers}/>
  </App>,
  document.getElementById("root")
);
