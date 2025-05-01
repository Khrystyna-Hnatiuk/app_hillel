import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    const handleBackMain = () => {
        navigate('/', { replace: true })
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '10px', backgroundColor: 'lightcoral', borderRadius: '10px', padding: '20px' }}
        >
            <Typography variant="h4"
            >404</Typography>
            <Typography variant="h6"
            >Page is not found</Typography>
            <Button
                sx={{ color: 'white', fontWeight: 'bold' }}
                onClick={handleBackMain}
            >Back to Main</Button>
        </Box>

    )

}
export default NotFound;