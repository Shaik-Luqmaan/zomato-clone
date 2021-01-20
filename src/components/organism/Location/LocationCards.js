import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Location from "../../molecules/LocationCard/Location"

const useStyles = makeStyles({
    root: {
      padding: "40px",
    },
  });

function LocationCards(props) {
    const classes = useStyles();
    // const { LocationDataList } = props;

    return (
        <Grid container className={classes.root} spacing={2}>
          {LocationDataList.map((value, index) => {
            return (
              <Grid item key={index} md={4} sm={6} xs={12} >
                  <Location {...value} ></Location>
              </Grid>
            );
          })}
        </Grid>
      );
}

const LocationDataList = [
    {
      placesCount: 540,
      placeName: "Tolichowki",
    },
    {
      placesCount: 451,
      placeName: "Mehdipatnam",
    },
    {
      placesCount: 187,
      placeName: "Asif Nagar",
    },
    {
      placesCount: 122,
      placeName: "Lakdikapool",
    },
    {
      placesCount: 48,
      placeName: "Nampally",
    },
    {
      placesCount: 363,
      placeName: "Jubilee Hills",
    },
    {
      placesCount: 584,
      placeName: "Gachibowli",
    },
    {
      placesCount: 264,
      placeName: "Hitech City",
    },
    {
      placesCount: 93,
      placeName: "Madhapur",
    },
      {
        placesCount: 363,
        placeName: "Banjara Hills",
      },
      {
        placesCount: 84,
        placeName: "Suncity",
      },
      {
        placesCount: 264,
        placeName: "Santosh Nagar",
      },
      {
        placesCount: 93,
        placeName: "Madhapur",
      },
      {
        placesCount: 1153,
        placeName: "Kukatpally",
      },
      {
        placesCount: 166,
        placeName: "Old City",
      },
    ]

export default LocationCards
