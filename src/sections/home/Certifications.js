import React, { useRef } from "react";
import { Container, Typography, Box, Stack, Grid, Avatar, IconButton, Divider } from "@mui/material";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import en from "../common/en.json";
import { MAXWIDTH, PUBLIC_URL } from "../../constants";

const Certifications = () => {
  const owlCarouselRef = useRef(null);

  const { title, subtitle, carouselItems, ceoDescription, ceoTitle } = en.certificationsSection;

  const options = {
    items: 7,
    autoplay: true,
    autoplayTimeout: 3000,
    loop: true,
    margin: 0,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 7,
      },
    },
  };

  return (
    <Container maxWidth={false} disableGutters sx={{ maxWidth: MAXWIDTH, mt: 8, mb: 10 }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <Typography mt={3} variant="h3" fontWeight="500" sx={{ mb: 1 }}>
            {title}
          </Typography>

          <Container maxWidth="sm">
            <Typography variant="body2" fontSize={15} fontWeight="normal" color="text.subtitle">
              {subtitle}
            </Typography>
          </Container>
        </Box>
      </Container>

      <Box p={5} />

      <Box px={20}>
        <OwlCarousel className="owl-theme" ref={owlCarouselRef} {...options}>
          {Object.values(carouselItems).map((item, index) => (
            <Box key={index} p={2} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Box component="img" src={`${PUBLIC_URL}${item.image}`} alt={`Certification ${index + 1}`} sx={{ width: "100%", maxWidth: "80px" }} />
            </Box>
          ))}
        </OwlCarousel>

        <Stack direction="row" px={2} pt={1} spacing={2} sx={{ justifyContent: "end" }}>
          <IconButton size="small" sx={{ bgcolor: "background.disabled" }} onClick={() => owlCarouselRef.current.prev()}>
            <KeyboardArrowLeftRoundedIcon fontSize="small" />
          </IconButton>

          <IconButton size="small" sx={{ bgcolor: "background.disabled" }} onClick={() => owlCarouselRef.current.next()}>
            <KeyboardArrowRightRoundedIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Box>

      <Box p={4} />

      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <Avatar src={`${PUBLIC_URL}/static/icons/ceo.svg`} alt="CEO Avatar" sx={{ width: 56, height: 56 }} />

          <Typography mt={3} variant="subtitle1" fontWeight="normal" sx={{ mb: 1 }}>
            {ceoDescription}
          </Typography>

          <Typography variant="body1" fontWeight="normal" color="text.subtitle">
            {ceoTitle}
          </Typography>
        </Box>
      </Container>
    </Container>
  );
};

export default Certifications;
