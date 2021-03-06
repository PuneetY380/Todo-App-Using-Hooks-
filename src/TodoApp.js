import React, {useState, useEffect} from 'react';

import { Typography } from '@material-ui/core';
import { Paper,AppBar,Toolbar,Grid } from '@material-ui/core';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import useTodoState from './hooks/useTodoState';

function TodoApp(){
    const initialTodos = [{id: 1, task: "Pet a monkey", completed: false}];
    const {todos,addTodo,removeTodo,toggleTodo,editTodo} = useTodoState(initialTodos)
    // const initialTodos = [
    //     {id:1, task: "Clean Tank", completed: false},
    //     {id:2, task: "Wash Car", completed: true},
    //     {id:3, task: "Grow Beard", completed: false}
    // ];
    

    

    

    return (
        <Paper
        style={{
            padding: 0,
            margin: 0,
            height: "100vh",
            backgroundColor: "#fafafa"
        }}
        elevation={0}
        >
            <AppBar color='primary' position='static' style={{height: "64px"}}>
                <Toolbar>
                    <Typography color='inherit'>Todos With Hooks</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justifyContent='center' style={{marginTop: '1rem'}}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo= {addTodo} />
                    <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} 
                    editTodo={editTodo} />
                </Grid>
            </Grid>
            
        </Paper>
    );
}

export default TodoApp;