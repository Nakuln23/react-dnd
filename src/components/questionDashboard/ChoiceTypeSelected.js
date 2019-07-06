import React, {Component} from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing(1),
    width : '100%',
    height : '75px'
  },
  button : {
    color : 'green'
  }
});

class ChoiceTypeSelected extends Component {
   
    render() {
        const {classes} = this.props;
        return (
            <>
            <Paper className = {{backgroundColor : 'lightgreen'}}>
                <Typography variant="h5" component="h3" className= {{backgroundColor : 'green'}}>
                    Choice Interaction
                </Typography>
            </Paper>
            <div className={classes.container}>
            <Input
              placeholder = "Your Question goes here"
              className={classes.input}
              inputProps={{
                'aria-label': 'Description',
              }}
            />
            <Input
              placeholder="Option1 goes here"
              className={classes.input}
              inputProps={{
                'aria-label': 'Description',
              }}
            />
             <Input
              placeholder="Option2 goes here"
              className={classes.input}
              inputProps={{
                'aria-label': 'Description',
              }}
            />
             <Input
              placeholder="Option3 goes here"
              className={classes.input}
              inputProps={{
                'aria-label': 'Description',
              }}
            />
            <Button className={classes.button} onSubmit={this.handleSubmit}>Submit</Button>
          </div>
            </>
            
        );
    }
}

export default withStyles(styles)(ChoiceTypeSelected)
