import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import petFood from "../assets/petfood.png";

const rows = [
  { id: 1, name: "Green Iguana", description: "Soft, crunchy", price: 2.5 },
  { id: 2, name: "Blue Tiger", description: "Slippery, sour", price: 3 },
  { id: 3, name: "Yellow Buffalo", description: "Crunchy, mild", price: 2 },
  { id: 4, name: "Red Rhino", description: "Slippery, sweet", price: 3.5 },
  { id: 5, name: "Purple Leopard", description: "Crunchy, salty", price: 2.5 },
  { id: 6, name: "White Lion", description: "Slippery, sour", price: 3 },
];
const FoodDetailPage = () => {
  const [foodItem, setFoodItem] = React.useState(null);
  let param = useParams();
  useEffect(() => {
    const food = rows.find((food) => food.id === parseInt(param.foodId));
    setFoodItem(food);
    console.log("Food:", food);
  }, []);
  return (
    <div>
      {foodItem && (
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={foodItem.name}
            subheader={foodItem.price}
          />
          <CardMedia
            component="img"
            height="194"
            image={petFood}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {foodItem.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      )}
      ;
    </div>
  );
};

export default FoodDetailPage;
