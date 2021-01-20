import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import SearchBar from '../../organism/SearchBar/SearchBar';
import RouteCollectionItems from '../../organism/RouteCollectionItems/RouteCollectionItems';
import Typography from "../../atoms/Typography/Typography";
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles({
    root: {
      backgroundImage: `url("https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png")`,
      height: "400px",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "white",
    },
    top: {
      padding: "20px 90px 0 60px",
      cursor: "pointer",
    },
    logo: {
      padding:"10px 10px",
      width: "280px",
    },
    search: {
      width: "800px",
    },
    log:{
        padding:"0 30px 0 80px"
    },
    icon: {
      color: "rgb(255,255,255)",
    },
    
  });

function HomeView(props) {
    const classes = useStyles();
    return (
      <Grid container spacing={7}>
        <Grid item container direction="column" className={classes.root}>
            <Grid item container spacing={1} className={classes.top}>
                <Grid item>
                  <GetAppIcon className={classes.icon}/>
                </Grid>
                <Grid item>
                  <Typography mode="link" variant="subtitle2">Get the App</Typography>
                </Grid>
            </Grid> 
             <Grid item container spacing={3} justify="flex-end" className={classes.log}>
                   <Grid item >
                    <Typography variant="subtitle1">Login</Typography>
                    </Grid>
                    <Grid item>
                       <Typography variant="subtitle1">SignUp</Typography>
                   </Grid>
                </Grid>

              <Grid item container direction="column" justify="center" alignItems="center"spacing={5}>
              <Grid item>
                <img src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" 
                    className={classes.logo} alt="zomato-logo" />
              </Grid>
              <Grid item container alignItems="baseline"  justify="center" spacing={2}>
                <Grid item>
                  <Typography variant="h4">
                  Discover the best food &amp; drinks in
                  </Typography>
                </Grid>
                <Grid item>
                 <Typography variant="h4">Hyderabad</Typography>
                </Grid>
              </Grid>

            <Grid item className={classes.search}>
              <SearchBar />
            </Grid>
           </Grid>
          </Grid>
          <Grid item>
            <RouteCollectionItems />
          </Grid>       
      </Grid>
    );
}

export default HomeView
