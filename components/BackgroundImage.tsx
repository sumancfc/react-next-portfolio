const BackgroundImage = ({ className, imageSrc }) => {
  return (
    <div className={className} style={{ background: `url(${imageSrc})` }} />
  );
};

export default BackgroundImage;
