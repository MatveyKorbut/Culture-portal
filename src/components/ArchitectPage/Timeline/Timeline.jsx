import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

const useStyles = makeStyles(() => ({
  root: {
    padding: '10px',
    margin: '10px',
    width: '1000px',
    textAlign: 'center',
  },
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
            key={event.text.length}
            dateText={event.date}
            dateInnerStyle={{ background: '#3f51b5' }}
            style={{ color: '#3f51b5' }}
          >
            <p style={{ fontSize: '20px' }}>{event.text}</p>
          </TimelineItem>
        ))}
      </Timeline>
    </Paper>
  );
};

export default timeline;
