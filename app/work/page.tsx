import React from "react";
import { Metadata } from "next";
import Layout from "../../components/Layout";
import WorkContent from "../../components/WorkContent";

export const metadata: Metadata = {
  title: "Projekte",
};

const WorkPage: React.FC = () => {
  return (
    <Layout>
      <WorkContent />
    </Layout>
  );
};

export default WorkPage;
