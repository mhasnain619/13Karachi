import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { FaHome } from "react-icons/fa";
import { useNavigate, Outlet, Link, useLocation } from "react-router-dom";
import jawan from '../../assets/13karachi.png';
import { FaUser } from "react-icons/fa";
import { MdContactPage, MdExpandLess, MdExpandMore, MdFeed, MdOutlineAdminPanelSettings } from "react-icons/md";
import './Dashboard.css'
import { Avatar, useMediaQuery, Button, Collapse, Menu, MenuItem, Tooltip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { PiExamFill, PiStudentBold } from "react-icons/pi";
import TextField from '@mui/material/TextField';
import DashboardPage from "../../Pages/DashboardPage/DashboardPage";


// import './Layout.css'
const drawerWidth = 230;

function ResponsiveDrawer(props) {
    const navigate = useNavigate();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [isClosing, setIsClosing] = React.useState(false);
    const [openMenus, setOpenMenus] = React.useState({});
    let location = useLocation()
    const currentPath = location.pathname
    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };


    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleToggle = (name) => {
        setOpenMenus((prev) => ({
            ...prev,
            [name]: !prev[name],
        }));
    };
    const handleLogout = () => {
        localStorage.removeItem('uid')
        navigate('/login')
    }

    const pages = [
        { name: "Home", icon: <FaHome />, route: "/home" },
        {
            name: "Students", icon: <PiStudentBold />, children: [
                { name: "Student Registration", route: "/student/student-registration" },
                { name: "Student List", route: "/student/student-list" }
            ]
        },
        { name: "Contact Us", icon: <MdContactPage />, route: "/contact" },
    ];

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            {/* <Toolbar /> */}
            <div className="logo">
                <Link to='/'>
                    <img className="logoImage" height='100%' width='100%' src={jawan} alt="" />
                </Link>
            </div>
            <Divider />
            <List>
                {pages.map((obj, index) => (
                    <div key={index}>
                        <ListItem sx={{ background: obj.route === currentPath ? "#E1E1E2" : '', borderRadius: '5px' }} disablePadding>
                            <ListItemButton onClick={() => obj.children ? handleToggle(obj.name) : navigate(obj.route)}>
                                <ListItemIcon sx={{ minWidth: "35px", fontSize: "20px" }}>{obj.icon}</ListItemIcon>
                                <ListItemText primary={obj.name} />
                                {obj.children && (openMenus[obj.name] ? <MdExpandLess /> : <MdExpandMore />)}
                            </ListItemButton>
                        </ListItem>

                        {obj.children && (
                            <Collapse in={openMenus[obj.name]} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {obj.children.map((child, idx) => (
                                        <ListItem sx={{ background: child.route === currentPath ? "#E1E1E2" : '' }} key={idx} disablePadding>
                                            <ListItemButton sx={{ pl: 4 }} onClick={() => {
                                                navigate(child.route)
                                            }}>
                                                <ListItemText primary={child.name} />
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </List>
                            </Collapse>
                        )}
                    </div>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box sx={{ display: "flex", backgroundColor: "#E1E1E2", padding: "5px" }}>
            <CssBaseline />

            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: '#FFFFFF',
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ color: '#7f7f7f', mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <TextField
                        placeholder="Type to search"
                        sx={{
                            '& .MuiInputBase-input': {
                                padding: '8px 10px',
                                backgroundColor: '#D8D8D9'
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    border: 'none', // Remove default border
                                    backgroundColor: 'none'
                                },
                                '&:hover fieldset': {
                                    border: 'none', // Remove border on hover
                                    backgroundColor: 'none'

                                },
                                '&.Mui-focused fieldset': {
                                    border: 'none', // Remove border on focus
                                    backgroundColor: 'none'

                                },
                            },
                        }}
                    />
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <Box display="flex" alignItems="center" gap={1} onClick={handleOpenUserMenu} sx={{ cursor: 'pointer' }}>
                                <Avatar
                                    alt="Helen Walter"
                                    src="https://randomuser.me/api/portraits/men/1.jpg" // Replace with your image
                                />
                                <Box>
                                    <Typography color="text.secondary" fontWeight={600} fontSize="14px">
                                        Anaintay
                                    </Typography>
                                    <Box display="flex" alignItems="center">
                                        <Typography color="text.secondary" fontSize="12px">
                                            Admin
                                        </Typography>
                                        <ArrowDropDownIcon fontSize="small" />
                                    </Box>
                                </Box>
                            </Box>
                        </Tooltip>

                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem onClick={() => { handleCloseUserMenu(); navigate('/profile'); }}>
                                Profile
                            </MenuItem>
                            <MenuItem onClick={() => { handleCloseUserMenu(); navigate('/'); }}>
                                Dashboard
                            </MenuItem>
                            <MenuItem onClick={() => { handleCloseUserMenu(); handleLogout(); }}>
                                Logout
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="menu items"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                    sx={{

                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth, padding: "5px !important" }
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth, padding: "5px !important", },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center',
                    flexGrow: 1,
                    p: 1,
                    mt: 2,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}
            >

                {document.location.pathname === '/' &&
                    <Box sx={{
                        width: '100%',
                        mt: 5,
                    }}>
                        <DashboardPage />
                    </Box>}
                <Outlet />
            </Box>
        </Box>
    );
}

ResponsiveDrawer.propTypes = {
    window: PropTypes.func,
};

export default ResponsiveDrawer;
