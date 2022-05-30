import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Grid, Typography } from "@mui/material";

import CocktailItem from "./CocktailItem";

const Cocktails = () => {
  const cocktails = useLocation().state;

  if (!Array.isArray(cocktails)) {
    return (
      <Grid
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ py: 8, margin: "auto" }}
        maxWidth="md"
      >
        <Typography variant="h4">Found no cocktails</Typography>
      </Grid>
    );
  }

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {cocktails.map((cocktail) => (
          <CocktailItem key={cocktail.idDrink} drink={cocktail} />
        ))}
      </Grid>
    </Container>
  );
};

export default Cocktails;
