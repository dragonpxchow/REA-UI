import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Avatar,
  Chip,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
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
      <CardMedia
        className={classes.media}
        image={property.mainImage}
      ></CardMedia>

      {show && (
        <Chip
          //variant="outlined"
          color="primary"
          avatar={
            <Avatar>
              {listType === keyword.results ? <AddIcon /> : <DeleteIcon />}
            </Avatar>
          }
          label={
            listType === keyword.results
              ? keyword.addProperty
              : keyword.removeProperty
          }
          onClick={() => {
            if (listType === keyword.results) {
              dispatch(addProperty(property));
            } else {
              dispatch(removeProperty(property));
            }
          }}
        ></Chip>
      )}
      <CardContent>
        <Typography className={classes.title} variant="h5" gutterBottom>
          Price: {property.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
