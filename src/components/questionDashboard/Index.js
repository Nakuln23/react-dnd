import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SelectQuestionType from './SelectQuestionType';
import ChoiceTypeSelected from './ChoiceTypeSelected';
import Typography from '@material-ui/core/Typography';
import MapQuestionTypes from './MapQuestionTypes';
import HTML5Backend from 'react-dnd-html5-backend'
// import { DragDropContext } from 'react-dnd';
import { DragDropContext } from "react-dnd";
// import DragDropContext from 'react-dnd/lib/cjs/DragDropContext.js';

const styles = (theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });

class Index extends Component {

  state = {
    questionTypes : [
      {
        id : 1,
        select : "Choice",
        Icon : "CheckCircleOutlined",
      },
      {
        id : 2,
        select : "Order",
        Icon : "CheckCircleOutlined",
      },
      {
        id : 3,
        select : "Match",
        Icon : "CheckCircleOutlined",
      },

    ]
  }

  handleDrop = (id) => {
     console.log(id)
    }
  
  render() {
    const {classes} = this.props;
    const {questionTypes} = this.state;
    console.log(questionTypes)
      return (
        <div className = {classes.root}>
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <SelectQuestionType types={questionTypes} handleDrop = {(id)=> {
                    this.handleDrop(id)
                  }}/> 
                </Grid>
                <Grid item xs={8}>
                  <ChoiceTypeSelected/>
                </Grid>
              </Grid>
        </div>
      )
    }
  }
  
 const Wrapper = DragDropContext(HTML5Backend)
  
 export default Wrapper(withStyles(styles)(Index))