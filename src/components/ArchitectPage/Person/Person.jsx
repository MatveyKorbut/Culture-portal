import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '10px',
    margin: '10px',
    maxWidth: '1000px',
  },
  image: {
    [theme.breakpoints.up('sm')]: {
      width: '25%',
    },
    padding: '0 30px 0 0',
  },
  bio: {
    [theme.breakpoints.up('sm')]: {
      width: '75%',
    },
  },
  rootItem: {
    [theme.breakpoints.up('sm')]: {
      alignItems: 'flex-start',
    },
    [theme.breakpoints.down('sm')]: {
      flexFlow: 'column',
    },
  },
}));

const person = ({
  img,
  name,
  date,
  vita,
}) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Grid
        container
        alignItems="center"
        direction="row"
        wrap="nowrap"
        className={classes.rootItem}
      >
        <Grid item className={classes.image}>
          <img alt={name} width="320" src={img.file.url} />
        </Grid>
        <Grid item className={classes.bio}>
          <Typography variant="h4" component="h2">
            {name}
          </Typography>
          <Typography variant="h6" component="h3">
            {date}
          </Typography>
          <Typography component="p">
            {vita}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default person;
