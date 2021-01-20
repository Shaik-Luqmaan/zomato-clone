import React from 'react'
import {Grid} from '@material-ui/core';
import Typography from'../../atoms/Typography/Typography';
import { makeStyles } from "@material-ui/core/styles";
import Locations from '../../organism/Location/LocationCards'

const useStyles = makeStyles({
  root:{
    padding: "40px 30px 0 0",
  },
  text: {
      padding: "10px 50px 0 80px",
      color: "rgb(54, 54, 54)",
      fontSize: "3.6rem",
      lineHeight: 1.2,
      fontWeight: 400,
  },
});

function LocationTemplate(props) {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.root} alignItems="center">
    <Grid item className={classes.text}>
      <Typography variant="h4">Popular localities in and around Hyderabad</Typography>
    </Grid>
    <Grid item>
        <Locations />
    </Grid>
  </Grid>
  )
}

export default LocationTemplate
