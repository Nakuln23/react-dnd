import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
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
                         QUESTION TYPES
                </Typography>
                    <Grid container spacing={2}>
                        <Container maxWidth="sm">

                        <MapQuestionTypes type = {types} handleDrop = {handleDrop} />
                         {/* {types.map(type => {
                        return (
                        <Grid item xs={4}>
                            <MapQuestionTypes type={type} handleDrop = {handleDrop}/>
                        </Grid>
                        ) 
                        })} */}
                        </Container>
                    </Grid>
            </Paper> 
        </div>
    )
}

export default withStyles(styles)(SelectQuestionType)
