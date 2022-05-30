import * as React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const CocktailItem = (props) => {
  const drink = props.drink;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        key={drink.idDrink}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "secondary.main",
        }}
      >
        <CardMedia
          component="img"
          alt={drink.strDrink}
          height="140"
          image={drink.strDrinkThumb}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {drink.strDrink}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Category: {drink.strCategory}
            <br /> Glass: {drink.strGlass}
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="small">Share</Button> */}
          <Button size="small" sx={{ color: "text.primary" }}>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`/cocktail/${drink.strDrink}`}
              state={drink}
            >
              Show Instructions
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CocktailItem;
