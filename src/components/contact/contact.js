import React from 'react';
import Fab from '@material-ui/core/Fab';
import MailIcon from '@material-ui/icons/Mail';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';

const contact = () => {
    return (
        <div>
            <Fab color="primary" aria-label="add" style={{float:'left'}}>
                <MailIcon />
            </Fab>
            <Typography variant="h6" component="h2">akshays0nawan3@gmail.com</Typography>

            <Fab color="primary" aria-label="add" style={{float:'left'}}>
                <GitHubIcon />
            </Fab>
            <Typography variant="h6" component="h2">https://github.com/Akshaysonawane</Typography>
        </div>
    );
}

export default contact;