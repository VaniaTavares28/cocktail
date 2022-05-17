import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowseCocktails, Home } from "../views";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<BrowseCocktails />}>
        <Route path=":drinkTerm" element={<BrowseCocktails />} />
        <Route path=":drinkLetter" element={<BrowseCocktails />} />
      </Route>
    </Routes>
  );
};

export default Router;
