import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CheckCircleOutlined from '@material-ui/icons/CheckCircleOutlined';
import { DragSource } from "react-dnd";

const styles = (theme) => ({
    root: {
      padding: theme.spacing(3, 2),
    },
    typePaper : {
      marginTop : 20,
      height: 75,
      width: 75,
    },
    icon: {
      margin: theme.spacing(1),
      fontSize: 32,
    },
    button : {
        color : 'green'
    }
  });

const MapQuestionTypes = (props) => {
  // console.log(props)
    return props.connectDragSource(
        <div>
            <Paper className={props.classes.typePaper}>
            <Typography variant="p" component="p">
              {props.type.select}
            </Typography>
                <CheckCircleOutlined className={props.classes.icon}/>
            </Paper>
        </div>
    )
}

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource()
  };
}

const cardSource = {
  beginDrag(props, monitor) {
    console.log ('Begin dragging')
    const questionType = { component : props.type.component };
    console.log('***********',questionType)
    return questionType;
  },
  endDrag(props,monitor,component) {
    // const {onDrop} = props
    if(!monitor.didDrop()){
      return null
    }
    const questionType = props.type.component;
    return props.handleDrop(questionType)

    // console.log(id)
    // onDrop(id);
  }
};

export default DragSource("SOURCE", cardSource, collect)(withStyles(styles)(MapQuestionTypes))
