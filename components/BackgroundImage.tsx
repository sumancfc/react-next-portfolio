import Image from "next/image";

interface BackgroundImageProps {
  className?: string;
  imageSrc: string;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  className,
  imageSrc,
}) => {
  return (
    <div className={`${className} col-6 d-flex justify-end`}>
      <Image loading={"lazy"} src={imageSrc} alt="Suman Shrestha Image" width={700} height={960} quality={100} objectFit={"cover"} />
    </div>
  );
};

export default BackgroundImage;
