import React from "react";
import { Metadata } from "next";
import Layout from "../../components/Layout";
import ExperienceContent from "../../components/ExperienceContent";

export const metadata: Metadata = {
  title: "Erfahrung",
};

const ExperiencePage: React.FC = () => {
  return (
    <Layout>
      <ExperienceContent />
    </Layout>
  );
};

export default ExperiencePage;
