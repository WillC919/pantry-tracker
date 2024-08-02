import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: 'auto',
  borderRadius: '16px', // Round the border corners
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '40ch', // Increase width of the search bar
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '100%', // Ensure the input takes full width within its container
    },
  },
}));

const CustomLink = styled(Link)({
    textDecoration: 'none',
    color: 'inherit',
});

export default function PrimarySearchAppBar({ searchQuery, handleSearchChange } : { searchQuery: string, handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void }) {
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
        <CustomLink href="../" passHref>
          <ListItem button component="a">
            <ListItemText primary="Home" />
          </ListItem>
        </CustomLink>
        <ListItem button>
          <ListItemText primary="My account" />
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
                display: { xs: 'none', sm: 'block' }, // Hide on small screens
                marginRight: 3
              }}
            >
              Pantry Tracker
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                value={searchQuery}
                onChange={handleSearchChange} // Update search query on input change
              />
            </Search>
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
