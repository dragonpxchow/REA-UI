import React from "react";
import { useDispatch } from "react-redux";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Avatar,
} from "@material-ui/core";
import useStyles from "../../styles/property/propertyCard";

const PropertyCard = ({ property }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<Avatar alt="Logo" src={property.agency.logo} />}
      ></CardHeader>

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
