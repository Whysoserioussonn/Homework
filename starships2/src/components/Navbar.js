import React from 'react';
import { Link } from 'react-router-dom';
import {Menu, Container} from 'semantic-ui-react';

export default function Navbar() {
  return (
    <Menu inverted>
      <Container >
        <Link to='/'>
      <Menu.Item name='star wars API' />
      </Link>
      <Link to='/starships'>
      <Menu.Item name='starships' />
      </Link>
      <Link to='/films'>
      <Menu.Item name='films' />
      </Link>
      <Link to='/people'>
      <Menu.Item name='people' />
      </Link>
      <Link to='/planets'>
      <Menu.Item name='planets' />
      </Link>      
      <Link to='/species'>
      <Menu.Item name='species' />
      </Link>
      <Link to='/vehicles'>
      <Menu.Item name='vehicles' />
      </Link>   
      </Container>
    </Menu>
  );
}



//type rfc to get template for export default function 
// if needsbe, install snippet ES7 React/Redux/React Native snippets
//import Menu,Container from semenatic-ui-react
// inside return , use Menu as the outermost div and give it a prop of inverted
//'Menu inverted' means menu may have its colors inverted to show greater contrast.
// inside Menu div, add Menu.Item for each api category
// add a <Container> div and wrap all menu items

// NEXT, we go back to the app.js and pass the <Navbar/> to the return statement inside the div! and test it on react dom page, should see a menu ontop