import React from 'react';
import {  Typography, Grid, Paper, Button } from '@mui/material';

const Main = () => {
    return (
        <Grid sx={{ padding: 4, display: 'flex',marginTop:'10px', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', backgroundColor: 'lightpink', borderRadius: '10px' }}>
            <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: 4 }}>
                Front-End Developer CV
            </Typography>

            <Grid container >
                <Grid span={12} sx={{ marginBottom: '20px', }}>
                    <Paper sx={{ padding: 2, textAlign: 'center' }}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                            Hnatiuk Khrystyna
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: 2 }}>
                            Front-End Developer
                        </Typography>


                        <Typography variant="body2" sx={{ color: 'gray' }}>
                            Passionate about creating intuitive and user-friendly websites and web applications using modern technologies.
                        </Typography>
                        <Paper sx={{ padding: 2 }}>
                            <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: 2 }}>
                                Skills
                            </Typography>
                            <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>

                                <Paper sx={{
                                    padding: 2, '&:hover': {
                                        backgroundColor: 'lightgray',
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                    },
                                }}>
                                    <Typography variant="h6">HTML</Typography>
                                </Paper>

                                <Paper sx={{
                                    padding: 2,
                                    '&:hover': {
                                        backgroundColor: 'lightgray',
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                    },
                                }}>
                                    <Typography variant="h6">CSS</Typography>
                                </Paper>

                                <Paper sx={{
                                    padding: 2, '&:hover': {
                                        backgroundColor: 'lightgray',
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                    },
                                }}>
                                    <Typography variant="h6">React</Typography>
                                </Paper>

                                <Paper sx={{
                                    padding: 2, '&:hover': {
                                        backgroundColor: 'lightgray',
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                    },
                                }}>
                                    <Typography variant="h6">JavaScript</Typography>
                                </Paper>

                            </Grid>
                        </Paper>
                    </Paper>
                </Grid>


            </Grid>
        </Grid>



    );
};

export default Main;