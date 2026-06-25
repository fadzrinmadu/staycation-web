import React, { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import clsx from 'clsx';

interface ImageGalleryProps {
  mainImage: StaticImageData | string;
  secondaryImages: (StaticImageData | string)[];
  alt?: string;
}

const ImageGallery: FC<ImageGalleryProps> = (props: ImageGalleryProps) => {
  const { mainImage, secondaryImages, alt } = props;
  
  return (
    <div 
      className={clsx("flex flex-col gap-4 md:flex-row md:h-[500px]")}
    >
      {/* Main image — full width di mobile, dominan di desktop */}
      <div 
        className={clsx("relative w-full h-[260px] rounded-2xl overflow-hidden sm:h-[320px] md:h-auto md:flex-[1.4]")}
      >
        <Image 
          src={mainImage}
          alt={alt || 'Main Image'}
          fill
          className={clsx("object-cover")}
        />
      </div>
      
      {/* Secondary images — row di mobile, kolom di desktop */}
      <div
        className={clsx("flex flex-row gap-4 md:flex-col md:flex-1")}
      >
        {secondaryImages.slice(0, 2).map((image, index) => (
          <div
            key={index + 2}
            className="relative flex-1 h-[160px] rounded-2xl overflow-hidden sm:h-[200px] md:h-auto"
          >
            <Image 
              src={image}
              alt={`${alt} ${index + 2}`}
              fill
              className={clsx("object-cover")}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export { ImageGallery };
