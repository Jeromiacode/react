import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import RouterIcon from '@mui/icons-material/Navigation';
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

const navLinks = [
  {
    name: 'Home',
    to: '',
    icon: <HomeIcon />,
  },
  {
    name: 'About',
    to: 'about',
    icon: <InfoIcon />,
  },
  {
    name: 'Router',
    to: 'router',
    icon: <RouterIcon />,
  },
];

function NavMenu({onMenuClick}) {
  return (
    <nav>
      <List onClick={onMenuClick}>
        {navLinks.map((link, index) => (
          <NavMenuItem {...link} key={index} />
        ))}
      </List>
    </nav>
  );
}

function NavMenuItem({ name, icon, to }) {
  return (
    // Pour que nos liens fonctionnent avec le routage
    <ListItemButton
    component={NavLink}
    to={to}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={name} />
    </ListItemButton>
  );
}

NavMenu.defaultProps = {
    onMenuClick: () => { } // NOOP
}

export default NavMenu;
