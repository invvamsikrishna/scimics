import React from "react";
import { Container, Typography, Box, Stack, Grid, Avatar } from "@mui/material";
import { PAGE_PADDING, PUBLIC_URL } from "../../constants";

const Certifications = () => {
  const items = [
    { image: `${PUBLIC_URL}/static/icons/js.svg` },
    { image: `${PUBLIC_URL}/static/icons/html.svg` },
    { image: `${PUBLIC_URL}/static/icons/css.svg` },
    { image: `${PUBLIC_URL}/static/icons/python.svg` },
    { image: `${PUBLIC_URL}/static/icons/c++.svg` },
    { image: `${PUBLIC_URL}/static/icons/go.svg` },
    { image: `${PUBLIC_URL}/static/icons/java.svg` },
  ];

  return (
    <Container maxWidth="false" disableGutters sx={{ padding: PAGE_PADDING, my: 2 }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <Typography mt={3} variant="h3" fontWeight="500" sx={{ mb: 1 }}>
            Comprehensive Certifications Under One Roof
          </Typography>

          <Container maxWidth="sm">
            <Typography variant="body2" fontWeight="normal" color="text.subtitle">
              Achieve Recognition: Dive into a curated selection from our extensive catalog of industry-leading certifications.
            </Typography>
          </Container>
        </Box>
      </Container>

      <Box p={5} />

      <Box px={10}>
        <Grid container px={10} justifyContent="space-around">
          {items.map((item, index) => (
            <Grid key={index} item xs={1}>
              <Box component="img" src={item.image} sx={{ width: "100%" }} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box p={8} />

      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <Avatar src={`${PUBLIC_URL}/static/icons/ceo.svg`} sx={{ width: 48, height: 48 }} />

          <Typography mt={3} variant="body1" fontWeight="normal" sx={{ mb: 1 }}>
            Invest in Your Talent. Gain the Skills Your Org Needs to Meet Business Goals and Innovate. Future-proof Your Corporate Workforce with Skill Development. Demo Udemy Business.
          </Typography>

          <Typography variant="body1" fontWeight="normal" color="text.subtitle">
            CEO, RUSA
          </Typography>
        </Box>
      </Container>
    </Container>
  );
};

export default Certifications;
