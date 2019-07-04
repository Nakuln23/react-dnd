import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CheckCircleOutlined from '@material-ui/icons/CheckCircleOutlined';
import MapQuestionTypes from './MapQuestionTypes';

const styles = (theme) => ({
  root: {
    padding: theme.spacing(3, 2),
  },
});

const SelectQuestionType = ({classes, types, handleDrop}) => {
    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant="h5" component="h3">
                         Question Types
                    </Typography>
                    <Grid container spacing={2}>
                         {types.map(type => {
                        return (
                        <Grid item xs={4}>
                            <MapQuestionTypes type={type} handleDrop = {handleDrop}/>
                        </Grid>
                        ) 
                        })}
                    </Grid>
            </Paper> 
        </div>
    )
}



export default withStyles(styles)(SelectQuestionType)
