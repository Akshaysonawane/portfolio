import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Avatar } from '@material-ui/core';
import { Route, Link } from 'react-router-dom';

import About from '../about/about';
import Experience from '../experience/experience';
import styleClasses from './sideMenu.module.css';
import Education from '../education/education';
import Contact from '../contact/contact';

import { 
    Person, 
    BusinessCenter, 
    AssignmentTurnedIn,
    Assessment,
    Star,
    AccountBalance,
    Mail,
    Create,
    Description,
 } from '@material-ui/icons';

import classes from './sideMenu.module.css';
import avatar from '../../assets/images/me.png';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    large: {
        width: theme.spacing(12),
        height: theme.spacing(12),
    },
    //toolbar: theme.mixins.toolbar,
    toolbar: {
        marginTop: '5%',
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
  }));

export default function SideMenu() {
    const classes = useStyles();
    const textArray = [
        <Link to="/" style={{textDecoration:'none'}} className={styleClasses.a}>
            About
        </Link>, 
        <Link to="/experience" style={{textDecoration:'none'}} className={styleClasses.a}>
            Experience
        </Link>,
        'Projects', 
        'Skills', 
        'Awards', 
        <Link to="/education" style={{textDecoration:'none'}} className={styleClasses.a}>
            Education
        </Link>,
        <Link to="/contact" style={{textDecoration:'none'}} className={styleClasses.a}>
            Contact
        </Link>,
        'Blog', 
        'Resume'
    ];

    const iconArray = [
        <Link to="/"><Person style={{ color: '#008073' }} /></Link>, 
        <Link to="/experience"><BusinessCenter style={{ color: '#00bcd4' }} /></Link>,
        <AssignmentTurnedIn style={{ color: '#3f51b5' }} />,
        <Assessment style={{ color: '#9c27b0' }} />,
        <Star style={{ color: '#F44336' }} />,
        <Link to="/education"><AccountBalance style={{ color: '#ff9800' }} /></Link>,
        <Link to="/contact"><Mail style={{ color: '#795548' }} /></Link>,
        <Create style={{ color: '#ffeb3b' }} />,
        <Description style={{ color: '#424242' }} />,
    ];
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        My Portfolio
          </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.toolbar} />
                <Avatar style={{alignSelf: 'center'}} alt="Akshay Sonawane" src={avatar} className={classes.large} />
                <p>Akshay Sonawane</p>
                <p>Sr. Software Engineer</p>
                <Divider />
                <List>
                    {textArray.map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{iconArray[index]}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Route path="/" exact component={About}/>
                <Route path="/experience" exact component={Experience}/>
                <Route path="/education" exact component={Education}/>
                <Route path="/contact" exact component={Contact}/>
            </main>
        </div>
    );
}