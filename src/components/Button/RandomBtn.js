import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

const RandomBtn = () => {
  const nav = useNavigate();

  const randomChangeHandler = () => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then(function (response) {
        let drink = response.data.drinks[0];
        nav(`/cocktail/${drink.strDrink}`, {
          state: drink,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Button
        variant="contained"
        endIcon={<QuestionMarkIcon />}
        sx={{ backgroundColor: "white" }}
        onClick={randomChangeHandler}
      >
        random
      </Button>
    </>
  );
};

export default RandomBtn;
