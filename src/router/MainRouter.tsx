import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowseCocktails, Home } from "../views";
import { Navigation } from "../components";

const Router = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<BrowseCocktails />}>
          <Route path="drink=:drinkTerm" element={<BrowseCocktails />} />
          <Route path="letter=:drinkLetter" element={<BrowseCocktails />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
