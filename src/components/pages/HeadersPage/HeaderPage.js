import React from "react";
import { Grid } from "@material-ui/core";
import Header from "../../organism/Header/Header";
import RestaurantCards from "../../organism/RestauratCards/RestaurantCards"
import RouterHeadingsTemplate from "../../templates/RouterHeadingsTemplate/RouterHeadingsTemplate"

function HeaderPage(props) {
    return (
        <Grid container direction="column">
          <Grid item>
            <Header />
          </Grid>
          <Grid item>
            <RouterHeadingsTemplate {...props} />
          </Grid>
          <Grid item>
            <RestaurantCards />
          </Grid>
        </Grid>
      );
}

export default HeaderPage




