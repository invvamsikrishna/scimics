import React from "react";
import { makeStyles } from "@mui/styles";
import { IconButton, List, ListItem, Divider, Typography, Grid, Container, Stack, TextField, Button, Box, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YoutubeIcon from "@mui/icons-material/YouTube";
import LocationIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import { NavLink as RouterLink } from "react-router-dom";
import { PUBLIC_URL } from "../../constants";

const useStyles = makeStyles((theme) => ({
  root: {
    // background: theme.palette.primary.dark,
    marginTop: 80,
  },
  logoImage: {
    height: "auto",
    width: "100%",
    maxWidth: "180px",
  },
  socialIcon: {
    // padding: 8,
    color: "#fff",
    // border: "1px solid white",
    // borderRadius: "0px",
    // "&:hover": {
    //   background: "white",
    //   color: theme.palette.primary.main,
    // },
  },
}));

const Footer = () => {
  const classes = useStyles();

  const socialItems = [
    { image: `${PUBLIC_URL}/static/icons/youtube.svg` },
    { image: `${PUBLIC_URL}/static/icons/linkedin.svg` },
    { image: `${PUBLIC_URL}/static/icons/facebook.svg` },
    { image: `${PUBLIC_URL}/static/icons/twitter.svg` },
    { image: `${PUBLIC_URL}/static/icons/instagram.svg` },
    { image: `${PUBLIC_URL}/static/icons/quora.svg` },
  ];

  const solutionsItems = [{ name: "Career Paths" }, { name: "7 Parameters test" }, { name: "Mocx" }, { name: "Resume Builder" }, { name: "Certifications" }, { name: "Startup Support" }];

  const exploreItems = [{ name: "Front end development" }, { name: "Backend development" }, { name: "Full stack" }, { name: "DSA" }, { name: "AI & ML" }, { name: "Startup Support" }];

  const companyItems = [{ name: "About" }, { name: "Careers" }, { name: "Support" }, { name: "Reviews" }, { name: "Join discard" }, { name: "Terms  of use" }, { name: "Privacy policy" }, { name: "Cookie policy" }];

  const footerItems = [{ name: "Tutorials" }, { name: "Blog's" }, { name: "Articles" }, { name: "Videos" }];

  return (
    <div className={classes.root}>
      <Divider />

      <Container maxWidth="false" disableGutters sx={{ px: { xs: 4, md: 12 } }}>
        <Grid container spacing={5} pt={1} pb={5} mt={2}>
          <Grid item md={6} lg={3}>
            <Box py={1}>
              <a href="/" title="SCIMICS">
                <img className={classes.logoImage} src={`${PUBLIC_URL}/static/icons/logo.svg`} alt="logo" />
              </a>
            </Box>

            <Stack direction="row" spacing={1.5} sx={{ mt: 3 }}>
              {socialItems.map((item, index) => (
                <Link key={index} className={classes.socialIcon} target="_blank">
                  <Box component="img" src={item.image} sx={{ width: 24 }} />
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid item md={6} lg={3}>
            <Typography variant="subtitle1" fontWeight="600" color="text.primary" sx={{ mb: 4 }}>
              Solutions
            </Typography>

            <List disablePadding>
              {solutionsItems.map((item, index) => (
                <ListItem key={index} component={RouterLink} to="/" disableGutters>
                  <Typography variant="subtitle2" fontWeight="normal" color="text.secondary">
                    {item.name}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid item md={6} lg={3}>
            <Typography variant="subtitle1" fontWeight="600" color="text.primary" sx={{ mb: 4 }}>
              Explore
            </Typography>

            <List disablePadding>
              {exploreItems.map((item, index) => (
                <ListItem key={index} component={RouterLink} to="/" disableGutters>
                  <Typography variant="subtitle2" fontWeight="normal" color="text.secondary">
                    {item.name}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid item md={6} lg={3}>
            <Typography variant="subtitle1" fontWeight="600" color="text.primary" sx={{ mb: 4 }}>
              Company
            </Typography>

            <List disablePadding>
              {companyItems.map((item, index) => (
                <ListItem key={index} component={RouterLink} to="/" disableGutters>
                  <Typography variant="subtitle2" fontWeight="normal" color="text.secondary">
                    {item.name}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>

      <Divider />

      <Box p={5}>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={{ xs: 2, md: 6 }}>
          {footerItems.map((item, index) => (
            <React.Fragment key={index}>
              <Link underline="none" target="_blank">
                <Typography variant="subtitle1" fontWeight="500" color="text.primary">
                  {item.name}
                </Typography>
              </Link>

              {index < footerItems.length - 1 && <Divider orientation="vertical" sx={{ borderWidth: 2, borderColor: "#D9D9D980", height: 36 }} />}
            </React.Fragment>
          ))}
        </Stack>

        <Typography variant="body1" color="white" textAlign="center" sx={{ mt: 5 }}>
          Copyright@2023, scimics
        </Typography>
      </Box>
    </div>
  );
};

export default Footer;
