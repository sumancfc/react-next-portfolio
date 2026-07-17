import React from "react";
import { Metadata } from "next";
import Layout from "../components/Layout";
import NotFoundContent from "../components/NotFoundContent";

export const metadata: Metadata = {
  title: "404",
};

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <NotFoundContent />
    </Layout>
  );
};

export default NotFoundPage;
