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
                  {name:'Raissa Bergamini', description:'Graduated Systems engineer. Loves data engineering, devops and cooking. Lives with three birds and a blackberry tree.', job:'Cloud Architect', photo:"https://raw.githubusercontent.com/RaissaBergamini/theunderthing-react/master/src/img/raissa.jpg", linkGit:"https://github.com/RaissaBergamini", linkLinkedin:""}, 
                  {name:'Gabriel Meneses', description:'', job:'Data Engineer', photo:"https://raw.githubusercontent.com/RaissaBergamini/theunderthing-react/master/src/img/gabriel.jpg", linkGit:"https://github.com/RaissaBergamini", linkLinkedin:""}, 
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
