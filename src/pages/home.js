import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";
import Card from "../components/card";
import Menu from "../components/menu";
import Home from "../components/homepage"

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

const App = ({ children }) => (
  <Container style={{ margin: 20 }}>
    <Header as="h2">The Underthing Server </Header>

    {children}
  </Container>
);


var developers = [
                  {name:'Raissa Bergamini', description:'Systems Engineer, data engineering and devops lover. Lives with three birds and a blackberry tree.', job:'Cloud Architect', photo:'./img/raissa.jpg', linkGit:"https://github.com/RaissaBergamini"}, 
                  {name:'Gabriel Meneses', description:'', job:'Data Engineer'}
                ]

class HomePage extends Component {
render() {
  return (
  <App>
    <Home></Home>
    <Card header="Developers" people={developers}/>
    {/* {developers.map(card => <Card people= {developers}/>)} */}
  </App>
);
  }
}

  
export default HomePage;
