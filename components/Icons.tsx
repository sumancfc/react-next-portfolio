import React from "react";
import * as HIcons from "@heroicons/react/outline";

interface HeroIconsProps {
  icon: keyof typeof HIcons; // keyof typeof HIcons ensures the icon prop is a key of the HIcons object.
}

const HeroIcons: React.FC<HeroIconsProps> = (props) => {
  const { ...icons } = HIcons;
  const TheIcon = icons[props.icon];

  // Check if the icon exists
  if (!TheIcon) {
    return null;
  }

  return <TheIcon className='icons' aria-hidden='true' />;
};

export default HeroIcons;
