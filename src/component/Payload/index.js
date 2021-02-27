import { Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import './style.scss';

function PayLoad() {
  return (
    <div className="Pay">
      <div className="grid">
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper >xs=12</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper >xs=6</Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default PayLoad;