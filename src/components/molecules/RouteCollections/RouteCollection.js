import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Typography from "../../atoms/Typography/Typography";

const useStyles = makeStyles({
    root: {
      border: "1px solid rgb(0,0,0,.2)",
      borderRadius: "15px",
      maxWidth: "280px",
      cursor: "pointer",
      transition: "transform .5s",
      "&:hover": {
        transform: "scale(1.08)",
      },
    },
    image: {
      objectFit: "cover",
      width: "100%",
      height: "150px",
      borderRadius: "15px 15px 0 0",
    },
    content: {
      padding: "8px 8px 15px 15px",
      color: "rgb(0,0,0,.8)",
    },
  });

function RouteCollection(props) {
    const classes = useStyles();
    return (
    <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.root}
     >
      <Grid item>
        <img alt="Route Card image" 
            className={classes.image} 
            src={props.img} />
      </Grid>

      <Grid item className={classes.content}>
        <Typography {...props} variant="h6">
          {props.title}
        </Typography>
      </Grid>

    </Grid>
    )
}

export default RouteCollection
