import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { DropTarget } from 'react-dnd';

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
    },
    paper : {
      height : 500,
      textAlign : "center"
    }
  }));

const ChoiceTypeSelected = ({isOver, canDrop, connectDropTarget, droppedItem}) => {
     const classes = useStyles();
   
    // let className = "";
    // if(isOver && canDrop){
    //     className = 'green';
    // }else if(!isOver && canDrop){
    //     className = 'yellow';
    // }else if(isOver && !canDrop){
    //     className = 'red'
    // }
    // console.log(droppedItem)
    // // return connectDropTarget(
    //     <div className={`target ${className}`}>
    //         { droppedItem && droppedItem.id }
    //     </div>
    // )
    return connectDropTarget(
        <div>
            <Paper className={classes.paper}>Drag from left</Paper>
        </div>
    )
}

const spec = {
  drop(props, monitor, component){
      const types = monitor.getItem()
      props.onDrop(types)
  }
}
function collect(connect, monitor) {
return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop()
};
}

export default  DropTarget("SOURCE", spec, collect)(ChoiceTypeSelected)
