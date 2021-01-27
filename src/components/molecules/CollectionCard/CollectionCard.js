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
      arrow: {
        position: "relative",
        top: "8px",
      },
      large: {
        height: "300px",
        width: "100%"
      },
      content: {
        padding: "15px",
      },
      
})

const CollectionCard = ({
  text,
  placesCount,
  img,
  ...props
})=>{

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
        backgroundImage: `linear-gradient(rgba(0,0,0, 0.1), rgb(0, 0, 0, .6)), url(${img})`,
      }}
      data-testid="main"
      {...props}
    >
      <Grid item className={classes.content}>
        <Typography data-testid="text" variant="h6" >
          {text}
        </Typography>
        <Typography  variant="subtitle2" data-testid="place">
          {placesCount} 
          <ArrowRightIcon className={classes.arrow} fontSize="small" />
        </Typography>
      </Grid>
    </Grid>
  )
}

export default CollectionCard
