import React from 'react';
import { navigate } from 'gatsby';
import { useTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 900,
    boxShadow: '0 0 0 2px #ccc',
    margin: '0 auto',
  },
  main: {
    display: 'flex',
    justifyContent: 'flex-start',
    padding: '20px',
    [theme.breakpoints.down('xs')]: {
      flexFlow: 'column',
    },
  },
  media: {
    height: 300,
    minWidth: 200,
  },
  btnBox: {
    justifyContent: 'flex-end',
    background: '#006668',
  },
  btn: {
    color: '#fdd104',
  },
}));

const ArchitectOfTheDay = ({ architect }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <>
      <Card className={classes.card}>
        <CardActionArea onClick={() => navigate(architect.path)} className={classes.main}>
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
        <CardActions className={classes.btnBox}>
          <Button onClick={() => navigate(architect.path)} size="small" color="primary" className={classes.btn}>
            {t('learn_more')}
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ArchitectOfTheDay;
