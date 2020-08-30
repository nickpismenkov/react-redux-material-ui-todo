import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Form from './components/Form';
import Header from './components/Header';
import TodoList from './components/TodoList';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    height: '100%',
  },
});

const Todo = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Form />
      <TodoList />
    </div>
  );
};

export default Todo;
