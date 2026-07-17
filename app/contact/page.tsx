import React from "react";
import { Metadata } from "next";
import Layout from "../../components/Layout";
import ContactContent from "../../components/ContactContent";

export const metadata: Metadata = {
  title: "Kontakt",
};

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <ContactContent />
    </Layout>
  );
};

export default ContactPage;
