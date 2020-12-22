import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "60%",
    // backgroundColor: "rgba(0, 0, 0, 0.5)",
    // backgroundBlendMode: "darken",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
  },
  grid: {
    display: "flex",
  },

  title: {
    padding: "0 16px",
  },

  small: {
    width: "auto",
    height: theme.spacing(5),
  },
}));
