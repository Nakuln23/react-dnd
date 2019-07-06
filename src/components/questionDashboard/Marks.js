import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';

const styles = (theme) => ({
    root: {
      padding: theme.spacing(3, 2),
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    input: {
        margin: theme.spacing(1),
    }
  });

class Marks extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Paper className = {classes.root}>
                <Typography variant="h5" component="h3">
                    MARKS
                </Typography>
                 <div className={classes.container}>
                     <Input
                     placeholder="Right answer"
                     className={classes.input}
                     />
                     <Input
                     placeholder="Wrong Answer"
                     className={classes.input}
                     />
                     <Input
                     placeholder="No Answer"
                     className={classes.input}
                     />
                  </div>
            </Paper>
        )
    }
}

export default withStyles(styles)(Marks);
