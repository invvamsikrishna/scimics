import React from "react";
import { Grid, Box, Typography, Container, Button } from "@mui/material";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import CustomButton from "../../components/CustomButton";
import { PAGE_PADDING, PUBLIC_URL } from "../../constants";
import Typewriter from "typewriter-effect";
import RequestAccessDialog from "../common/RequestAccessDialog";

const Hero = () => {
  return (
    <Container maxWidth="false" disableGutters sx={{ padding: PAGE_PADDING, my: 5 }}>
      <Grid container sx={{ backgroundImage: `url(${PUBLIC_URL}/static/images/hero_bg.svg)`, backgroundRepeat: "no-repeat", backgroundPosition: "right", backgroundSize: "contain" }}>
        <Grid item xs={12} md={6}>
          <Box sx={{ py: 10 }}>
            <Box sx={{ mb: 5, width: "250px", py: 1, px: 2, bgcolor: "#ffffff1a", borderRadius: "50px", border: "1px solid #ffffff1a", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Typography variant="caption" color="text.primary" sx={{ letterSpacing: 1 }}>
                Lauching our Private Beta
              </Typography>

              <ArrowForwardIosRoundedIcon sx={{ ml: 1, width: "10px", height: "10px" }} />
            </Box>

            <Typography variant="h2" color="text.primary" fontWeight={500}>
              Your Success Journey
            </Typography>

            <Typography variant="h2" color="text.primary" fontWeight={500}>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Begins with ")
                    .typeString('<span style="color: #CED765">E-Learning</span>')
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString("Is Validated with ")
                    .typeString('<span style="color: #CED765">Certificates</span>')
                    .pauseFor(2500)
                    .deleteAll()
                    .start();
                }}
                options={{
                  autoStart: true,
                  delay: 100,
                  loop: true,
                }}
              />
            </Typography>

            <Typography variant="h6" color="text.disabled" fontWeight={500} sx={{ mt: 2, mb: 8 }}>
              Learning, Certifications, AI Resume Builder, Mock Interviews and Much More..
            </Typography>

            <RequestAccessDialog title="Request Early Access" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;