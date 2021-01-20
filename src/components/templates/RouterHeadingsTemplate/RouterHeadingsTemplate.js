import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Typography from "../../atoms/Typography/Typography";
import Collections from "../CollectionsTemplate/Collections";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    root: {
      paddingLeft: "10px"
    },
    subHeading: {
      color: "rgb(100,100,100,.9)",
      cursor: "pointer",
      padding:"10px 10px",
    },
    active: {
      color: "rgb(240,0,0,.7)",
      borderBottom: "2px solid rgb(240,0,0,.4)",
      padding: "20px 10px 40px 30px",
    },
    subHeadingBar: {
      padding: "0 0 60px 60px",
    },
    link: {
        textDecoration: "none",
        color: "inherit",
      },
    text:{
       padding: "0 30px",
    },
    background : {
        background: "rgb(248, 248, 248)",
        padding: "10px 10px 10px 10px",
    },
    tab:{
        border: "1px solid rgb(207, 207, 207)",
        color: "rgb(156, 156, 156)",
        backgroundColor: "rgb(255, 255, 255)",
        boxShadow: "rgba(54, 54, 54, 0.06) 0px 5px 3px",
        borderRadius: "0.4rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        height: "35px",
        width:"90px",
        margin: "20px 0 20px 30px",
        fontSize: "30px"
    }
  });

function Headings(props) {
    const classes = useStyles();

    let activeType = 0;
    if (props.heading) {
      activeType = props.heading;
    }

    return(
        <Grid container direction="column" className={classes.root}>
            <Grid item  direction="row" container spacing={8} className={classes.subHeadingBar}>
                {headingsList.map((headingItem, index) => {
                let classList = classes.subHeading;
                if (index === activeType) {
                classList += " " + classes.active;
                }
                return (
                    <Grid item className={classList} key={index}>
                         <Link
                            to={"/hyderabad/" + headingItem.link}
                            className={classes.link}>
                            <Typography variant="h6">{headingItem.title}</Typography>
                        </Link>
                    </Grid>
                );
            })}
            </Grid>
        
            {activeType > 0 && (<Grid items><Collections /></Grid>)}

        <Grid container direction="row" >    
            {tabList.map((tab,index) =>{
                return(
                    <Grid items className={classes.tab}>
                        <Typography variant="subtitle1">{tab.name}</Typography>
                    </Grid> 
                )
            })}           
        </Grid>
            <Grid item className={classes.text}>
                <Typography variant="h4">
                    {headingsList[activeType].title} Restaurants in Hyderabad
                </Typography>
            </Grid>
        </Grid>    
    )
}

const headingsList = [
    {
      title: "Delivery",
      link: "delivery"
    },
    {
      title: "Dining Out",
      link:"dine-out"
    },
    {
      title: "Nightlife",
      link: "night-life"
    },
];

const tabList = [
    {
        name: "Filter"
    },
    {
        name: "Offers"
    },
    {
        name: "Distance"
    }, 
    {
        name: "Online"
    },

]

export default Headings



 