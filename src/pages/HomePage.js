import React from "react";
import Page from "../components/Page";
import Header from "../components/Layouts/Header";
import { Box } from "@mui/material";
import { Certifications, ELearning, Hero, Parameters, Technologies } from "../sections/home";
import { Footer } from "../components/Layouts";

const HomePage = () => {
  return (
    <Page title="Home Page">
      <Header />

      <Hero />

      <ELearning />

      <Parameters />

      <Certifications />

      <Technologies />

      <Footer />
    </Page>
  );
};

export default HomePage;
