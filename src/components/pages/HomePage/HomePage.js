import React from "react";
import { Grid } from "@material-ui/core";
import HomeView from "../../templates/HomeTemplate/HomeView";
import Collections from "../../templates/CollectionsTemplate/Collections";
import Locations from "../../templates/LocationTemplate/LocationTemplate";

const HomePage = (props) => {

  return (
    <Grid container direction="column">
      <Grid item>
        <HomeView />
      </Grid>
      <Grid item>
        <Collections />
      </Grid>
      <Grid item>
          <Locations />
      </Grid>
    </Grid>
  );
};

export default HomePage;