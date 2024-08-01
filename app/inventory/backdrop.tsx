import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import { Typography, Box, Paper, TextField, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function SimpleBackdrop({open, handleClose}) {
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      {/* Main Content Section */}
      <Box>
        <Paper 
          sx={{ 
            p: 6, // Increased padding
            mb: 2, 
            backgroundColor: '#2e3842', 
            borderRadius: 5, // Rounds the corners
            position: 'relative' // Required for absolute positioning of the close button
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            sx={{ 
              position: 'absolute',
              top: 12,
              right: 12,
              color: '#86a3bf'
            }}
          >
            <CloseIcon />
          </IconButton>
          
          <Typography variant="h6" color="#86a3bf">Item</Typography>
          <TextField
            label="Name"
            fullWidth
            variant="outlined"
            sx={{ 
              mt: 2, 
              mb: 2, 
              '& .MuiInputLabel-root': { color: '#86a3bf' }, 
              '& .MuiOutlinedInput-root': { 
                '& fieldset': { borderColor: '#1d2329' }, 
                '&:hover fieldset': { borderColor: 'darkgreen' },
                '&.Mui-focused fieldset': { borderColor: '#86a3bf' },
                '& input': { color: '#86a3bf' } // Text color inside the TextField
              }
            }}
          />
          <TextField
            label="Quantity"
            type="number" // Ensures only numbers can be input
            inputProps={{ min: 0 }} // Restricts input to positive numbers only
            fullWidth
            variant="outlined"
            sx={{ 
              mb: 2, 
              '& .MuiInputLabel-root': { color: '#86a3bf' }, 
              '& .MuiOutlinedInput-root': { 
                '& fieldset': { borderColor: '#1d2329' }, 
                '&:hover fieldset': { borderColor: 'darkgreen' },
                '&.Mui-focused fieldset': { borderColor: '#86a3bf' },
                '& input': { color: '#86a3bf' } // Text color inside the TextField
              }
            }}
          />
          <Button 
            variant="contained" 
            sx={{ 
              backgroundColor: 'darkgreen', 
              color: '#fff', // Button text color
              borderRadius: 5, // Rounds the corners
              '&:hover': { 
                backgroundColor: 'green' 
              }
            }} 
            onClick={handleClose} 
            fullWidth
          >
            Add
          </Button>
        </Paper>
      </Box>
    </Backdrop>
  );
}
