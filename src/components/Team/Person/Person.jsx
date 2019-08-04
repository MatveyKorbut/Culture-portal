import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import mail from '../../../images/email.png';
import github from '../../../images/github.png';

const useStyles = makeStyles({
  card: {
    textAlign: 'center',
    margin: '0 5px 10px',
  },
  links: {
    justifyContent: 'center',
  },
  media: {
    height: 200,
    cursor: 'default',
  },
  button: {
    margin: 0,
    width: 52,
    height: 52,
  },
  title: {
    height: '75px',
    cursor: 'default',
  },
});

const person = ({
  avatar,
  name,
  link,
  email,
  cont,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={avatar.fluid.src}
          title={name}
        />
        <CardContent className={classes.title}>
          <Typography gutterBottom variant="h6" component="h3">
              {name}
            </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.links}>
        <IconButton href={`https://github.com/${link}`} target="__blank" className={classes.button}>
          <img alt="github" width="40" src={github} className={classes.avatar} />
        </IconButton>
        <IconButton href={`mailto:${email}`} className={classes.button} color="primary">
          <img alt="email" width="40" src={mail} className={classes.avatar} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default person;
