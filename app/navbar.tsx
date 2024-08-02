'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';

const CustomLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
});

export default function MyAppBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const drawerContents = (
    <Box
      sx={{ width: 250, backgroundColor: '#2e3842', height: '100%', color: '#fff' }} // Width of the drawer and background color
      role="presentation"
      onClick={toggleDrawer(false)} // Close drawer on click
      onKeyDown={toggleDrawer(false)} // Close drawer on key press
    >
      <List>
        <CustomLink href="/inventory" passHref>
          <ListItem button component="a">
            <ListItemText primary="Inventory" />
          </ListItem>
        </CustomLink>
        <ListItem button>
          <ListItemText primary="Sign In" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed" // Make the AppBar fixed
        sx={{
          backgroundColor: 'rgba(33, 178, 166, 1)', // Change the color
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add drop shadow
          top: 0, // Ensure it's positioned at the top
          left: 0, // Ensure it's aligned to the left
          right: 0, // Ensure it spans the full width
          zIndex: (theme) => theme.zIndex.appBar, // Ensure it stays above other content
        }}
      >
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ 
                display: { xs: 'none', sm: 'block' } // Hide on small screens
              }}
            >
              Pantry Tracker
            </Typography>
          </Box>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)} // Open drawer on click
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)} // Close drawer on close action
        sx={{
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add drop shadow
        }}
      >
        {drawerContents}
      </Drawer>
    </Box>
  );
}
