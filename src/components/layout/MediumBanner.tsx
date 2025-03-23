
interface MediumBannerProps {
  imageSrc: string;
  altText: string;
}

const MediumBanner = ({ imageSrc, altText }: MediumBannerProps) => {
  return (
    <div className="bg-gray-900">
      <div className="w-full h-24 bg-gray-800 overflow-hidden">
        <img
          src={imageSrc}
          alt={altText}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default MediumBanner;
