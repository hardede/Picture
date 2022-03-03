import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  Paper,
  TextField,
  Toolbar,
  Typography
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/core/Menu";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FolderIcon from "@mui/icons-material/Folder";
import LayerIcon from "@mui/icons-material/Layers";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import RestoreIcon from "@mui/icons-material/Restore";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  mainFeaturesPost: {
    position: "relative",
    color: theme.palette.common.white,
    paddingBottom: theme.spacing(10),
    marginBottom: theme.spacing(4),

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  mainFeaturesPostContent: {
    position: "relative",
    padding: theme.spacing(6),
    marginTop: theme.spacing(9),
  },
  mainContent: {
    marginBottom: theme.spacing(4),
  },
  overlay: {
    position: "abosolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundOverlay: "rgba(0,0,0, 0.3)",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
  cardGrid: {
    marginTop: theme.spacing(4),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <AppBar position="fixed">
        <Container fixed>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Hardede
            </Typography>
            <Box mr={3}>
              <Button
                color="inherit"
                variant="outlined"
                onClick={handleClickOpen}
              >
                Log in
              </Button>

              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
              >
                <DialogTitle id="form-dialog-title">Log in</DialogTitle>
                <DialogContent>
                  <DialogContentText>Log in to see videos</DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Adress"
                    type="email"
                    fullWidth
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="password"
                    label="Password"
                    type="password"
                    fullWidth
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={handleClose} color="primary">
                    Log in
                  </Button>
                </DialogActions>
              </Dialog>
            </Box>
            <Button color="secondary" variant="contained">
              Sign up
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      <main>
        <Paper
          className={classes.mainFeaturesPost}
          style={{
            backgroundImage: `url(https://source.unsplash.com/random)`,
          }}
        >
          <Container fixed>
            <div className={classes.overlay}></div>
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturesPostContent}></div>
                <Typography
                  component="h1"
                  variant="h3"
                  color="inherit"
                  gutterBottom
                >
                  Hardede
                </Typography>
                <Typography varint="h5" color="inherit" paragraph>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
                  autem et omnis? Debitis architecto quam repellat ad ipsa!
                  Earum qui ab ea, a natus possimus!
                </Typography>
                <Button variant="contained" color="secondary">
                  Learn more
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Paper>
        <div className={classes.mainContent}>
          <Container maxWidth="md">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Hardede
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              nam maxime ut, aperiam assumenda aliquid fugit. Vel sunt ratione
              odit? Optio rem dolorem voluptatibus vel, consequuntur, ducimus
              iste perferendis modi asperiores iure dignissimos, unde sequi?
            </Typography>
            <div className={classes.mainContent}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Start Now
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Learn more
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  ></CardMedia>
                  <CardContent className={classes.CardContent}>
                    <Typography variant="h5" gutterBottom>
                      Blog post
                    </Typography>
                    <Typography>
                      Blog post. Hardede Hardede Hardede Hardede Hardede
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                    <LayerIcon />
                    <PlayCircleFilledIcon />
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <BottomNavigation
          value={value}
          onChange={handleChange}
          className={classes.root}
        >
          <BottomNavigationAction
            label="Recents"
            value="recents"
            icon={<RestoreIcon />}
          />
          <BottomNavigationAction
            label="Favorites"
            value="favorites"
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction
            label="Nearby"
            value="nearby"
            icon={<LocationOnIcon />}
          />
          <BottomNavigationAction
            label="Folder"
            value="folder"
            icon={<FolderIcon />}
          />
        </BottomNavigation>
        <Typography
          align="center"
          color="textSecondary"
          component="p"
          variant="subtitle1"
        >
          Hardede: React js Material UI site
        </Typography>
      </footer>
    </>
  );
}

export default App;
