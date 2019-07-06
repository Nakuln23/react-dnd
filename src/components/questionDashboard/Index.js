import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SelectQuestionType from './SelectQuestionType';
import ChoiceTypeSelected from './ChoiceTypeSelected';
import Typography from '@material-ui/core/Typography';
import MapQuestionTypes from './MapQuestionTypes';
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from "react-dnd";
import TargetDropArea from './TargetDropArea';
import Marks from './Marks';

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
    loadComponent : null,
    questionTypes : 
    // [
      {
        id : 1,
        select : "Choice",
        Icon : "CheckCircleOutlined",
        component : <ChoiceTypeSelected/>
      },
      // {
      //   id : 2,
      //   select : "Order",
      //   Icon : "CheckCircleOutlined",
      // },
      // {
      //   id : 3,
      //   select : "Match",
      //   Icon : "CheckCircleOutlined",
      // },

    // ]
  }

  handleDrop = (questionType) => {
    //  if (id == 1) {
       console.log('***************',questionType)

       this.setState({
        loadComponent : questionType
       })
       
    //  }
    }
  
  render() {
    const {classes} = this.props;
    const {questionTypes} = this.state;
    // console.log('*************************',questionTypes)
      return (
        <div className = {classes.root}>
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <SelectQuestionType types={questionTypes} handleDrop = {(questionType)=> {
                    this.handleDrop(questionType)
                  }}/> 
                <Marks/>
                </Grid>
                
                <Grid item xs={8}>
                  
                  {this.state.loadComponent ? this.state.loadComponent : <TargetDropArea/>  }
                </Grid>
              </Grid>
        </div>
      )
    }
  }
  
 const Wrapper = DragDropContext(HTML5Backend)
  
 export default Wrapper(withStyles(styles)(Index))