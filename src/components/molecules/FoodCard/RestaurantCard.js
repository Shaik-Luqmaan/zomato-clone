import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid,Box } from "@material-ui/core";
import Typography from "../../atoms/Typography/Typography";
import Rating from "@material-ui/lab/Rating";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const useStyles = makeStyles({
  root: {
    maxWidth: "380px",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "270px",
    objectFit: "cover",
    borderRadius: "15px",
  },
  rating: {
    padding: "0 8px",
  },
  reviews:{
    color: "rgb(100,100,100,.9)",
  },
  cuisine:{
    color: "rgb(100,100,100,.9)",
  },
  cost:{
    color: "rgb(100,100,100,.9)",
  }
})

function RestaurantCard(props) {
    const classes = useStyles();
  return (
    <Grid
    container
    direction="column"
    alignItems="flex-start"
    className={classes.root}
  >
    <Grid item>
      <img alt="restaurant pic" className={classes.image} src={props.img} />
    </Grid>

    <Grid item className={classes.content}>
      <Typography variant="h6" data-testid="title">{props.title}</Typography>
    </Grid>

    <Grid item container direction="row" alignItems="center">
      <Rating
        name="size-medium"
        defaultValue={props.rating}
        precision={0.5}
      />

      <Box className={classes.rating} >
      <Typography  data-testid="rating">{props.rating}</Typography>
      </Box>

      <Box className={classes.reviews} >
      <Typography data-testid="reviews">({props.reviews} Reviews)</Typography>
      </Box>

    </Grid>

    <Grid item className={classes.cuisine}>
      <Typography data-testid="cuisine" >{props.cuisine}</Typography>
    </Grid>

    <Grid item className={classes.cost}>
      <Typography data-testid="cost">
        Rs. {props.cost} per person
        <FiberManualRecordIcon style={{ fontSize: "7px", color: "rgb(100,100,100,.9)", padding: "4px 10px",}} />
        {props.time} mins
      </Typography>
    </Grid>

  </Grid>
  )
}

export default RestaurantCard
