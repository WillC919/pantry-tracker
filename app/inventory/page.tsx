'use client';
import * as React from 'react';
import { Container, Typography, Box, Link, Fab, TextField, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SimpleBackdrop from './backdrop';
import BasicTable from './tables';
import SearchAppBar from './navbar';
import { doc, updateDoc, getDoc, deleteField } from 'firebase/firestore'; 
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import { db } from '../firebase';

interface Inventory {
    [name: string]: number;
}

export default function Inventory() {
    const [open, setOpen] = React.useState(false);
    const [ufInventory, setUFInventory] = React.useState<Inventory>({});
    const [inventory, setInventory] = React.useState<Inventory>({});
    const [searchQuery, setSearchQuery] = React.useState('');

    const handleClose = () => { setOpen(false); };
    const handleOpen = () => { setOpen(true); };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const updateLocalInventory = (newInventory: Inventory) => { 
        setInventory(newInventory);
        setUFInventory(newInventory);
    };

    const addItem = async (name: string, quantity: number) => {
        const docRef = doc(db, "inventory", "boxes");
        try {
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const data = docSnap.data() as Inventory;
                const currentQuantity = data[name] || 0;
                const newQuantity = currentQuantity + quantity;
                await updateDoc(docRef, { [name]: newQuantity });
                const updatedInventory = { ...data, [name]: newQuantity };
                updateLocalInventory(updatedInventory);
                console.log(`Quantity of '${name}' has been updated. New quantity: ${newQuantity}`);
            } else {
                console.log("No such document!");
            }
        } catch (error) {
            console.error("Error adding item: ", error);
        }
    };

    const readInventory = async () => {
        const docRef = doc(db, "inventory", "boxes");
        try {
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const data = docSnap.data() as Inventory;
                updateLocalInventory(data);
            } else {
                console.log("No such document!");
            }
        } catch (error) {
            console.error("Error reading inventory: ", error);
        }
    };

    const removeItem = async (name: string) => {
        const docRef = doc(db, "inventory", "boxes");
        try {
            await updateDoc(docRef, { [name]: deleteField() });
            const updatedInventory = { ...inventory };
            delete updatedInventory[name];
            updateLocalInventory(updatedInventory);
            console.log(`Field '${name}' has been successfully deleted.`);
        } catch (error) {
            console.error("Error removing field: ", error);
        }
    };

    const reduceItem = async (name: string) => {
        const docRef = doc(db, "inventory", "boxes");
        try {
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const data = docSnap.data() as Inventory;
                const currentQuantity = data[name] || 0;
                if (currentQuantity < 0) { console.log(`Item '${name}' does not exist or has already been removed.`); }
                const newQuantity = currentQuantity - 1;
                if (newQuantity <= 0) {
                    await removeItem(name);
                } else {
                    const updatedInventory = { ...data, [name]: newQuantity };
                    updateLocalInventory(updatedInventory);
                    await updateDoc(docRef, { [name]: newQuantity });
                    console.log(`Quantity of '${name}' has been decremented. New quantity: ${newQuantity}`);
                }
            } else {
                console.log("No such document!");
            }
        } catch (error) {
            console.error("Error decrementing item: ", error);
        }
    };

    React.useEffect(() => {
        readInventory();
    }, []);

    React.useEffect(() => {
        const filteredInventory = Object.keys(ufInventory)
            .filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()))
            .reduce((acc, item) => {
                acc[item] = ufInventory[item];
                return acc;
            }, {} as Inventory);

        setInventory(filteredInventory);
    }, [searchQuery, ufInventory]);

    return (
        <Box>
            <SearchAppBar searchQuery={searchQuery} handleSearchChange={handleSearchChange} />

            <SimpleBackdrop open={open} handleClose={handleClose} addItem={addItem}/>

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
                        overflowY: 'auto',
                        padding: 2,
                    }}
                >
                    <BasicTable inventory={inventory} removeItem={removeItem} reduceItem={reduceItem}/>
                </Box>
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

            <Fab
                aria-label="add"
                variant="extended"
                sx={{
                    position: 'fixed',
                    bottom: 16,
                    right: 16,
                    backgroundColor: '#FFCDD2',
                    color: '#000',
                    '&:hover': {
                        backgroundColor: '#FFAB91',
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
