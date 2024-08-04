import React from 'react';
import { Container, Typography, Button, Box, Link, Grid, IconButton, Tooltip } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import CodeIcon from '@mui/icons-material/Code';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SearchIcon from '@mui/icons-material/Search';
import MyAppBar from './navbar'

function App() {
  return (
    <Box>
      {/* Navbar Section */}
      <MyAppBar/>
      {/* Banner Section */}
      <Box
        id="banner"
        sx={{
          textAlign: 'center',
          padding: '0',
          height: '95vh',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '100%', // Ensure it covers the entire width of the screen
          position: 'relative',
        }}
      >
        <Typography variant="h1" sx={{ mb: 2, color: '#fff' }}>Pantry Tracker</Typography>
        <Typography variant="h5" sx={{ mb: 4, color: '#fff' }}>
          A way to catalog your pantry
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#ff5733', // Hot red color
            color: '#fff', // White text for better contrast
            padding: '12px 34px', // Padding for left and right
            '&:hover': {
              backgroundColor: '#c70039', // Slightly darker red on hover
            },
            maxWidth: '200px', // Set a max width for the button
            margin: '0 auto', // Center the button horizontally
          }}
          href="/inventory"
        >
          Get Started
        </Button>
      </Box>

      {/* Synopsis Section */}
      <Box
        id="one"
        sx={{
          padding: '64px 0',
          background: 'rgba(33, 178, 166, 1)',
          width: '100%', // Ensure it covers the entire width of the screen
          position: 'relative',
          margin: '0', // Remove any default margins
        }}
      >
        <Container>
          <Typography variant="h4" gutterBottom sx={{ color: '#fff', textAlign: 'center' }}>
            About Pantry Tracker
          </Typography>
          <Box
            sx={{
              height: '2px',
              width: '100%',
              backgroundColor: '#fff',
              margin: '16px 0', // Adjust margin to add space around the line
            }}
          />
          <Typography variant="body1" paragraph sx={{ color: '#fff', textAlign: 'center' }}>
            A free easy to use web application that helps you keep catalog of your inventory. It keeps helps your search and count the number of items in your pantry
          </Typography>
          <Grid container spacing={4} justifyContent="center"> {/* Increased spacing */}
            <Grid item>
              <Tooltip title="Code">
                <CodeIcon 
                  sx={{ 
                    color: '#fff',
                    border: '2px solid #fff', // Circle outline
                    borderRadius: '50%', // Circle shape
                    fontSize: 24, // Enlarged icon
                    padding: 2, // Space between icon and border
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }} 
                />
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Count">
                <ListAltIcon 
                  sx={{ 
                    color: '#fff',
                    border: '2px solid #fff', // Circle outline
                    borderRadius: '50%', // Circle shape
                    fontSize: 24, // Enlarged icon
                    padding: 2, // Space between icon and border
                    marginLeft: 3,
                    marginRight: 3, 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }} 
                />
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Search">
                <SearchIcon 
                  sx={{ 
                    color: '#fff',
                    border: '2px solid #fff', // Circle outline
                    borderRadius: '50%', // Circle shape
                    fontSize: 24, // Enlarged icon
                    padding: 2, // Space between icon and border
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }} 
                />
              </Tooltip>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer Section */}
      <Box
        id="footer"
        sx={{
          padding: '32px 0',
          background: 'rgba(46, 56, 66, 0.85)', // 85% transparent background
          textAlign: 'center',
          width: '100%', // Ensure it covers the entire width of the screen
          position: 'relative',
          margin: '0', // Remove any default margins
        }}
      >
        <Box sx={{ mb: 2 }}>
          <IconButton component={Link} href="https://github.com/WillC919" color="inherit">
            <GitHub sx={{ color: '#fff' }} />
          </IconButton>
          <IconButton component={Link} href="https://www.linkedin.com/in/williamlee919/" color="inherit">
            <LinkedIn sx={{ color: '#fff' }} />
          </IconButton>
          <IconButton component={Link} href="mailto:will.p.lee.36@gmail.com" color="inherit">
            <Email sx={{ color: '#fff' }} />
          </IconButton>
        </Box>
        <Typography variant="body2" color="textSecondary" sx={{ color: '#fff' }}>
          Pantry Tracker. Designed: William Lee
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
