import React from "react";
import { GoogleOAuthProvider, GoogleLogin, CredentialResponse } from '@react-oauth/google';

import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { LoginWithGoogle } from "../services/LoginService";

const GoogleLoginComponent: React.FC = () => {
    const handleLoginSuccess = async (response: CredentialResponse) => {
        try {
            const idToken = response.credential;
            if (!idToken) {
                console.log('Login Failed');
                return;
            }

            var isSuccess = await LoginWithGoogle(idToken);
            if (isSuccess) {
                window.location.href = '/';
            }
        }
        catch (error) {
           console.log('Login Failed');
           console.log(error);
        }
    };

    return (
        <Container maxWidth="xs">
            <Box 
                sx={{
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    minHeight: '100vh', 
                    padding: '16px',
                    backgroundColor: '#ffffff'
                }}
            >
                {/* App Name and Subtitle */}
                <HorizontalBar />
                <Typography variant="h4" align="center" gutterBottom>
                    PrepGuruAI
                </Typography>
                <Typography variant="subtitle1" align="center" gutterBottom>
                    Boost your exam score with AI assistance
                </Typography>
                <HorizontalBar />

                <Logo src="logo48.jpeg" alt="Logo" />

                {/* Login Form */}
                <div style={styles.container}>
                    <GoogleOAuthProvider clientId="165746377172-46o8bj6i2v1eilrmkjhch9vv3a38rl4i.apps.googleusercontent.com">
                        <div style={styles.buttonWrapper}>
                            <GoogleLogin
                                onSuccess={handleLoginSuccess}
                                onError={() => {
                                    console.log('Login Failed');
                                }}
                            />
                        </div>
                    </GoogleOAuthProvider>
                </div>
            </Box>
        </Container>
    );
};

const Logo = styled('img')({
    width: '300px',
    height: 'auto',
    marginBottom: '24px'
  });

const HorizontalBar = styled('div')({
    width: '100%',
    height: '2px',
    backgroundColor: '#d3d3d3',
    margin: '16px 0'
  });

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    buttonWrapper: {
        transform: 'scale(1.5)',  // Adjust this to increase/decrease button size
    },
};

export default GoogleLoginComponent;
