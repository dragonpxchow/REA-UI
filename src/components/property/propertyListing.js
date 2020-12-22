import React from "react";
import { useSelector } from "react-redux";
import { Grid, Typography, Tooltip } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import PropertyCard from "./propertyCard";
import useStyles from "../../styles/property/propertyListing";
import * as keyword from "../../common/constants";

const PropertyListing = ({ listType }) => {
  const classes = useStyles();

  const properties = useSelector((state) => {
    return listType === keyword.results
      ? state.properties.results
      : state.properties.saved;
  });

  return !properties.length ? (
    <Tooltip
      title="Please add property from the property list"
      arrow
      color="secondary"
    >
      <AddShoppingCartIcon className={classes.addShoppingCartIcon} />
    </Tooltip>
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      direction="column"
      alignItems="center"
      spacing={3}
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
