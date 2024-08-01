import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Container } from '@mui/material';

function createData(name: string, quantity: number) {
  return { name, quantity };
}

const rows = [
  createData('Frozen yoghurt', 1),
  createData('Ice cream sandwich', 2),
  createData('Eclair', 3),
  createData('Cupcake', 4),
  createData('Gingerbread', 5),
  createData('Frozen yoghurt', 1),
  createData('Ice cream sandwich', 2),
  createData('Eclair', 3),
  createData('Cupcake', 4),
  createData('Gingerbread', 5),
  createData('Frozen yoghurt', 1),
  createData('Ice cream sandwich', 2),
  createData('Eclair', 3),
  createData('Cupcake', 4),
  createData('Gingerbread', 5),
  createData('Frozen yoghurt', 1),
  createData('Ice cream sandwich', 2),
];

export default function BasicTable() {
  const handleEdit = (name: string) => {
    console.log(`Edit ${name}`);
  };

  const handleDelete = (name: string) => {
    console.log(`Delete ${name}`);
  };

  return (
    <Container>
      <TableContainer 
        component={Paper} 
        sx={{ borderRadius: 5, padding: 5, margin: 5, overflow: 'hidden', backgroundColor: '#2e3842', maxWidth: '60%' }}
      >
        <Table 
          sx={{
            backgroundColor: '#2e3842',
            borderRadius: 3,
            '& thead th': { 
              color: '#86a3bf',
              borderRadius: 'inherit',
              fontSize: '1rem', // Set font size for header to h6
              fontWeight: 'bold', // Optional: make the header text bold
            },
            '& tbody td': {
              color: '#86a3bf',
              position: 'relative', // Add position relative to the TableCell
            },
            '& .MuiIconButton-root': {
              color: '#86a3bf',
            },
            '& th, & td': {
              borderColor: '#86a3bf',
            },
            '& tr': {
              borderBottom: `1px solid #86a3bf`,
            }
          }} 
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Edit</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" sx={{ color: '#86a3bf' }}>
                  {row.name}
                </TableCell>
                <TableCell align="right" sx={{ color: '#86a3bf' }}>
                  {row.quantity}
                </TableCell>
                <TableCell align="right" sx={{ position: 'relative' }}>
                  <IconButton 
                    onClick={() => handleEdit(row.name)} 
                    sx={{ 
                      position: 'absolute', 
                      right: 0, 
                      top: '50%', 
                      transform: 'translateY(-50%)' 
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                </TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => handleDelete(row.name)}>
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
