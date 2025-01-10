import React from "react";
import { IconCheck } from "@tabler/icons-react"; // Correct import for IconCheck
import {
  Button,
  Container,
  Group,
  Image,
  List,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import classes from "./HeroSection.module.css";

const HeroSection: React.FC = () => {
  return (
    <Container size='md'>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            A <span className={classes.highlight}>modern</span> React <br />{" "}
            components library
          </Title>
          <Text c='dimmed' mt='md'>
            Build fully functional accessible web applications faster than ever
            – Mantine includes more than 120 customizable components and hooks
            to cover you in any situation.
          </Text>

          <Group mt={30}>
            <Button radius='xl' size='md' className={classes.control}>
              Download CV
            </Button>
            <Button
              variant='default'
              radius='xl'
              size='md'
              className={classes.control}
            >
              Work
            </Button>
          </Group>
        </div>
        <Image src='/img/home-banner.png' className={classes.image} />
      </div>
    </Container>
  );
};

export default HeroSection;
