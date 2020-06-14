import PropTypes from "prop-types";
import React from "react";
import "./homepage.css";
import server from '../img/server.jpg';

import { Image } from 'semantic-ui-react'

import "semantic-ui-css/semantic.min.css";

import {
  Container,
  // Divider,
  // Grid,
  Header,
  // Icon,
  // Image,
  // List,
  // Menu,
  // Responsive,
  // Segment,s  1
  // Sidebar,
  // Visibility
} from "semantic-ui-react";

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container
  >
    <Header
      as= "h1"
      content="The Underthing"
      
      style={{
        width: 1024,
        height: 320,
        display: 'inline-block',
        opacity: 0.9,
        backgroundImage: server,
        backgroundSize: 'cover',
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: mobile ? '1.5em' : '3em',
      }}>
      
      </Header>
    {/* <Header
      as="h2"
      content=
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "1.5em" : "3.5em"
    }}
    /> */}
    
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

export default HomepageHeading;