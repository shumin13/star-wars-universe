import React from 'react';
import { Card, CardHeader, CardContent, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    background: 'rgb(40, 39, 39)',
    color: 'rgb(221, 221, 221)',
    height: '100%',
  },
  header: {
    borderBottom: '1px solid rgb(170, 170, 170)',
  },
});

const Section = ({ title, children }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardHeader className={classes.header} title={title} />
        <CardContent>{children}</CardContent>
      </Card>
    </Grid>
  );
};

export default Section;
