import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DeleteIcon from '@mui/icons-material/Delete';
import { Container } from '@mui/material';

// Define the inventory type as a mapping of strings to numbers
interface Inventory {
  [name: string]: number;
}

export default function BasicTable({
  inventory, 
  removeItem, 
  reduceItem
}: {
  inventory: Inventory, 
  removeItem: (name: string) => Promise<void>, 
  reduceItem: (name: string) => Promise<void>
}) {
  // Convert the inventory object to an array of items
  const rows = Object.entries(inventory).map(([name, quantity]) => ({ name, quantity }));

  // Handler for reducing the item quantity
  const handleReduce = (name: string) => {
    reduceItem(name);
  };

  // Handler for deleting an item
  const handleDelete = (name: string) => {
    removeItem(name);
  };

  return (
    <Container>
      <TableContainer 
        component={Paper} 
        sx={{ 
          borderRadius: 5, // Rounded corners for the table
          padding: 3, // Padding inside the table container
          marginTop: 12, // Larger top margin
          marginBottom: 4, // Moderate bottom margin
          marginLeft: 2, // Moderate left margin
          marginRight: 2, // Moderate right margin
          overflow: 'hidden', 
          backgroundColor: '#2e3842', 
          maxWidth: '60%' // Set max width of the table
        }}
      >
        <Table 
          sx={{
            backgroundColor: '#2e3842', // Background color of the table
            borderRadius: 3, // Rounded corners for the table
            '& thead th': { 
              color: '#86a3bf', // Header text color
              borderRadius: 'inherit', // Inherit border radius from table
              fontSize: '1rem', // Font size for header cells
              fontWeight: 'bold', // Bold header text
            },
            '& tbody td': {
              color: '#86a3bf', // Body text color
              position: 'relative', // Position relative for icon buttons
            },
            '& .MuiIconButton-root': {
              color: '#86a3bf', // Icon button color
            },
            '& th, & td': {
              borderColor: '#86a3bf', // Border color for table cells
            },
            '& tr': {
              borderBottom: `1px solid #86a3bf`, // Border color for table rows
            }
          }} 
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Inventory</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Reduce</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(({ name, quantity }) => (
              <TableRow
                key={name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }} // Remove border from last row cells
              >
                <TableCell component="th" scope="row" sx={{ color: '#86a3bf' }}>
                  {name}
                </TableCell>
                <TableCell align="right" sx={{ color: '#86a3bf' }}>
                  {quantity}
                </TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => handleReduce(name)}>
                    <ArrowDropDownIcon />
                  </IconButton>
                </TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => handleDelete(name)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
