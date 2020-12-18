import React from "react";
import PropertyCard from "./propertyCard";
//import { Grid, CircularProgress } from "@material-ui/core";
import useStyles from "../../styles/property/propertyListing";
//import useStyles from "../../styles/app.js";

const PropertyListing = () => {
  const classes = useStyles();
  return (
    <>
      <h1>Results</h1>
      <PropertyCard />
      <PropertyCard />
      <PropertyCard />
    </>
  );
};

export default PropertyListing;
