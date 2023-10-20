import React from 'react';
import { Menu, Image, Input, Button } from 'semantic-ui-react';

const HeaderComponent = () => {
  return (
    <Menu inverted>
      <Menu.Item as="a">
        <Image size="mini" src="/logo.png" style={{ marginRight: '3.5em' }} />
        <span style={{ fontWeight: 'bold', marginLeft: '-10px' }}>DevDeakin</span>
        <div style={{ width: '60px' }} /> {/* Add a spacer */}
      </Menu.Item>
      <Menu.Item>
        <Input icon='search' placeholder='Search...' style={{ width: '1060px' }} /> {/* Set the desired width */}
      </Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item>
          <Button primary>Post</Button>
        </Menu.Item>
        <Menu.Item>
          <Button>Login</Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default HeaderComponent;
