import React from "react";
import Header from "../components/Header";
import { ELinks } from "../constants";

const AboutPage = () => {
  return (
    <main>
      <Header activePage={ELinks.ABOUT} />
    </main>
  )
}

export default AboutPage;