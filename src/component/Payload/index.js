import React from 'react';
import { useDispatch } from 'react-redux';
import './style.scss';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import { useParams } from 'react-router-dom';

function PayLoad({ hideHd }) {
  const { id } = useParams();
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