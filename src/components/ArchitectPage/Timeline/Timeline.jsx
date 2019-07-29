import React from 'react';
import shortid from 'shortid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '10px',
    margin: '10px',
    maxWidth: '1000px',
    textAlign: 'center',
  },
  text: {
    fontSize: '20px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '15px',
    },
  }
}));

const timeline = ({ timelineData }) => {
  const data = Object.values(JSON.parse(timelineData.internal.content));
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography variant="h4" component="h3">Хронология</Typography>
      <Timeline lineColor="#ddd">
        {data.map(event => (
          <TimelineItem
            key={shortid.generate()}
            dateText={event.date}
            dateInnerStyle={{ background: '#3f51b5' }}
            style={{ color: '#3f51b5' }}
          >
            <p className={classes.text}>{event.text}</p>
          </TimelineItem>
        ))}
      </Timeline>
    </Paper>
  );
};

export default timeline;
