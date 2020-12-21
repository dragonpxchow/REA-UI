import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import PropertyListing from "./components/property/propertyListing";
import { getProperties } from "./redux/actions/properties";
import * as keyword from "./common/constants";
import useStyles from "./styles/app.js";

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProperties());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" alig="center">
          REA Properties
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            className={classes.mainContainer}
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={6}>
              <PropertyListing listType={keyword.results} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <PropertyListing listType={keyword.saved} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
