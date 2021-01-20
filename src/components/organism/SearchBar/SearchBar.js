import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import React from 'react';
import InputField from '../../atoms/InputField/InputField';
import RoomRoundedIcon from "@material-ui/icons/LocationOn";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const useStyles = makeStyles({
    root: {
      backgroundColor: "white",
      padding: "15px",
      height: "60px",
      width: "100%",
      borderRadius: "15px",
      border: "1px solid rgb(100,100,100,.1)",
      boxShadow: "0 2px 6px rgb(100, 100, 100, 0.2)",
    },
    icon: {
      fontSize: "23px",
      paddingRight: "12px",
      color: "rgb(255,0,0,.4)",
    },
    input: {
      width: "20%",
    },
    line: {
      height: "30px",
      width: "2px",
      backgroundColor: "rgb(0,0,0,.1)",
      margin: "0 16px 0 10px",
    },
    arrow: {
      opacity: ".5",
      fontSize: "25px",
      color: "black",
    },
    textField: {
      width:"80%",
    },
    searchIcon: {
      opacity: ".4",
      fontSize: "25px",
      color: "black",
    },
  });

function SearchBar(props) {
    const classes = useStyles();
    return (
    <Grid container alignItems="center" className={classes.root}>
      <Grid item>
        <RoomRoundedIcon className={classes.icon} />
      </Grid>
      <Grid item className={classes.input}>
        <InputField placeholder="Hyderabad" />
      </Grid>
      <Grid item className={classes.arrow}>
        <ArrowDropDownIcon />
      </Grid>
      <Grid item>
        <div className={classes.line}></div>
      </Grid>
      <Grid item sm className={classes.textField}>
        <InputField
          size="small"
          placeholder="Search for restaurant, cuisine or a dish"
        />
      </Grid>
      <Grid item>
        <SearchIcon className={classes.searchIcon} />
      </Grid>
    </Grid>
    )
}

export default SearchBar
