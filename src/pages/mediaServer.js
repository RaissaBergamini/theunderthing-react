import React, { Component } from "react";

import Slider from "react-slick";

import "semantic-ui-css/semantic.min.css";

import {
  Button,
  Container,
  Dropdown,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  GridColumn
} from "semantic-ui-react";

import "./mediaServer.css";

class App extends Component {
  state = {
    dropdownMenuStyle: {
      display: "none"
    }
  };

  handleToggleDropdownMenu = () => {
    let newState = Object.assign({}, this.state);
    if (newState.dropdownMenuStyle.display === "none") {
      newState.dropdownMenuStyle = { display: "flex" };
    } else {
      newState.dropdownMenuStyle = { display: "none" };
    }

    this.setState(newState);
  };

  render() {
    const slickSettings = {
      autoplay: true,
      dots: true,
      speed: 500
    };

    return (
      <div className="App">

        <Container>
          <Segment vertical>
            <Grid container stackable textAlign="center" columns={4}>
                <Grid.Row>
                <Grid.Column>
                <Image
                  centered
                  circular
                  size="small"
                  src={require("../img/plex_logo.png")}
                />
                </Grid.Column>
                <Grid.Column>
                <Image
                  centered
                  circular
                  size="small"
                  src={require("../img/calibre_logo.png")}
                />
                </Grid.Column>
                <Grid.Column>
                <Image
                  centered
                  circular
                  size="small"
                  src={require("../img/sonarr_logo.png")}
                />
                </Grid.Column>
                <Grid.Column>
                <Image
                  centered
                  circular
                  size="small"
                  src={require("../img/radarr_logo.png")}
                />
                </Grid.Column>

                </Grid.Row>
                <Grid.Row>
                    <GridColumn>
                    <Header as="h1">Plex</Header>        
                    </GridColumn>
                    <GridColumn>
                    <Header as="h1">Calibre</Header>        
                    </GridColumn>
                    <GridColumn>
                    <Header as="h1">Sonarr</Header>        
                    </GridColumn>
                    <GridColumn>
                    <Header as="h1">Radarr</Header>        
                    </GridColumn>

                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                    <p>
                    Free movies and TV plus all your personal media libraries on every device. Master your Mediaverse.
                    </p>
                    </Grid.Column>

                    <Grid.Column>
                    <p>
                    The one stop solution for all your e-book needs. Comprehensive e-book software.
                    </p>
                    </Grid.Column>
                    <Grid.Column>
                    <p>
                    Sonarr is a PVR for Usenet and BitTorrent users. It can monitor multiple RSS feeds for new episodes of your favorite shows and will grab, sort and rename them.
                    </p>
                    </Grid.Column>
                    <Grid.Column>
                    <p>
                    Radarr is an independent fork of Sonarr reworked for automatically downloading movies via Usenet and BitTorrent. 
                    </p>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                <Grid.Column>
                <Button basic target="_blank" href="https://plex.theunderthing.tech">Go to Page &raquo;</Button>    
                </Grid.Column>
                <Grid.Column>
                <Button basic target="_blank" href="https://calibre.theunderthing.tech">Go to Page &raquo;</Button>    
                </Grid.Column>
                <Grid.Column>
                <Button basic target="_blank" href="https://sonarr.theunderthing.tech">Go to Page &raquo;</Button>    
                </Grid.Column>
                <Grid.Column>
                <Button basic target="_blank" href="https://radarr.theunderthing.tech">Go to Page &raquo;</Button>    
                </Grid.Column>

                </Grid.Row>
            </Grid>
          </Segment>
          <Segment vertical>
            <Grid stackable>
              <Grid.Column width={10}>
                <Header as="h1">
                  What we used?{" "}
                </Header>
                <Header as="h2">
                <span className="sub">Docker</span>
                </Header>
                <p>
                  Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                  id ligula porta felis euismod semper. Praesent commodo cursus
                  magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                  ac cursus commodo.
                </p>
              </Grid.Column>
              <Grid.Column width={6}>
                <Image src={require("../img/docker_logo.png")} />
              </Grid.Column>
            </Grid>
            </Segment>
          <Segment vertical>
            <Grid stackable>
            <Grid.Column width={4}>
                <Image src={require("../img/nginx_logo.png")} />
              </Grid.Column>
              <Grid.Column width={10}>
                <Header as="h2">
                <span className="sub">Nginx</span>
                </Header>
                <p>
                  Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                  id ligula porta felis euismod semper. Praesent commodo cursus
                  magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                  ac cursus commodo.
                </p>
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment vertical>
            <Grid stackable>
              <Grid.Column width={10}>
              <Header as="h2">
                <span className="sub">Dell Power Edge Server</span>
                </Header>
                <p>
                  Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                  id ligula porta felis euismod semper. Praesent commodo cursus
                  magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                  ac cursus commodo.
                </p>
              </Grid.Column>
              <Grid.Column width={6}>
                <Image src={require("../img/dell_logo.png")} />
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment vertical>
            <Grid columns={2}>
              <Grid.Column>
              </Grid.Column>
              <Grid.Column textAlign="right">
                <a href="#root">Back to top</a>
              </Grid.Column>
            </Grid>
          </Segment>
        </Container>
      </div>
    );
  }
}

export default App;