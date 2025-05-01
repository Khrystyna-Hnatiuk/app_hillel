import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCurrentItem, fetchSwapiByUid } from '../store-saga/swapi/swapiSlice';
import { Box, Button, TextField, Typography, CircularProgress } from '@mui/material';


const Swapi = () => {

   
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const { currentItem, loading, error } = useSelector((state) => state.swapi);

    const handleInputChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = () => {
        if (value) {
            dispatch(clearCurrentItem());
            dispatch(fetchSwapiByUid(value));
            setValue('');
        }
    };

    const handleClear = () => {
        dispatch(clearCurrentItem());
        setValue('');
    };

    if (loading) {
        return <CircularProgress sx={{ color: 'gray', marginTop: 4 }} />;
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 4,
                width: '100%',
            }}
        >
            <Typography variant="h4" sx={{ marginBottom: 2 }}>Swapi</Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', gap: 2 }}>
                <TextField
                    value={value}
                    onChange={handleInputChange}
                    fullWidth
                    variant="outlined"
                    placeholder="https://www.swapi.tech/api/people/"
                    sx={{
                        width: '90%',
                        borderRadius: '10px',
                        color:  'black', 
                        '& .MuiInputBase-input': {
                            color:  'black',  
                        },
                        border: '1px solid #e0e0e0',
                    }}
                />

                <Button
                    onClick={handleSubmit}
                    variant="contained"
                    color="primary"
                    sx={{ height: 50, width: '10%', backgroundColor: 'darkgray' }}
                >
                    Get info
                </Button>
            </Box>

            <Box sx={{ width: '100%', marginTop: 3, padding: 2, border: '1px solid', borderColor: 'gray', borderRadius: 2 }}>
                <Typography variant="body2">
                    {currentItem ? <pre>{JSON.stringify(currentItem, null, 2)}</pre> : 'No data available'}
                </Typography>
            </Box>

            {error && (
                <Typography variant="body2" color="error" sx={{ marginTop: 2 }}>
                    {error}
                </Typography>
            )}

            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
                <Button
                    onClick={handleClear}
                    variant="outlined"
                    color="secondary"
                    sx={{ width: 100, height: 40, borderColor: 'darkblue', color: 'blue' }}
                >
                    Clear
                </Button>
            </Box>
        </Box>
    );
};

export default Swapi;
