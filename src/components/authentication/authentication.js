import React from 'react';
import "./authentication.css";
import Typography from '../typography/typography';
import { Button, TextField, Grid, Paper } from '@mui/material';

const Authentication = () =>  {
    return (
        <div className='login'>
            <Paper>
                <Grid item xs={12}>
                    <h1>Login</h1>
                </Grid>
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
                        <TextField 
                            type="email" 
                            id="standard-basic" 
                            autoComplete="off"
                            label="e-mail" 
                            variant="standard" 
                            required 
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            type="password"
                            id="standard-basic" 
                            label="password" 
                            variant="standard"
                            hintText="Password"  
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            fullWidth
                        >
                            Login
                        </Button>
                    </Grid>
                </Grid>    
            </Paper>
        </div>
    )
}

export default Authentication;