import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

 class Navbar extends Component {
   state ={activeItem: 'home'}; 
   handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Menu pointing secondary>
        <Link to="/">
          <Menu.Item header>MERN APP </Menu.Item>
        </Link>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            content='Home'
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='profile'
            active={activeItem === 'profile'}
            content='Profile'
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='channels'
            active={activeItem === 'channels'}
            content='Channels'
            onClick={this.handleItemClick}
          />

          <Menu.Menu position='right'>
                <Menu.Item
                  link
                  name='login'
                  active={activeItem === 'login'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='register'
                  active={activeItem === 'register'}
                  onClick={this.handleItemClick}
                  />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default Navbar