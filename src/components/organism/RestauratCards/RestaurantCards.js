import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import RestaurantCard from '../../molecules/FoodCard/RestaurantCard'

const useStyles = makeStyles({
    root: {
        padding: "10px 20px 0 30px",
    },
    image: {
      margin: "20px 0",
    },    
  });

function RestaurantCards(props) {
    const classes = useStyles();
    // const {RestaurantList} = props;
    return(
    <Grid container direction="row" alignItems="stretch" spacing={3} className={classes.root}>
        {RestaurantList.map((value, index) => {
          return (
            <Grid item id={index} md={4} sm={6} xs={12} key={index} className={classes.image}>
              <RestaurantCard {...value}></RestaurantCard>
            </Grid>
          );
        })}
      </Grid>
    )
}

const RestaurantList = [
  {
      title: "Cafe Bahar",
      img: "https://b.zmtcdn.com/data/pictures/chains/9/18434969/583c51d53a841df904e7e4cc0ba19462_o2_featured_v2.jpg",
      rating : 4.5,
      reviews : "13k",
      cuisine : "Mughlai, North Indian, Chineese, Biryani, Sea Food",
      cost: 150,
      time: 44, 
  },
  {
      title: "Dosa Factory",
      img: "https://b.zmtcdn.com/data/pictures/3/18748843/0c381df7d3fafba36da4b51a4d399ff7_o2_featured_v2.jpg",
      rating : 4.2,
      reviews : "5k",
      cuisine : "South Indian",
      cost: 100,
      time: 25, 
  },
  {
      title: "Behrouz Biryani",
      img: "https://b.zmtcdn.com/data/pictures/chains/1/18362381/1ce7a1c1b9d9e0470b9f3af63a8b9234_o2_featured_v2.jpg",
      rating : 3.7,
      reviews : "2.3k",
      cuisine : "Biryani, Kebab",
      cost: 300,
      time: 45, 
  },
  {
      title: "Famous Sweets and Bakers",
      img: "https://b.zmtcdn.com/data/pictures/chains/3/19237913/e1e94a49bda4c11ab3e3c19198e932a5_o2_featured_v2.jpg",
      rating : 3.7,
      reviews : "5k",
      cuisine : "Bakery, Fast Food",
      cost: 200,
      time: 35, 
  },
  {
      title: "Shah Ghouse",
      img: "https://b.zmtcdn.com/data/pictures/7/19279997/2d4ab42091908f0a2b8a985fd868b904_o2_featured_v2.jpg",
      rating : 4.5,
      reviews : "9k",
      cuisine : "Mughlai, North Indian, Chineese, Biryani, Sea Food",
      cost: 150,
      time: 30, 
  },
  {
      title: "Imperial Restaurant",
      img: "https://b.zmtcdn.com/data/pictures/9/97569/7d7ec4d6ed89d8b6db333cba89ce5e75_o2_featured_v2.jpg",
      rating : 4.4,
      reviews : "5k",
      cuisine : "Mughlai, Chineese, Biryani, Sea Food",
      cost: 150,
      time: 30, 
  },
  {
      title: "Karachi Bakery",
      img: "https://b.zmtcdn.com/data/pictures/chains/2/90862/b0c30147be48b48ef1dd66ef10cf5587_o2_featured_v2.jpg",
      rating : 4.2,
      reviews : "3k",
      cuisine :"Bakery, Desert, Fast Food",
      cost: 250,
      time: 25, 
  },
  {
      title: "Cream Stone",
      img: "https://b.zmtcdn.com/data/pictures/chains/6/90706/59496b1041e33cf5c30f70ae0cb4b07c_o2_featured_v2.png",
      rating : 4.4,
      reviews : "10.3k",
      cuisine : "Ice cream, Desserts",
      cost: 150,
      time: 34, 
  },
  {
      title: "McCafe by McDonald's",
      img: "https://b.zmtcdn.com/data/pictures/chains/8/19134998/28a36745029bf3c8391f8b6f13c5386b_o2_featured_v2.png",
      rating : 3.5,
      reviews : "5k",
      cuisine : "Coffe, Cafe, Beverages, Tea, Desserts",
      cost: 200,
      time: 35, 
  }
]

export default RestaurantCards
