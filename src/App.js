import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";

import UpAppBar from "./components/UI/UpAppBar";
import HeroCard from "./components/UI/HeroCard";
import Cocktails from "./components/Cocktail/Cocktails";
import CocktailInfo from "./components/Cocktail/CocktailInfo";
import Footer from "./components/UI/Footer";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <UpAppBar />
        <Routes>
          <Route path="/" element={<HeroCard />} />
          <Route path="/cocktail" element={<Cocktails />} />
          <Route path="/cocktail/:strDrink" element={<CocktailInfo />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
