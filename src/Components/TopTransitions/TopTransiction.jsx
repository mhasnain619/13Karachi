import React from 'react';
import {
    Box,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    IconButton,
    Checkbox,
    Avatar
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SettingsIcon from '@mui/icons-material/Settings';

// Sample product images (replace with your actual image imports or URLs)
import CameraLensImg from '../../assets/userimg.png';


const TopTransictions = () => {
    const [selected, setSelected] = React.useState([]);

    const orders = [
        {
            id: 1,
            product: 'Camera Lens',
            brand: 'Canon Camera',
            customer: '30 Mar 2024',
            status: '$3,658',
            image: CameraLensImg
        },
        {
            id: 2,
            product: 'Black Dress',
            brand: 'Shasmi',
            customer: '30 Mar 2024',
            status: '$3,658',
            image: CameraLensImg
        },
        {
            id: 3,
            product: 'Argan Oil',
            brand: 'Moroccan',
            customer: '30 Mar 2024',
            status: '$3,658',
            image: CameraLensImg
        },
        {
            id: 4,
            product: 'Parfum',
            brand: 'Bella Vita',
            customer: '30 Mar 2024',
            status: '$3,658',
            image: CameraLensImg
        },
    ];

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = orders.map((order) => order.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const isSelected = (id) => selected.indexOf(id) !== -1;

    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case 'succeed':
                return 'success.main';
            case 'waiting':
                return 'warning.main';
            case 'canceled':
                return 'error.main';
            default:
                return 'text.primary';
        }
    };

    return (
        <Box sx={{ p: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography fontWeight='bold' textAlign='start' variant="h6" gutterBottom>
                    Top Transictions
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#eaeaea', padding: '2px', borderRadius: '50px' }}>
                    <SettingsIcon fontSize='small' />
                </Box>
            </Box>
            <TableContainer >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Product Name</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Purchase</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order) => {
                            const isItemSelected = isSelected(order.id);
                            return (
                                <TableRow
                                    key={order.id}
                                    hover
                                    role="checkbox"
                                    aria-checked={isItemSelected}
                                    selected={isItemSelected}
                                >

                                    <TableCell>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                            <Avatar
                                                src={order.image}
                                                alt={order.product}
                                                variant="rounded"
                                                sx={{ width: 48, height: 48 }}
                                            />
                                            <Box>
                                                <Typography fontSize='small' fontWeight="bold">{order.product}</Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {order.brand}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </TableCell>
                                    <TableCell>{order.customer}</TableCell>
                                    <TableCell>
                                        <Typography color={getStatusColor(order.status)}>
                                            {order.status}
                                        </Typography>
                                    </TableCell>

                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box >
    );
};


export default TopTransictions;