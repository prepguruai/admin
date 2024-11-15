import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import { Container, Toolbar, Rating, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { UserProfileProto } from '../generated/profile_pb';
import { IsLoggedIn, Logout } from '../services/LoginService';
import { GetProfile } from '../services/ProfileService';
import { useNavigate } from 'react-router-dom';

const TopBar: React.FC = () => {
    const navigate = useNavigate();
    
    const [profile, setProfile] = React.useState<UserProfileProto | null>(null);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    useEffect(() => {
        if (!IsLoggedIn()) {
            navigate('/login');  // Redirect to the login page if not logged in
        } else {
            // Get profile information.
            GetProfile().then((res) => {
                setProfile(res);
            }).catch((err) => {
                console.log(err);
            });
        }
    }, [navigate]);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        // Implement logout functionality here
        setProfile(null);
        Logout();
        handleMenuClose();
        navigate('/login');
    };

    const navigateToAdmin = () => {
        navigate('/admin');
        handleMenuClose();
    };

    return (
        <AppBar position="static">
            <Container maxWidth="md">
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar
                            alt={profile?.getName()}
                            src={profile?.getPhotourl()}
                            sx={{ width: 56, height: 56 }}
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 2 }}>
                            <Typography variant="h6" sx={{ pt: 1 }}>{profile?.getName()}</Typography>
                        </Box>
                    </Box>
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenuOpen}
                    >
                        <MoreVertIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem onClick={navigateToAdmin}>Admin</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default TopBar;
