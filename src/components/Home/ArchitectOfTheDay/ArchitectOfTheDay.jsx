import React from 'react';
import { navigate } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 600,
  },
  media: {
    height: 300,
  },
});

const ArchitectOfTheDay = ({ architect }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={() => navigate(architect.path)}>
        <CardMedia
          className={classes.media}
          image={architect.img.file.url}
          title="Architect of the Day"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {architect.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {architect.vita}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={() => navigate(architect.path)} size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default ArchitectOfTheDay;
