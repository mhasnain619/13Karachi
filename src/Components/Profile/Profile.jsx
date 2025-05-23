import React, { useEffect, useState } from 'react';
import { AuthCredential, getAuth, onAuthStateChanged } from 'firebase/auth';
import { Card, CardContent, Typography, Avatar, Button, Grid, Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { FaLocationDot } from "react-icons/fa6";


import {
    Business as BusinessIcon,
    Email as EmailIcon,
    Phone as PhoneIcon,
    LocationOn as LocationOnIcon,
    Language as LanguageIcon,
} from '@mui/icons-material';

import userImg from '../../assets/userimg.png';
import './profile.css';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
    const [user, setUser] = useState(null);
    // const auth = getAuth();
    const navigate = useNavigate()
    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    //         setUser(currentUser);
    //     });

    //     return () => unsubscribe(); // Cleanup listener
    // }, [auth]);
    // const logout = () => {
    //     localStorage.removeItem('uid')
    //     navigate('/login')
    // }
    return (
        <Box sx={{ py: 8, backgroundColor: "#FFFFFF" }}>
            {user ? (
                <Card className="user-card">
                    <Grid container spacing={2}>
                        {/* User Avatar and Basic Info */}
                        <Grid item xs={12} md={3} display="flex" justifyContent="center" alignItems="center">
                            <Avatar
                                alt={user.displayName || "User"}
                                src={userImg} //user.photoURL || 
                                className="user-avatar"
                            />
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Typography className='userName'>
                                {user.displayName || "No Name Available"}
                            </Typography>
                            <Typography className='userNameSngCompany'>
                                {user.email}
                            </Typography>
                            <Grid container spacing={2} marginTop={1}>
                                <Grid item xs={12} sm="auto">
                                    <Button onClick={logout} variant="contained" color="secondary" size="large">
                                        Log Out
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* Additional User Details */}
                    <CardContent className="card-content">
                        <Grid container spacing={1}>
                            {/* Company Placeholder (Firebase doesn't store it by default) */}
                            <Grid item xs={12} md={4}>
                                <Box style={{ textAlign: 'start' }}>
                                    <p className='nameContAddre'>Company Details :</p>
                                    <span className='iconAndText'>
                                        <BusinessIcon className="section-icon" fontSize="small" />
                                        <p>{user.companyDetail || "No company details here"}</p>
                                    </span>
                                    <p>Professional at something...</p>
                                </Box>
                            </Grid>

                            {/* Contact Information */}
                            <Grid item xs={12} md={4}>
                                <Box style={{ textAlign: 'start' }}>
                                    <p className='nameContAddre'>Contact Information :</p>
                                    <span className='iconAndText'>
                                        <EmailIcon className="section-icon" fontSize="small" />
                                        <p>{user.email}</p>
                                    </span>
                                    <span className='iconAndText'>
                                        <PhoneIcon className="section-icon" fontSize="small" />
                                        <p>{user.phoneNumber || "No Phone"}</p>
                                    </span>
                                    <span className='iconAndText'>
                                        <LanguageIcon className="section-icon" fontSize="small" />
                                        <p>{user.uid || "No Website"}</p>
                                    </span>
                                </Box>
                            </Grid>

                            {/* Address Placeholder */}
                            <Grid item xs={12} md={4}>
                                <Box style={{ textAlign: 'start' }}>
                                    <p className='nameContAddre'>Address :</p>
                                    <span className='Address'>
                                        <FaLocationDot className='locationIcon' />
                                        <p>{"No Address Available"}</p>
                                    </span>
                                </Box>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            ) : (
                <Box>
                    <Typography variant="h6" component="h2" className="title">No User Found...</Typography>
                </Box>
            )}
        </Box>
    );
};

export default UserProfile;
