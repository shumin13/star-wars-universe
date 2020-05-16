import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    background: 'rgb(40, 39, 39)',
    color: 'rgb(221, 221, 221)',
  },
  text: {
    textTransform: 'uppercase',
    '&:hover': {
      color: '#eb3b61',
    },
  },
});

const Person = ({ person }) => {
  const classes = useStyles();

  let history = useHistory();

  const handleOnClick = () => {
    history.push(`/people/${person.id}`);
  };

  return (
    <Card className={classes.card} onClick={handleOnClick}>
      <CardActionArea>
        <CardContent>
          <Typography variant='h6' className={classes.text}>
            {person.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Person;
