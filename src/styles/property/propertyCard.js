import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "60%",
  },

  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
  },

  title: {
    padding: "0 16px",
  },

  small: {
    width: "auto",
    height: theme.spacing(5),
  },

  popover: {
    pointerEvents: "none",
  },

  paper: {
    padding: theme.spacing(1),
    borderRadius: "15px",
    width: "auto",
  },
}));
