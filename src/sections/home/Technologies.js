import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Typography, Box, Stack, Grid } from "@mui/material";
import { PAGE_PADDING, PUBLIC_URL } from "../../constants";
import CustomButton from "../../components/CustomButton";

const useStyles = makeStyles((theme) => ({
  technologyBlock1: {
    "&:before": {
      position: "absolute",
      top: 60,
      left: "50%",
      transform: "translateX(-72px)",
      height: 80,
      width: 144,
      zIndex: 1,
      content: "' '",
      borderLeft: "1px solid #55555560",
      borderRight: "1px solid #55555560",
      borderBottom: "1px solid #55555560",
      borderBottomLeftRadius: "12px",
      borderBottomRightRadius: "12px",
    },
  },
  technologyBlock2: {
    "&:before": {
      position: "absolute",
      top: 140,
      left: "50%",
      height: 40,
      width: 144,
      zIndex: 1,
      content: "' '",
      borderLeft: "1px solid #55555560",
    },
  },
  technologyBlock3: {
    "&:before": {
      position: "absolute",
      top: 80,
      left: "50%",
      height: 40,
      width: 144,
      zIndex: 1,
      content: "' '",
      borderLeft: "1px solid #55555560",
    },
  },
}));

const Technologies = () => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="false" disableGutters sx={{ padding: PAGE_PADDING, mt: 20 }}>
        <Box sx={{ position: "relative" }}>
          <Box className={classes.technologyBlock1} />
          <Box className={classes.technologyBlock2} />

          <Stack direction="row" spacing={8} justifyContent="center" sx={{ position: "relative", zIndex: 2 }}>
            <Box sx={{ height: 80, width: 80, backgroundImage: "linear-gradient(#5C67C7, #23329C)", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "6px" }}>
              <Box component="img" src={`${PUBLIC_URL}/static/icons/ai1.svg`} sx={{ width: 50, height: 50 }} />
            </Box>

            <Box sx={{ height: 80, width: 80, backgroundImage: "linear-gradient(#5C67C7, #23329C)", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "6px" }}>
              <Box component="img" src={`${PUBLIC_URL}/static/icons/ai2.svg`} sx={{ width: 50, height: 50 }} />
            </Box>
          </Stack>
        </Box>

        <Box sx={{ height: 120 }} />

        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h3" gutterBottom>
            AI resume builder
          </Typography>

          <Typography variant="body2" color="text.subtitle">
            The Most Efficient AI Resume Creator Online
          </Typography>
        </Box>

        <Box p={6} />

        <Box component="img" src={`${PUBLIC_URL}/static/images/elearning2.svg`} sx={{ width: "100%" }} />
      </Container>

      <Container maxWidth="false" disableGutters sx={{ padding: PAGE_PADDING, mt: 24 }}>
        <Box sx={{ position: "relative" }}>
          <Box className={classes.technologyBlock3} />

          <Stack direction="row" justifyContent="center" sx={{ position: "relative", zIndex: 2 }}>
            <Box sx={{ height: 80, width: 80, backgroundImage: "linear-gradient(#5C67C7, #23329C)", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "6px" }}>
              <Box component="img" src={`${PUBLIC_URL}/static/icons/mock.svg`} sx={{ width: 50, height: 50 }} />
            </Box>
          </Stack>
        </Box>

        <Box p={4} />

        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h3" gutterBottom>
            Mock Interview
          </Typography>

          <Typography variant="body2" color="text.subtitle">
            The meaning of a mock interview is self-explanatory
          </Typography>
        </Box>

        <Box p={3} />

        <Box component="img" src={`${PUBLIC_URL}/static/images/mock.svg`} sx={{ width: "100%" }} />
      </Container>

      <Container maxWidth="xs" disableGutters sx={{ mt: 20, mb: 20 }}>
        <Stack direction="row" justifyContent="center">
          <Box sx={{ height: 80, width: 80, backgroundImage: "linear-gradient(#5C67C7, #23329C)", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "6px" }}>
            <Box component="img" src={`${PUBLIC_URL}/static/icons/future.svg`} sx={{ width: 50, height: 50 }} />
          </Box>
        </Stack>

        <Box p={2} />

        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h3" gutterBottom>
            Built for your future.
          </Typography>

          <Typography variant="body2" color="text.subtitle">
            Experience the most enjoyable, powerful way for you to learn and transform your career.
          </Typography>

          <Box p={2} />

          <CustomButton title="Request Early Access" />
        </Box>
      </Container>
    </>
  );
};

export default Technologies;
