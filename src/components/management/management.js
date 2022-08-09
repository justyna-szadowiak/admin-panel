import React from "react";
import "./management.css";
import Typography from "../typography/typography";
import {Grid, Paper} from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
// import * as users from "../../data/users.json"

const Management = () => {
    return(
        <div>
            <Paper>
                <Grid item xs={12}>
                    <Typography variant="subtitle1" component="div">
                        Management
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                <DataGrid
                    rows={11}
                    columns={6}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
                </Grid>
            </Paper>
        </div>
    )
}

export default Management;