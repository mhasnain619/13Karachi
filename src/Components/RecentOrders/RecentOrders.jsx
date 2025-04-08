import {
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    IconButton,
    useMediaQuery
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useTheme } from '@mui/material/styles';

const orders = [
    {
        id: '#790841',
        name: 'Dmitriy Groshev',
        country: 'Switzerland',
        payment: 'Credit Card',
        img: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
        id: '#454489',
        name: 'Patrick Beverley',
        country: 'Germany',
        payment: 'Paypal',
        img: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
        id: '#594579',
        name: 'Kevin Greem',
        country: 'Canada',
        payment: 'Credit Card',
        img: 'https://randomuser.me/api/portraits/men/65.jpg',
    },
    {
        id: '#478495',
        name: 'William Barton',
        country: 'United States',
        payment: 'Credit Card',
        img: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
];

const LastOrders = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 2
                }}
            >
                <Typography variant="h6">Last Orders</Typography>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </Box>

            {/* Make Table Scrollable on Small Screens */}
            <TableContainer
                component={Paper}
                sx={{ overflowX: 'auto' }}
            >
                <Table sx={{ minWidth: 600 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Order No.</TableCell>
                            <TableCell>Payment Type</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {orders.map((order, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <Avatar src={order.img} />
                                        <Box>
                                            <Typography fontWeight="bold">{order.name}</Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {order.country}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell>{order.id}</TableCell>
                                <TableCell>{order.payment}</TableCell>
                                <TableCell align="center">
                                    <IconButton>
                                        <MoreVertIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default LastOrders;
