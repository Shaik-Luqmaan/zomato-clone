import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Typography from "../../atoms/Typography/Typography";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";


const useStyles = makeStyles({
    root: {
        borderRadius: "0.6rem",
        height: "320px",
        width: "280px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        cursor: "pointer",
      },
      large: {
        height: "300px",
        width: "100%"
      },
      content: {
        padding: "15px",
      },
      arrowIcon: {
        position: "relative",
        top: "8px",
      },
})

function CollectionCard(props) {
    const classes = useStyles();
    let rootClass = classes.root;

  if (props.size === "large") {
    rootClass += " " + classes.large;
  }
  return (
    <Grid
      container
      alignItems="flex-end"
      className={rootClass}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0, 0.1), rgb(0, 0, 0, .6)), url(${props.img})`,
      }}
    >
      <Grid item className={classes.content}>
        <Typography {...props} variant="h6">
          {props.text}
        </Typography>
        <Typography {...props} variant="subtitle2">
          {props.placesCount} 
          <ArrowRightIcon className={classes.arrowIcon} fontSize="small" />
        </Typography>
      </Grid>
    </Grid>
  )
}

export default CollectionCard
