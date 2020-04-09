import React from 'react';
import Fab from '@material-ui/core/Fab';
import MailIcon from '@material-ui/icons/Mail';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import Grid from '@material-ui/core/Grid';

const contact = () => {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Fab color="primary" aria-label="add" style={{float:'left'}}>
                        <MailIcon />
                    </Fab>
                    <Typography variant="h6" component="h2">akshays0nawan3@gmail.com</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Fab color="primary" aria-label="add" style={{float:'left'}}>
                        <GitHubIcon />
                    </Fab>
                    <Typography variant="h6" component="h2">https://github.com/Akshaysonawane</Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default contact;