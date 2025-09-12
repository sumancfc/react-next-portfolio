import React from "react";
import { Metadata } from "next";
import Layout from "../../../components/Layout";

export const metadata: Metadata = {
  title: "Work",
};

const WorkDetailsPage: React.FC = () => {
  return (
    <Layout>
      <h1>Work Details Page</h1>
    </Layout>
  );
};

export default WorkDetailsPage;
