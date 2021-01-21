import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Typography from'../../atoms/Typography/Typography';
import CollectionItems from '../../organism/CollectionItems/CollectionItems';
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const useStyles = makeStyles({
    root: {
        paddingLeft: "20px",
    },
    link:{
        color: "rgb(236, 70, 84)",
        cursor: "pointer",
        paddingRight:"30px"
    },
    text:{
      paddingLeft: "40px",
      color: "rgb(0,0,0,.6)", 
    },
    title:{
        paddingLeft: "40px",
    }
  });

function Collections(props) {
    const classes = useStyles();
    return (
        <Grid container direction="column" className={classes.root}>
          <Grid item direction="row" className={classes.title}>
            <Typography variant="h4">Collections</Typography>
          </Grid>
          <Grid item container direction="row"> 
            <Grid item lg className={classes.text}>
              <Typography variant="h6">
                Explore curated lists of top restaurants, cafes, pubs, and bars in Hyderabad, based on trends.
              </Typography>
            </Grid>
            <Grid item container alignItems="flex-end" justify="flex-end" lg={3} className={classes.link}>
              <Grid item>
                <Typography mode="link" variant="subtitle1">
                  All Collections in Hyderabad
                </Typography>
              </Grid>
              <Grid item>
                <ArrowRightIcon fontSize="small" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
              <CollectionItems />
          </Grid>
        </Grid>
      );
}

export default Collections
