import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import CollectionCard from '../../molecules/CollectionCard/CollectionCard';

const useStyles = makeStyles({
    root: {
      padding: "40px 20px 40px 0",
    },
  });

function NightCollectionCards(props) {
    const classes = useStyles();
    const {CollectionList} = props;
    return (
        <Grid container className={classes.root} spacing={10}>
          {CollectionList.map((value, index) => {
            return (
              <Grid item md={3} sm={6} xs={12} key={index}>
                  <CollectionCard {...value} />
              </Grid>
            );
          })}
        </Grid>
      );   
}

export default NightCollectionCards
