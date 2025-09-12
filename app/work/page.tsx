import React from "react";
import { Metadata } from "next";
import Layout from "../../components/Layout";

export const metadata: Metadata = {
  title: "Work",
};

const WorkPage: React.FC = () => {
  return <Layout>This is Work Page</Layout>;
};

export default WorkPage;
