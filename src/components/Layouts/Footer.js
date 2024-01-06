import React from "react";
import { makeStyles } from "@mui/styles";
import { IconButton, List, ListItem, Divider, Typography, Grid, Container, Stack, Box, Link } from "@mui/material";
import { NavLink as RouterLink } from "react-router-dom";
import { MAXWIDTH, PUBLIC_URL } from "../../constants";
import en from "../../sections/common/en.json";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 80,
  },
  logoImage: {
    height: "auto",
    width: "100%",
    maxWidth: "180px",
  },
  socialIcon: {
    color: "#fff",
  },
}));

const Footer = () => {
  const classes = useStyles();

  const { footer } = en;

  return (
    <div className={classes.root}>
      <Divider />

      <Container maxWidth="false" disableGutters sx={{ maxWidth: MAXWIDTH }}>
        <Grid container spacing={5} pt={1} pb={5} mt={2}>
          <Grid item md={6} lg={3}>
            <Box py={1}>
              <a href="/" title="SCIMICS">
                <img className={classes.logoImage} src={`${PUBLIC_URL}/static/icons/logo.svg`} alt="logo" />
              </a>
            </Box>

            <Stack direction="row" spacing={1.5} sx={{ mt: 3 }}>
              {footer.socialMedia.map((item, index) => (
                <Link key={index} className={classes.socialIcon} target="_blank">
                  <Box component="img" src={`${PUBLIC_URL}/static/icons/${item.name.toLowerCase()}.svg`} sx={{ width: 24 }} alt={item.alt} />
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid item md={6} lg={3}>
            <Typography variant="subtitle1" fontWeight="600" color="text.primary" sx={{ mb: 4 }}>
              {footer.solutions}
            </Typography>

            <List disablePadding>
              {footer.solutionsItems.map((item, index) => (
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
              {footer.explore}
            </Typography>

            <List disablePadding>
              {footer.exploreItems.map((item, index) => (
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
              {footer.company}
            </Typography>

            <List disablePadding>
              {footer.companyItems.map((item, index) => (
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
          {footer.footerItems.map((item, index) => (
            <React.Fragment key={index}>
              <Link underline="none" target="_blank">
                <Typography variant="subtitle1" fontWeight="500" color="text.primary">
                  {item.name}
                </Typography>
              </Link>

              {index < footer.footerItems.length - 1 && <Divider orientation="vertical" sx={{ borderWidth: 2, borderColor: "#D9D9D980", height: 36 }} />}
            </React.Fragment>
          ))}
        </Stack>

        <Typography variant="body1" color="white" textAlign="center" sx={{ mt: 5 }}>
          {footer.copyright}
        </Typography>
      </Box>
    </div>
  );
};

export default Footer;
