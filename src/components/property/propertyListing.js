import React from "react";
import { useSelector } from "react-redux";
import PropertyCard from "./propertyCard";
import { Grid, CircularProgress } from "@material-ui/core";
import useStyles from "../../styles/property/propertyListing";

const PropertyListing = ({ listType }) => {
  const classes = useStyles();

  //const { results, saved } = useSelector((state) => state.properties);
  const properties = useSelector((state) => {
    return listType === "results"
      ? state.properties.results
      : state.properties.saved;
  });

  console.log(listType + " Properties >>>", properties);

  return !properties.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      alignItems="stretch"
      container
      spacing={3}
    >
      {properties.map((property) => (
        <Grid key={property.id} item xm={12} sm={6}>
          <PropertyCard property={property}></PropertyCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default PropertyListing;
