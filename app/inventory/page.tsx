"use client";
import * as React from 'react';
import { Container, Typography, Box, Link, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SimpleBackdrop from './backdrop';
import BasicTable from './tables';

export default function Inventory() {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <Box>
            <SimpleBackdrop open={open} handleClose={handleClose} />

            {/* Inventory Section */}
            <Box
                sx={{
                    flexGrow: 1,
                    textAlign: 'center',
                    padding: '0',
                    minHeight: '100vh',
                    color: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: '100%',
                    position: 'relative',
                }}
            >
                <Box
                    sx={{
                        flexGrow: 1,
                        overflowY: 'auto', // Enable vertical scrolling
                        padding: 2, // Optional padding
                    }}
                >
                    <BasicTable />
                </Box>
            </Box>

            {/* Footer Section */}
            <Box
                id="footer"
                sx={{
                    padding: '32px 0',
                    background: 'rgba(46, 56, 66, 0.85)', // 85% transparent background
                    textAlign: 'center',
                    width: '100%',
                    position: 'relative',
                    margin: '0',
                }}
            >
                <Typography variant="body2" color="textSecondary" sx={{ color: '#fff' }}>
                    &copy; William Lee. Design: <Link href="http://html5up.net" color="inherit">HTML5 UP</Link>
                </Typography>
            </Box>

            <Fab
                aria-label="add"
                variant="extended"
                sx={{
                    position: 'fixed',
                    bottom: 16,
                    right: 16,
                    backgroundColor: '#FFCDD2', // Light red color
                    color: '#000', // Adjust text color for better contrast
                    '&:hover': {
                        backgroundColor: '#FFAB91', // Slightly darker on hover
                    }
                }}
                onClick={handleOpen}
            >
                <AddIcon sx={{ mr: 1 }} />
                Add Pantry Item
            </Fab>
        </Box>
    );
}
