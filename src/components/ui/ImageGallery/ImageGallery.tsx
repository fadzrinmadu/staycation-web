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
      className={clsx("flex gap-4 h-[500px]")}
    >
      <div 
        className={clsx("relative flex-[1.4] rounded-2xl overflow-hidden")}
      >
        <Image 
          src={mainImage}
          alt={alt || 'Main Image'}
          fill
          className={clsx("object-cover")}
        />
      </div>
      
      <div
        className={clsx("flex flex-col gap-4 flex-1")}
      >
        {secondaryImages.slice(0, 2).map((image, index) => (
          <div
            key={index + 2}
            className="relative flex-1 rounded-2xl overflow-hidden"
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
