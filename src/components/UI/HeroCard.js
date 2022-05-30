import * as React from "react";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";

const HeroCard = () => {
  return (
    <Grid
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ py: 8, margin: "auto" }}
      maxWidth="md"
    >
      <Card sx={{ maxWidth: 600 }}>
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1605270012917-bf157c5a9541?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
          alt="cocktails"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            What Is Cocktail ?
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A cocktail is an alcoholic mixed drink. Most commonly, cocktails are
            either a combination of spirits, or one or more spirits mixed with
            other ingredients such as tonic water, fruit juice, flavored syrup,
            or cream. Cocktails vary widely across regions of the world, and
            many websites publish both original recipes and their own
            interpretations of older and more famous cocktails.(wiki)
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default HeroCard;
