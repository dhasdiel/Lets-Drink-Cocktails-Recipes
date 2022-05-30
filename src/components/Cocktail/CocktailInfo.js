import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
} from "@mui/material";

const CocktailInfo = () => {
  const drink = useLocation().state;

  const list = [];
  for (let i = 0; i < 15; i++) {
    if (drink[`strIngredient${i + 1}`] || drink[`strMeasure${i + 1}`]) {
      list.push({
        ingredient: drink[`strIngredient${i + 1}`],
        measure: drink[`strMeasure${i + 1}`],
        key: i,
      });
    }
  }

  return (
    <Grid
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ py: 8, margin: "auto" }}
      maxWidth="md"
    >
      <Card
        key={drink.idDrink}
        sx={{ maxWidth: 500, backgroundColor: "secondary.main" }}
      >
        <CardMedia
          component="img"
          height="256"
          image={drink.strDrinkThumb}
          alt={drink.strDrink}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {drink.strDrink}
          </Typography>
          <Table sx={{ minWidth: 230 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Ingredient</b>
                </TableCell>
                <TableCell>
                  <b>Measure</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((item) => (
                <TableRow key={item.key}>
                  <TableCell>{item.ingredient}</TableCell>
                  <TableCell>{item.measure}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Typography variant="body2" color="text.secondary" sx={{ py: 3 }}>
            {drink.strInstructions}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" sx={{ color: "text.primary" }}>
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              Back
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CocktailInfo;
