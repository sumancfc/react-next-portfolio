import React from "react";
import { Metadata } from "next";
import HeroIcons from "../../components/Icons";
import contacts from "../../data/contacts";
import {Center, Container, Flex} from '@mantine/core';
import {GetInTouch} from "../../components/GetInTouch/GetInTouch";

export const metadata: Metadata = {
  title: "Contact",
};

const ContactPage: React.FC = () => {
  return (
      <Container><GetInTouch /></Container>
  );
};

export default ContactPage;
