import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
  },
  heading: {
    color: "black",
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: "center",
  },
  button: {
    fontSize: 12,
    "&:hover": {
      background: "blue",
    },
  },
  addShoppingCartIcon: {
    fontSize: 50,
  },
}));
