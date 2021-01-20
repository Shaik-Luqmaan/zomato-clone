import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import CollectionCard from '../../molecules/CollectionCard/CollectionCard';
import col1 from '../../pictures/sweet.jpg';
import col2 from '../../pictures/most.jpg';
import col3 from '../../pictures/trending.jpg';
import col4 from '../../pictures/collection_1.jpg';

const useStyles = makeStyles({
    root: {
      padding: "30px 40px 40px 20px",
    },
  });

function CollectionItems(props) {
const classes = useStyles();
// const {CollectionList} = props;

return (
    <Grid container className={classes.root} spacing={4}>
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

const CollectionList= [
  {
      text: "Sweet Tooth 2020",
      placesCount : '9 Places',
      img: col1,
  },
  {
      
      text: "Most Searched 2020",
      placesCount : '28 Places',
      img: col2,
      
  },
  {
      
      text: "Best Openings of 2020",
      placesCount : '25 Places',
      img: col3,
      
  },
  {
      
      text: "Trending this Week",
      placesCount : '28 Places',
      img: col4,
      
  },
]
export default CollectionItems
