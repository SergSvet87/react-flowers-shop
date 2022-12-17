import React from "react";
import { Catalog } from "../catalog-flowers/catalog";
import { FlowerInfo } from "./flower-info";
import { Bar } from "../ui/bar/bar";

export const Shop = () => {
  return (
    <section
      id="shop"
      className="shop"
    >
      <Bar />
      <Catalog />
      <FlowerInfo />
    </section>
  );
};
