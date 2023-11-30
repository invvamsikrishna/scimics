import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Typography, Box, Stack, Grid, Avatar } from "@mui/material";
import { PAGE_PADDING, PUBLIC_URL } from "../../constants";

const useStyles = makeStyles((theme) => ({
  backgroundStrip: { height: "60px", backgroundColor: "#131315", marginTop: 80, marginBottom: 40, display: "flex", justifyContent: "center", alignItems: "center", borderBottom: "1px solid #222326", position: "relative" },
  subStrip: { height: "59px", backgroundColor: "#131315", display: "flex", justifyContent: "center", alignItems: "center", position: "relative", zIndex: 2 },
  parameterBlock1: {
    "&:before": {
      position: "absolute",
      top: -40,
      left: "50%",
      right: 280,
      height: 104,
      zIndex: 1,
      content: "' '",
      borderLeft: "1px solid #55555560",
      borderBottom: "1px solid #55555560",
      borderBottomLeftRadius: "12px",
    },
  },
  parameterBlock2: {
    "&:before": {
      position: "absolute",
      top: 64,
      right: 80,
      height: 300,
      width: 200,
      zIndex: 1,
      content: "' '",
      borderTop: "1px solid #55555560",
      borderRight: "1px solid #55555560",
      borderBottom: "1px solid #55555560",
      borderTopRightRadius: "12px",
      borderBottomRightRadius: "12px",
    },
  },
  parameterBlock3: {
    "&:before": {
      position: "absolute",
      top: -95,
      left: 400,
      right: 400,
      height: 130,
      zIndex: 1,
      content: "' '",
      borderTop: "1px solid #55555560",
      borderLeft: "1px solid #55555560",
      borderTopLeftRadius: "12px",
    },
  },
}));

const Parameters = () => {
  const classes = useStyles();

  const scrollItems = [
    { name: "Cognitive Abilities" },
    { name: "Communication Skills " },
    { name: "Technical Proficiency" },
    { name: "Interpersonal and Teamwork Skills" },
    { name: "Interpersonal and Teamwork Skills" },
    { name: "Cognitive Abilities" },
    { name: "Communication Skills " },
    { name: "Technical Proficiency" },
    { name: "Interpersonal and Teamwork Skills" },
    { name: "Interpersonal and Teamwork Skills" },
  ];

  const items = [
    { name: "Parent and sub-issues.", desc: "Break larger tasks into smaller issues." },
    { name: "Automated backlog.", desc: "Linear will auto-close and auto-archive issues." },
    { name: "Custom workflows.", desc: "Define unique issue states for each team." },
    { name: "Filters and custom views.", desc: "See only what’s relevant for you." },
    { name: "Discussion.", desc: "Collaborate on issues without losing context." },
    { name: "Issue templates.", desc: "Guide your team to write effective issues." },
  ];

  return (
    <>
      <Container maxWidth="false" disableGutters sx={{ padding: PAGE_PADDING, mt: 2 }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Avatar src={`${PUBLIC_URL}/static/icons/ceo.svg`} sx={{ width: 48, height: 48 }} />

            <Typography mt={3} variant="body1" fontWeight="normal" sx={{ mb: 2 }}>
              Invest in Your Talent. Gain the Skills Your Org Needs to Meet Business Goals and Innovate. Future-proof Your Corporate Workforce with Skill Development. Demo Udemy Business.
            </Typography>

            <Typography variant="body1" fontWeight="normal" color="text.subtitle">
              CEO, RUSA
            </Typography>
          </Box>
        </Container>

        <Box sx={{ height: 80 }} />

        <Box sx={{ position: "relative" }}>
          <Box className={classes.parameterBlock1} />
          <Box className={classes.parameterBlock2} />

          <Box px={10} sx={{ position: "relative", zIndex: 2 }}>
            <Grid container spacing={3} px={10} justifyContent="end">
              <Grid item xs={12} md={6}>
                <Stack alignItems="end" textAlign="end">
                  <Box pr={10}>
                    <Box sx={{ height: 80, width: 80, backgroundImage: "linear-gradient(#5C67C7, #23329C)", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "6px" }}>
                      <Box component="img" src={`${PUBLIC_URL}/static/icons/approval.svg`} sx={{ width: 50, height: 50 }} />
                    </Box>
                  </Box>

                  <Box sx={{ height: 240, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <Typography variant="h3" gutterBottom>
                      7 - Parameters Test
                    </Typography>

                    <Typography variant="body2" color="text.subtitle">
                      A 7-parameter test offers comprehensive insights with precision, leaving no stone unturned in evaluating complex variables.
                    </Typography>
                  </Box>

                  <Box px={10} sx={{ bgcolor: "background.default" }}>
                    <Typography variant="h4" fontWeight="500" color="text.subtitle">
                      The Most Complete
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>

      <Box className={classes.backgroundStrip}>
        <Box className={classes.parameterBlock3} />

        <Container maxWidth="false" disableGutters sx={{ padding: PAGE_PADDING }}>
          <Box px={20} className={classes.subStrip}>
            <Stack direction="row" spacing={3} sx={{ overflow: "hidden" }}>
              {scrollItems.map((item, index) => (
                <Box key={index}>
                  <Typography variant="subtitle2" fontWeight="normal" color="text.disabled" noWrap>
                    {item.name}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="false" disableGutters sx={{ padding: PAGE_PADDING, mb: 2 }}>
        <Box px={10}>
          <Box py={3} px={10}>
            <Grid container rowSpacing={3} columnSpacing={5}>
              <Grid item xs={12} md={12}>
                <Box p={2}>
                  <Stack direction="row" spacing={1} sx={{ alignItems: "center", mb: 1 }}>
                    <Box component="img" src={`${PUBLIC_URL}/static/icons/para1.svg`} sx={{ width: 20, height: 20 }} />

                    <Typography variant="h6" fontWeight="500">
                      3rd parameter
                    </Typography>
                  </Stack>

                  <Typography variant="subtitle2" fontWeight="normal" color="text.secondary">
                    parameter determines the amount of text that the model takes.
                  </Typography>
                </Box>
              </Grid>

              {items.map((item, index) => (
                <Grid key={index} item xs={12} sm={6} md={4}>
                  <Box p={2}>
                    <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
                      <Box component="img" src={`${PUBLIC_URL}/static/icons/para1.svg`} sx={{ width: 20, height: 20 }} />

                      <Typography variant="subtitle2" fontWeight="500">
                        {item.name + " "}
                        <Typography component="span" sx={{ fontSize: "0.875rem", fontWeight: "normal", color: "text.subtitle" }}>
                          {item.desc}
                        </Typography>
                      </Typography>
                    </Stack>

                    <Typography variant="subtitle2" fontWeight="normal"></Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

            <Box p={2} />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Parameters;
