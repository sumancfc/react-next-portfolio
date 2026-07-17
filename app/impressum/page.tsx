import React from "react";
import { Metadata } from "next";
import Layout from "../../components/Layout";
import ImpressumContent from "../../components/ImpressumContent";

export const metadata: Metadata = {
  title: "Impressum",
};

const ImpressumPage: React.FC = () => {
  return (
    <Layout>
      <ImpressumContent />
    </Layout>
  );
};

export default ImpressumPage;
