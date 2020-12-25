import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Avatar,
  Popover,
} from "@material-ui/core";
import * as keyword from "../../common/constants";
import { addProperty, removeProperty } from "../../redux/actions/properties";
import useStyles from "../../styles/property/propertyCard";

const PropertyCard = ({ property, listType }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    // show popover on top of card when hovering over
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    // hide popover when leaving the card
    setAnchorEl(null);
  };

  // if true, show otheriwse hide popover
  const open = Boolean(anchorEl);

  return (
    <Card
      className={classes.card}
      aria-owns={open ? "mouse-over-popover" : undefined}
      aria-haspopup="true"
      onMouseOver={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
      // on click, dispatch adding or removing property action creator depending on listType
      onClick={() => {
        if (listType === keyword.results) {
          dispatch(addProperty(property));
        } else {
          dispatch(removeProperty(property));
        }
        handlePopoverClose();
      }}
    >
      <CardHeader
        // display real estate logo with its background color
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
        // diplay image of property
        className={classes.media}
        image={property.mainImage}
      ></CardMedia>

      <CardContent>
        <Typography className={classes.title} variant="h5" gutterBottom>
          Price: {property.price}
        </Typography>
      </CardContent>
      <Popover
        // clickable popover to dispatch adding or removing property
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography>
          {listType === keyword.results
            ? keyword.addProperty
            : keyword.removeProperty}
        </Typography>
      </Popover>
    </Card>
  );
};

export default PropertyCard;
