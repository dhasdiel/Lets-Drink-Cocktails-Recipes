import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const SearchBtn = () => {
  const nav = useNavigate();
  const [enteredSearch, setEnteredSearch] = useState("");

  const searchChangeHandler = (event) => {
    setEnteredSearch(event.target.value);
  };

  const searchHandler = () => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php", {
        params: {
          s: enteredSearch,
        },
      })
      .then(function (response) {
        let drinks = response.data.drinks;
        setEnteredSearch("");
        nav("/cocktail", { state: drinks });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Search onClick={searchHandler}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        value={enteredSearch}
        onChange={searchChangeHandler}
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
};

export default SearchBtn;
