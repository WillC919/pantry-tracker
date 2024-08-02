import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import { Typography, Box, Paper, TextField, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

export default function SimpleBackdrop({ open, handleClose, addItem }: { open: boolean, handleClose: () => void, addItem: (name: string, quantity: number) => Promise<void> }) {
  // State to manage the input values
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);

  // Function to handle the form submission
  const handleAddItem = () => {
    // Trigger the addItem function with the input values
    addItem(name.toLowerCase(), quantity);
    // Clear the input fields
    setName('');
    setQuantity(0);
    // Close the backdrop
    handleClose();
  };

  // Check if the Add button should be enabled
  const isButtonDisabled = name.trim() === '' || quantity <= 0;

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
            value={name} // Bind the state to the input
            onChange={(e) => setName(e.target.value)} // Update the state on input change
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
            value={quantity} // Bind the state to the input
            onChange={(e) => setQuantity(Number(e.target.value) || 0)} // Update the state on input change, ensure value is a number
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
              backgroundColor: isButtonDisabled ? '#a9a9a9' : 'darkgreen', // Faded green if disabled
              color: '#fff', // Button text color
              borderRadius: 5, // Rounds the corners
              '&:hover': { 
                backgroundColor: isButtonDisabled ? '#a9a9a9' : 'green' // Prevent hover effect if disabled
              }
            }} 
            onClick={handleAddItem} // Handle the button click
            disabled={isButtonDisabled} // Disable the button if conditions are not met
            fullWidth
          >
            Add
          </Button>
        </Paper>
      </Box>
    </Backdrop>
  );
}
