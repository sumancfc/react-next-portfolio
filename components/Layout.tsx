"use client";

import React from "react";
import { AppShell, Burger, Group, Skeleton, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Navbar from "./Navbar";
import Footer from "./Footer";

export function AltLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell layout='alt'>
      <AppShell.Navbar>
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
      <AppShell.Footer>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
}
