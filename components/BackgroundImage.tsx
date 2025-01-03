import React from "react";

interface BackgroundImageProps {
  className?: string;
  imageSrc: string;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  className,
  imageSrc,
}) => {
  return (
    <div className={className} style={{ background: `url(${imageSrc})` }} />
  );
};

export default BackgroundImage;
