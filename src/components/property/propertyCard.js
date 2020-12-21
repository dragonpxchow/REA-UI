import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Avatar,
  Button,
} from "@material-ui/core";
import * as keyword from "../../common/constants";
import { addProperty, removeProperty } from "../../redux/actions/properties";
import useStyles from "../../styles/property/propertyCard";

const PropertyCard = ({ property, listType }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  return (
    <Card
      className={classes.card}
      onMouseOver={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <CardHeader
        style={{ backgroundColor: property.agency.brandingColors.primary }}
        avatar={
          <Avatar
            alt="Logo"
            src={property.agency.logo}
            className={classes.small}
            variant="rounded"
          />
        }
      ></CardHeader>
      {show && (
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => {
            if (listType === keyword.results) {
              dispatch(addProperty(property));
            } else {
              dispatch(removeProperty(property));
            }
          }}
        >
          {listType === keyword.results
            ? keyword.addProperty
            : keyword.removeProperty}
        </Button>
      )}
      <CardMedia
        className={classes.media}
        image={property.mainImage}
      ></CardMedia>
      <CardContent>
        <Typography className={classes.title} variant="h5" gutterBottom>
          Price: {property.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
