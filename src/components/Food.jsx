import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import petFood from "../assets/petfood.png";
const Food = ({ id, name, description, price }) => {
  const [foodId, setFoodId] = useState(id);
  const navigate = useNavigate();
  const handleFoodDetails = () => {
    navigate(`/food/${foodId}/details`);
  };
  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const newFoodItem = { id: foodId, name, description, price };
    cart.push(newFoodItem);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={petFood} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Price: {price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleFoodDetails} size="small">
            Details
          </Button>
          <Button onClick={handleAddToCart} size="small">
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Food;
