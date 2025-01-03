import * as HIcons from "@heroicons/react/outline";

const HeroIcons = (props) => {
  const { ...icons } = HIcons;
  const TheIcon = icons[props.icon];

  return <TheIcon className='icons' aria-hidden='true' />;
};

export default HeroIcons;
