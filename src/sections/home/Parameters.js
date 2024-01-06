import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Container, Typography, Box, Stack, Grid, Avatar, Link } from "@mui/material";
import { MAXWIDTH, PUBLIC_URL } from "../../constants";
import en from "../common/en.json";

const { ceoDescription, ceoTitle, icapTest, parameterItems } = en.parametersSection;


const useStyles = makeStyles((theme) => ({
  backgroundStrip: { height: "50px", backgroundColor: "#131315", marginTop: 80, marginBottom: 40, display: "flex", justifyContent: "center", alignItems: "center", borderBottom: "1px solid #222326", position: "relative" },
  subStrip: { height: "49px", width: "100%", backgroundColor: "#131315", display: "flex", justifyContent: "space-around", alignItems: "center", position: "relative", zIndex: 2 },
  parameterBlock1: {
    "&:before": {
      position: "absolute",
      top: -40,
      left: "50%",
      right: 200,
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
      right: 0,
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
      left: 160,
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
  const [currentParams, setCurrentParams] = useState(parameterItems[0]);

  return (
    <>
      <Container maxWidth={false} disableGutters sx={{ maxWidth: MAXWIDTH, mt: 2 }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Avatar src={`${PUBLIC_URL}/static/icons/ceo.svg`} sx={{ width: 56, height: 56 }} />

            <Typography mt={3} variant="body1" fontWeight="500" sx={{ mb: 2 }}>
              {ceoDescription}
            </Typography>

            <Typography variant="body1" fontWeight="500" color="text.disabled">
              {ceoTitle}
            </Typography>
          </Box>
        </Container>

        <Box sx={{ height: 80 }} />

        <Box sx={{ position: "relative" }}>
          <Box className={classes.parameterBlock1} />
          <Box className={classes.parameterBlock2} />

          <Box px={10} sx={{ position: "relative", zIndex: 2 }}>
            <Grid container spacing={3} justifyContent="end">
              <Grid item xs={12} md={6}>
                <Stack alignItems="end" textAlign="end">
                  <Box pr={10}>
                    <Box sx={{ height: 80, width: 80, backgroundImage: "linear-gradient(#5C67C7, #23329C)", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "6px" }}>
                      <Box component="img" src={`${PUBLIC_URL}/static/icons/approval.svg`} sx={{ width: 50, height: 50 }} />
                    </Box>
                  </Box>

                  <Box sx={{ height: 240, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <Typography variant="h2" fontWeight={700} gutterBottom>
                      {icapTest.title}
                    </Typography>

                    <Typography variant="body2" color="text.disabled">
                      {icapTest.description}
                    </Typography>
                  </Box>

                  <Box px={10} sx={{ bgcolor: "background.default" }}>
                    <Typography variant="h4" fontWeight="500" color="text.subtitle">
                      {icapTest.subtitle}
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>

      <Box className={classes.backgroundStrip}>
        <Container maxWidth={false} disableGutters sx={{ maxWidth: MAXWIDTH, position: "relative" }}>
          <Box className={classes.parameterBlock3} />

          <Box className={classes.subStrip}>
            {parameterItems.map((item, index) => (
              <Link key={index} underline="none" component="button" onClick={() => setCurrentParams(item)}>
                <Typography variant="subtitle2" fontSize={14} fontWeight="400" color={item.name === currentParams.name ? "text.primary" : "text.disabled"} noWrap>
                  {item.name}
                </Typography>
              </Link>
            ))}
          </Box>
        </Container>
      </Box>

      <Container maxWidth={false} disableGutters sx={{ maxWidth: MAXWIDTH }}>
        <Box px={10}>
          <Box py={3}>
            <Grid container rowSpacing={8} columnSpacing={12} justifyContent="space-between">
              <Grid item xs={12} md={12}>
                <Box>
                  <Stack direction="row" spacing={1} sx={{ alignItems: "center", mb: 1 }}>
                    <Box component="img" src={`${PUBLIC_URL}/static/icons/sm-para.svg`} sx={{ width: 20, height: 20 }} />

                    <Typography variant="h6" fontSize={22} fontWeight="700">
                      {currentParams.name}
                    </Typography>
                  </Stack>

                  <Typography variant="subtitle2" fontSize={16} fontWeight="normal" color="text.secondary">
                    {currentParams.desc}
                  </Typography>
                </Box>
              </Grid>

              {currentParams.children?.map((item, index) => (
                <Grid key={index} item xs={12} sm={6} md={4}>
                  <Stack direction="row" alignItems="start" spacing={1}>
                    <Box sx={{ width: "16px" }}>
                      <Box component="img" src={PUBLIC_URL + item.icon} sx={{ height: "100%", width: "100%", mt: "4px" }} />
                    </Box>

                    <Box sx={{ width: "100%" }}>
                      <Typography variant="subtitle2" fontWeight="500">
                        {item.name + " "}

                        <Typography component="span" sx={{ fontSize: "0.875rem", fontWeight: "normal", color: "text.subtitle" }}>
                          {item.desc}
                        </Typography>
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Parameters;