import React from 'react';
import idGenerator from 'react-id-generator';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(() => ({
  root: {
    padding: '10px',
    margin: '10px',
    marginBottom: '0',
    width: '100%',
    maxWidth: '1000px',
  },
}));

const activity = ({ work }) => {
  const data = Object.values(JSON.parse(work.internal.content));
  const works = data.map(building => (
    <tr key={idGenerator()}>
      <td>
        {building.title}
      </td>
      <td>
        {building.date}
      </td>
    </tr>
  ));
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <table>
        <thead>
          <tr>
            <th>Работа</th>
            <th>Дата создания</th>
          </tr>
        </thead>
        <tbody>
          {works}
        </tbody>
      </table>
    </Paper>
  );
};

export default activity;
