import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Typography from "../../atoms/Typography/Typography";
import SearchBar from "../../organism/SearchBar/SearchBar";

const useStyles = makeStyles({
    root: {
      padding: "20px 70px 40px 70px",
      color: "rgb(100,100,100,.7)",
    },
    logo: {
      width: "150px",
    },
    faded: {
      color: "rgb(100,100,100,.4)",
    },
});

function Header(props) {
    const classes = useStyles();

    return (
    <Grid container direction="column" className={classes.root} spacing={6}>
      <Grid item container direction="row" alignItems="center" spacing={4}>
        <Grid item>
            <img alt="zomato-logo" className={classes.logo} src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" />
        </Grid>
        <Grid item lg>
          <SearchBar/>
        </Grid>
        <Grid item lg={2} justify="flex-end" container direction="row" spacing={2}>
          <Grid item >
            <Typography mode="link" variant="h6">
              Login
            </Typography>
          </Grid>
          <Grid item >
            <Typography mode="link" variant="h6">
              Sign Up
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="subtitle2">
          Home / India / Hyderabad / Hyderabad City /Tolichowki Restaurants
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Header
