import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress, Typography } from "@material-ui/core";
import PropertyCard from "./propertyCard";
import useStyles from "../../styles/property/propertyListing";
import * as keyword from "../../common/constants";

const PropertyListing = ({ listType }) => {
  const classes = useStyles();

  //const { results, saved } = useSelector((state) => state.properties);
  const properties = useSelector((state) => {
    return listType === keyword.results
      ? state.properties.results
      : state.properties.saved;
  });

  console.log(listType + " Properties >>>", properties);

  return !properties.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      alignItems="center"
      direction="column"
      container
      spacing={6}
    >
      <Typography className={classes.heading} variant="h5" alig="center">
        {listType === keyword.saved ? keyword.savedProperty : listType}
      </Typography>
      {properties.map((property) => (
        <Grid key={property.id} item xm={12} sm={6}>
          <PropertyCard property={property} listType={listType}></PropertyCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default PropertyListing;
