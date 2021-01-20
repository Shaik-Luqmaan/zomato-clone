import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import RouteCollection from "../../molecules/RouteCollections/RouteCollection"
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    root: {
      padding: "20px 40px 80px 70px",
    },
});

function RouteCollectionItems(props) {
    const classes = useStyles();
    // const {CollectionList} = props;

    return (
        <Grid container alignItems="stretch" justify="space-evenly" className={classes.root} spacing={1}>
        
        <Grid item md={3} sm={6} xs={12}>
          <Link to="/hyderabad/delivery" style={{ textDecoration: 'none' }}>
              <RouteCollection img={"https://b.zmtcdn.com/webFrontend/64dffaa58ffa55a377cdf42b6a690e721585809275.png"}
                title={"Order Food Online"}/>
          </Link>
        </Grid>

        <Grid item md={3} sm={6} xs={12}>
          <Link to="/hyderabad/dine-out" style={{ textDecoration: 'none' }}>
             <RouteCollection img={"https://b.zmtcdn.com/webFrontend/95f005332f5b9e71b9406828b63335331585809309.png"}
                title={"Go out for a meal"} />
          </Link>
        </Grid>

        <Grid item md={3} sm={6} xs={12}>
          <Link to="/hyderabad/night-life" style={{ textDecoration: 'none' }}>
              <RouteCollection img={"https://b.zmtcdn.com/webFrontend/8ff4212b71b948ed5b6d2ce0d2bc99981594031410.png"}
                title={"Night Life & CLubs"} />
          </Link>
        </Grid>

        <Grid item md={3} sm={6} xs={12}>
           <RouteCollection img={"https://b.zmtcdn.com/webFrontend/b256d0dd8a29f9e0623ecaaea910534d1585809352.png"}
              title={"Zomato Pro"}/>
          
        </Grid>

        </Grid>
          
      );
}

// const CollectionList = [
//   {
//       title: "Order Food Online",
//       img: "https://b.zmtcdn.com/webFrontend/64dffaa58ffa55a377cdf42b6a690e721585809275.png"
//   },
//   {
//       title: "Go out for a meal",
//       img: "https://b.zmtcdn.com/webFrontend/95f005332f5b9e71b9406828b63335331585809309.png"
//   },
//   {
//       title: "Night Life",
//       img: "https://b.zmtcdn.com/webFrontend/8ff4212b71b948ed5b6d2ce0d2bc99981594031410.png"
//   },
//   {
//       title: "Zomato Pro",
//       img: "https://b.zmtcdn.com/webFrontend/b256d0dd8a29f9e0623ecaaea910534d1585809352.png"
//   }

// ]

export default RouteCollectionItems
