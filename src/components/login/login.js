import React from 'react';
import "./login.css";
import Typography from '../typography/typography';
import { Button, TextField, Grid, Paper } from '@mui/material';

const Login = () => {
    return (
        <div class="login">
            <Paper>
                <Grid 
                    container
                    spacing={3}
                    direction={'column'}
                    justify={'center'}
                    alignItems={'center'}
                >
                    <Grid item xs={12}>
                        <Typography variant="subtitle1" component="div">
                            Login
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="standard-basic" label="e-mail" variant="standard" floatingLabelText="Email" type="email" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="standard-basic" label="password" variant="standard" hintText="Password" floatingLabelText="Password" type="password" />
                    </Grid>
                    <Grid item xs={12}>
                        <Button 
                            variant="contained"
                            onClick={() => {
                                alert('You have been authorized');
                        }}>
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )    
}

export default Login;