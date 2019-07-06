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

const TargetDropArea = (props) => {
     const classes = useStyles();
   console.log(props)
   return props.connectDropTarget(
        <div>
            <Paper className={classes.paper}>Drag from left</Paper>
        </div>
    )
}

const spec = {
  drop(props, monitor, component){
      const questionType = monitor.getItem()
      console.log('5555',questionType)
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

export default DropTarget("SOURCE", spec, collect)(TargetDropArea)
