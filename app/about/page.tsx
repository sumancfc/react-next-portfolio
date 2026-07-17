import React from "react";
import { Metadata } from "next";
import Layout from "../../components/Layout";
import AboutContent from "../../components/AboutContent";

export const metadata: Metadata = {
  title: "Über mich",
};

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <AboutContent />
    </Layout>
  );
};

export default AboutPage;
