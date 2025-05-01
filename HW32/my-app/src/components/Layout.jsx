import { NavLink, Outlet } from "react-router-dom";
import { Box, GlobalStyles, Typography, AppBar } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const navLinks = [
    { to: '/', label: "Main" },
    { to: '/todolist', label: "To do" },
    { to: '/swapi', label: "Swapi" },
];

export const theme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#fff',
        },
        text: {
            primary: '#000',
        },
    },
})

const Layout = () => {

    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyles
                    styles={{
                        html: {
                            margin: 0,
                            padding: 0,
                            height: '100%',
                        },
                        body: {
                            margin: 0,
                            padding: 0,
                            height: '100%',
                            overflowX: 'hidden',
                            fontFamily: "'Roboto','sans-serif'",
                        },
                        '#root': {
                            height: '100%',
                        },
                        '*': {
                            boxSizing: 'border-box',
                        },
                    }} />

                <Box sx={{
                    minHeight: '100vh',
                    fontFamily: "'Inter','sans-serif'",
                    backgroundColor: theme.palette.background.default,
                    color: theme.palette.text.primary,
                    display: 'flex',
                    flexDirection: 'column'
                }}>

                    <AppBar
                        position="static"
                        sx={{
                            backgroundColor: theme.palette.background.default,
                            borderBottom: '1px solid #e0e0e0',
                            padding: '16px',
                        }}
                    >
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                            <Typography variant="h4" sx={{ color: theme.palette.text.primary, paddingLeft: 5 }}>🚀CV</Typography>
                            <Box sx={{
                                display: 'flex',
                                gap: 3,
                                paddingRight: '40px',
                                fontSize: '18px'
                            }}>
                                {navLinks.map(({ to, label }) => {
                                    return (
                                        <NavLink
                                            key={to}
                                            to={to}
                                            style={({ isActive }) => ({
                                                textDecoration: 'none',
                                                color: isActive ? theme.palette.text.primary : 'darkgray',
                                                fontWeight: 'bold',
                                                paddingTop: '10px',
                                                paddingRight: '20px',
                                            })}
                                        >
                                            {label}
                                        </NavLink>
                                    );
                                })}
                            </Box>
                        </Box>
                    </AppBar>

                    <Box
                        sx={{
                            flexGrow: 1,
                            padding: '0px',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: "center",
                            bgcolor: theme.palette.background.default,
                            color: theme.palette.text.primary
                        }}
                    >
                        <Outlet />
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: '100%',
                        bgcolor: theme.palette.mode === 'dark' ? 'black' : '#f5f5f5',
                        color: theme.palette.text.primary,
                        height: '160px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        fontSize: '20px',
                        flexDirection: 'column',
                        padding: '16px',
                    }}
                >
                    <Typography variant="body1" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
                        Contact Us:
                    </Typography>
                    <Typography variant="body2">
                        Phone: +1 (123) 456-7890
                    </Typography>
                    <Typography variant="body2">
                        Email: <a href="mailto:gnatiukkris@gmail.com" style={{ color: 'darkslategray' }}>gnatiukkris@gmail.com</a>
                    </Typography>

                    <Typography variant="body2" sx={{ marginTop: 2 }}>
                        2025 Your Company. All rights reserved.
                    </Typography>
                </Box>
            </ThemeProvider></>
    );
};

export default Layout;
