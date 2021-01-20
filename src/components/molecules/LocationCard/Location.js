import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid,Paper } from "@material-ui/core";
import Typography from "../../atoms/Typography/Typography";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({
    root: {
      border: "1px solid rgb(232,232,232)",
      height: "70px",
      maxWidth: "350px",
      borderRadius: "12px",
      padding: "20px",
      margin: "15px",
      boxShadow: "0 1.5px 2px rgb(100, 100, 100, 0.2)",
      color: "rgb(0,0,0,.8)",
     
      transition: "transform .2s",
      "&:hover": {
        boxShadow: "1px 2px 6px rgb(100, 100, 100, 0.2)",
      },
    arrowIcon: {
      fontSize: "20px",
      opacity: .7,
    }, 
}});


function Location(props) {
    const classes = useStyles();
  return (
    <Grid container alignItems="center" className={classes.root}>
    <Grid item xs>
    <Typography {...props} variant="h6">
      {props.placeName} ({props.placesCount})
    </Typography>
    </Grid>
    <Grid item>
    <KeyboardArrowRightIcon className={classes.arrowIcon}/>
    </Grid>
  </Grid>
  )
}

export default Location
