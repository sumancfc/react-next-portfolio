import { IconType } from "react-icons";

export interface BackgroundIconConfig {
  Icon: IconType;
  top: string;
  left: string;
  size: number;
  delay: string;
  duration: string;
}

interface TechBackgroundProps {
  icons: BackgroundIconConfig[];
}

const TechBackground: React.FC<TechBackgroundProps> = ({ icons }) => {
  return (
    <div className='tech-bg' aria-hidden='true'>
      {icons.map(({ Icon, top, left, size, delay, duration }, index) => (
        <span
          key={index}
          className='tech-bg-icon'
          style={{
            top,
            left,
            fontSize: size,
            animationDelay: delay,
            animationDuration: duration,
          }}
        >
          <Icon />
        </span>
      ))}
    </div>
  );
};

export default TechBackground;
