import PropTypes from "prop-types";
import React from "react";
import "./homepage.css";

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
  // Segment,
  // Sidebar,
  // Visibility
} from "semantic-ui-react";

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as="h1"
      content="The Underthing"
      inverted
      style={{
        fontSize: mobile ? "2em" : "4em",
        backgroundImage: 'img/server.jpg',
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: mobile ? "1.5em" : "3em"
      }}
    />
    <Header
      as="h2"
      content="Local hosted and managed server"
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "1.5em" : "3.5em"
    }}
    />
    
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

export default HomepageHeading;