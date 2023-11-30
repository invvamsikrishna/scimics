import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Typography, Box, Stack, Grid, Card } from "@mui/material";
import { PAGE_PADDING, PUBLIC_URL } from "../../constants";

const useStyles = makeStyles((theme) => ({
  elearningBlock1: {
    "&:before": {
      bottom: -80,
      position: "absolute",
      left: "25%",
      right: "50%",
      height: 80,
      zIndex: 1,
      content: "' '",
      borderRight: "1px solid #55555560",
      borderBottom: "1px solid #55555560",
      borderBottomRightRadius: "12px",
    },
  },
  elearningBlock2: {
    "&:before": {
      position: "absolute",
      top: -81,
      left: 0,
      right: "75%",
      height: 350,
      zIndex: 1,
      content: "' '",
      borderTop: "1px solid #55555560",
      borderLeft: "1px solid #55555560",
      borderBottom: "1px solid #55555560",
      borderTopLeftRadius: "12px",
    },
  },
}));

const ELearning = () => {
  const classes = useStyles();

  const items = [
    { name: "Projects", desc: "Every Project is an Opportunity to Build and Learn.", image: `${PUBLIC_URL}/static/icons/projects.svg` },
    { name: "Roadmaps", desc: "AI tailored course plans for your focused learning experience", image: `${PUBLIC_URL}/static/icons/roadmap.svg` },
    { name: "Coding Env", desc: "Learn coding seamlessly in our Cloud-Based Environment.", image: `${PUBLIC_URL}/static/icons/coding.svg` },
    { name: "AI Assistant", desc: "Powerful AI that helps you overcome any coding challenge.", image: `${PUBLIC_URL}/static/icons/ai.svg` },
  ];

  return (
    <Container maxWidth="false" disableGutters sx={{ padding: PAGE_PADDING, my: 10 }}>
      <Box sx={{ position: "relative" }}>
        <Box className={classes.elearningBlock1} />

        <Box component="img" src={`${PUBLIC_URL}/static/images/elearning.svg`} sx={{ width: "100%" }} />
      </Box>

      <Box sx={{ height: 160 }} />

      <Box sx={{ position: "relative" }}>
        <Box className={classes.elearningBlock2} />

        <Stack direction="row" spacing={3} sx={{ transform: "translateX(-40px)", position: "relative", zIndex: 2 }}>
          <Box sx={{ height: 80, width: 80, backgroundImage: "linear-gradient(#5C67C7, #23329C)", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "6px" }}>
            <Box component="img" src={`${PUBLIC_URL}/static/icons/education.svg`} sx={{ width: 60, height: 60 }} />
          </Box>

          <Box>
            <Typography variant="h3" gutterBottom>
              E-Learning
            </Typography>
            <Typography variant="body2" color="text.subtitle">
              The Most Complete E-learning Platform Available
            </Typography>
          </Box>
        </Stack>

        <Box sx={{ height: 80 }} />

        <Box px={10}>
          <Box py={3} px={10} sx={{ bgcolor: "background.default", border: "1px solid #55555550", borderRadius: 4, position: "relative", zIndex: 2 }}>
            <Grid container spacing={2}>
              {items.map((item, index) => (
                <Grid key={index} item xs={12} sm={6} md={3}>
                  <Card sx={{ p: 3, boxShadow: 0 }}>
                    <Stack direction="row" spacing={1} sx={{ mb: 3, alignItems: "center" }}>
                      <Box component="img" src={item.image} sx={{ width: 20, height: 20, color: "#CED765" }} />

                      <Typography variant="h6" fontWeight="500" color="#CED765">
                        {item.name}
                      </Typography>
                    </Stack>

                    <Typography variant="subtitle2" fontWeight="normal">
                      {item.desc}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Box p={2} />

            <Box component="img" src={`${PUBLIC_URL}/static/images/elearning2.svg`} sx={{ width: "100%" }} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ELearning;
