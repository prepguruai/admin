import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Typography, Button, Box, CssBaseline, Grid, Card, CardContent, CardActions } from '@mui/material';
import TopBar from '../components/TopBar';
import { AddCircle, BarChart } from '@mui/icons-material';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const AdminPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div>       
            <TopBar />
                 
            <Box p={3}>
                <Typography variant="h4" gutterBottom>
                    Admin Dashboard
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Welcome to the PrepGuruAI Admin Dashboard! Choose an action to proceed:
                </Typography>

                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Add Questions
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Add new questions to your quiz database.
                                </Typography>
                            </CardContent>

                            <CardActions>
                                <Button
                                    variant="contained"
                                    startIcon={<AddCircle />}
                                    component={Link}
                                    to="/add-questions"
                                    >
                                Go to Add Questions
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                View Analytics
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Get detailed insights into quiz performance and statistics.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    variant="contained"
                                    startIcon={<BarChart />}
                                    component={Link}
                                    to="/analytics"
                                >
                                View Analytics
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default AdminPage;
