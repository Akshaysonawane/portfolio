import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as styles from './educationCard.module.css';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  root: {
    flexGrow: 1,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const EducationCard = (props) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  let classNames = [
    classes.root, 
    styles.educationCard
  ];

  return (
    <div className={classNames}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card className={classes.card}>
            <CardContent>
              <Typography className={styles.course} variant="h5" component="h2">
                {props.course}
              </Typography>
              <Typography className={styles.college} variant="h5" component="h2">
                {props.collegeName}
              </Typography>
              <ul>
                <li>Year Of Passing: {props.yearOfPassing}</li>
                <li>Percentage: {props.percentage}</li>
              </ul>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default EducationCard;