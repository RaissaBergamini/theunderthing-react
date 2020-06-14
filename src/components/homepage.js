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
      inverted
      style={{  
        display: 'inline-block',
        opacity: 0.9,
        backgroundImage: `URL('https://pics.imgrapid.com/wp-content/uploads/2019/09/03153448/security_super-micro_1003122870_top.jpg')`,
        backgroundSize: 'cover',
        fontSize: mobile ? '2em' : '4em',
        width: 1700,
            height: 480,
        fontWeight: 'normal',
        marginBottom: mobile ? '0.5em' : '1em',
        marginTop: mobile ? '-0.2em' : '-0.3em',
        marginLeft: mobile ? '-1em' : '-3em',
      }}>
      <h1 content= 'The Underthing'
      style={{ 
        fontSize: mobile ? '0.5em' : '1em',
        fontWeight: 'normal',
        marginTop: mobile ? '1em' : '2em',
        marginBottom: mobile ? '0.5em' : '1em',
        marginLeft: mobile ? '1em' : '2em'
      }}
      >The Underthing</h1>
      <h3 content='Local hosted and managed server Underthing'
      style={{ 
        fontWeight: 'normal',
        marginTop: mobile ? '1em' : '2em',
        marginBottom: mobile ? '0.5em' : '1em',
        marginLeft: mobile ? '5em' : '7em'
      }}>Local hosted and managed server Underthing</h3>
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