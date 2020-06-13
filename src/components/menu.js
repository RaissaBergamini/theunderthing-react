import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default class MenuSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
    <Router>
      <Menu secondary link>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
        ><Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item
          name='Tech'
          active={activeItem === 'Tech'}
          onClick={this.handleItemClick}
        >
        <Link to="/tech">Tech</Link>
        </Menu.Item>
        <Menu.Item
          name='Cooking'
          active={activeItem === 'Cooking'}
          onClick={this.handleItemClick}
        
        />
        <Menu.Item
          name='Media Server'
          active={activeItem === 'Media Server'}
          onClick={this.handleItemClick}
            as='a'
            href= './pages/mediaServer'
        />

        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </Router>
    )
  }
}

function Home() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
  
  function About() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }
  