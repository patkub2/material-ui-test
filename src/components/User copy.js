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
    maxWidth: "100%",
    display: "flex",
    justifyContent: "center",
  },
  maingrid: {
    maxWidth: "700px",
    margin: "auto",
  },

  paper: {
    padding: theme.spacing(2),

    margin: "auto",
    maxWidth: "80%",
  },
  image: {
    width: 50,
    height: 50,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1} className={classes.maingrid}>
        <Grid item>
          <ButtonBase className={classes.image}>
            <Avatar alt="Remy Sharp" src="../images/avatar/1.png" />
          </ButtonBase>
        </Grid>
        <Grid item xs={10} md sm={10} container spacing={2}>
          <Grid item container direction="column" spacing={2}>
            <Grid>
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
              <Typography variant="body2" gutterBottom>
                Set up your VoidChurch presence
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid md={6} sm={5} xs={10} className={classes.paper}>
          <Grid item md={12} xs sm>
            <ProgressBar />
          </Grid>
          <Grid item md xs>
            <Typography variant="caption">
              Minutes used this billing cycle
            </Typography>
          </Grid>
          <Grid item md={2} xs={12}>
            <Typography variant="caption" align="right">
              50/100
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
