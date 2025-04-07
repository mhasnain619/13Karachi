import { Box, Grid, Paper, Typography, Divider, Stack } from '@mui/material'
import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
import { styled } from '@mui/material/styles';
import { ArrowDownward } from "@mui/icons-material";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));
function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Tooltip,
} from "chart.js";
import { Chart } from "react-chartjs-2";
// Register necessary Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Tooltip
);
const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
        {
            label: 'Total Sales',
            data: [50, 55, 60, 70, 75, 80],
            backgroundColor: '#2F4F4F',
            borderRadius: 4,
            barPercentage: 0.5,
        },
    ],
};
const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            ticks: {
                color: '#888',
            },
            grid: {
                display: false,
            },
        },
        y: {
            display: false,
        },
    },
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            enabled: true,
        },
    },
};


const DashboardPage = () => {
    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center', p: 2,
                height: '50px', backgroundColor: "#E1E1E2", width: '100%'
            }}>
                <h3>Dashboard</h3>
                <Box role="presentation" onClick={handleClick}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link
                            underline="hover"
                            sx={{ display: 'flex', alignItems: 'center' }}
                            color="inherit"
                            href="/"
                        >
                            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                            MUI
                        </Link>
                        <Link
                            underline="hover"
                            sx={{ display: 'flex', alignItems: 'center' }}
                            color="inherit"
                            href="/material-ui/getting-started/installation/"
                        >
                            <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                            Core
                        </Link>
                        <Typography
                            sx={{ color: 'text.primary', display: 'flex', alignItems: 'center' }}
                        >
                            <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                            Breadcrumb
                        </Typography>
                    </Breadcrumbs>
                </Box>
            </Box>
            <Box sx={{ flexGrow: 1, }}>
                <Grid container spacing={2}>
                    {/* Total Sale Chart */}
                    <Grid item xs={12} md={6}>
                        <Item>
                            <Grid container spacing={2}>
                                {/* Left Content */}
                                <Grid item xs={12} md={4}>
                                    <Box >
                                        <Typography fontWeight="bold" textAlign="start">
                                            Total Sale
                                        </Typography>
                                        <Typography fontWeight="bold" variant="body2" color="text.secondary" textAlign="start">
                                            Jan 1, 2022 - Jun 30, 2024
                                        </Typography>

                                        <Typography fontSize='22px' fontWeight="bold" mt={1} textAlign="start">
                                            $654.85K
                                        </Typography>

                                        <Typography variant="body2" color="error" mt={1} textAlign="start">
                                            🔻 95% 6 months before
                                        </Typography>
                                    </Box>
                                </Grid>

                                {/* Right Content */}
                                <Grid item xs={12} md={8}>
                                    <Box
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                        bgcolor="#F5F5F5"
                                        borderRadius={2}
                                        minHeight={135}
                                        width="100%"
                                    >
                                        <Chart type="bar" data={chartData} options={chartOptions} />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Item>
                            <Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Typography textAlign="start" fontWeight="bold">
                                        Summary
                                    </Typography>
                                    <Typography textAlign="start" variant="body2" color="text.secondary">
                                        Jan 1, 2024 - Jun 30, 2024
                                    </Typography>
                                </Box>

                                <Grid container spacing={2} mt={1}>
                                    {/* Summary Card 1 */}
                                    <Grid item xs={12} md={4}>
                                        <Box>
                                            <Typography fontSize='22px' textAlign="start" fontWeight="bold">$654.85K</Typography>
                                            <Typography textAlign="start" variant="body2" color="text.secondary">
                                                Summary
                                            </Typography>
                                            <Box height={5} bgcolor="#D8D8D9" mt={1} borderRadius={1}>
                                                <Box width="70%" height="100%" bgcolor="primary.main" borderRadius={1} />
                                            </Box>
                                        </Box>
                                    </Grid>

                                    {/* Summary Card 2 */}
                                    <Grid item xs={12} md={4}>
                                        <Box>
                                            <Typography fontSize='22px' textAlign="start" fontWeight="bold">$34.5K</Typography>
                                            <Typography textAlign="start" variant="body2" color="text.secondary">
                                                Orders
                                            </Typography>
                                            <Box height={5} bgcolor="#D8D8D9" mt={1} borderRadius={1}>
                                                <Box width="50%" height="100%" bgcolor="error.main" borderRadius={1} />
                                            </Box>
                                        </Box>
                                    </Grid>

                                    {/* Summary Card 3 */}
                                    <Grid item xs={12} md={4}>
                                        <Box>
                                            <Typography fontSize='22px' textAlign="start" fontWeight="bold">$3.86K</Typography>
                                            <Typography textAlign="start" variant="body2" color="text.secondary">
                                                Avg. Order Value
                                            </Typography>
                                            <Box height={5} bgcolor="#D8D8D9" mt={1} borderRadius={1}>
                                                <Box width="40%" height="100%" bgcolor="error.main" borderRadius={1} />
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default DashboardPage
