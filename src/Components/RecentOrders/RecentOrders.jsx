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

// Sample product images (replace with your actual image imports or URLs)
import CameraLensImg from '../../assets/userimg.png';


const RecentOrders = () => {
    const [selected, setSelected] = React.useState([]);

    const orders = [
        {
            id: 1,
            product: 'Camera Lens',
            brand: 'Canon Camera',
            customer: 'Brooklyn Simmons',
            status: 'Succeed',
            image: CameraLensImg
        },
        {
            id: 2,
            product: 'Black Dress',
            brand: 'Shasmi',
            customer: 'Savannah Nguyen',
            status: 'Waiting',
            image: CameraLensImg
        },
        {
            id: 3,
            product: 'Argan Oil',
            brand: 'Moroccan',
            customer: 'Ronald Richards',
            status: 'Succeed',
            image: CameraLensImg
        },
        {
            id: 4,
            product: 'Parfum',
            brand: 'Bella Vita',
            customer: 'Marvin McKinney',
            status: 'Canceled',
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
            <Typography fontWeight='bold' textAlign='start' variant="h6" gutterBottom>
                Recent Orders
            </Typography>
            <TableContainer >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox">
                                <Checkbox
                                    color="primary"
                                    indeterminate={selected.length > 0 && selected.length < orders.length}
                                    checked={orders.length > 0 && selected.length === orders.length}
                                    onChange={handleSelectAllClick}
                                />
                            </TableCell>
                            <TableCell>Product Name</TableCell>
                            <TableCell>Customer</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Action</TableCell>
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
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            color="primary"
                                            checked={isItemSelected}
                                            onClick={(event) => handleClick(event, order.id)}
                                        />
                                    </TableCell>
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
                                    <TableCell>
                                        <IconButton>
                                            <MoreVertIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};


export default RecentOrders;