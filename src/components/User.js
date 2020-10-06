import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import ProgressBar from "./ProgressBar";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  container: {
    maxWidth: 700,
  },
  grid: {
    border: "1 red",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
        justify="center"
        className={classes.container}
      >
        {" "}
        <Grid item xs={2} md={2} className={classes.grid}>
          <Avatar alt="Remy Sharp" src="../images/avatar/1.png" />
        </Grid>
        <Grid item xs={10} md={6}>
          <Breadcrumbs aria-label="breadcrumb" variant="h6">
            <Link color="inherit" href="/">
              <Typography gutterBottom variant="h6">
                John Doe <Chip color="primary" size="small" label="Pro" />
              </Typography>
            </Link>
            <Typography gutterBottom variant="h6">
              <Link color="inherit" href="/">
                Core
              </Link>
            </Typography>
          </Breadcrumbs>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid item xs={12} md={12}>
            <Paper className={classes.paper}>xs=12 md=6</Paper>
          </Grid>
          <Grid item xs={12} md={12}>
            <Paper className={classes.paper}>xs=12 md=6</Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
