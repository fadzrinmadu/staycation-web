import { ImageGallery } from './ImageGallery';
import FeaturedExample1Image from "@/assets/images/examples/featured-example-1.jpg";
import FeaturedExample2Image from "@/assets/images/examples/featured-example-2.jpg";
import FeaturedExample3Image from "@/assets/images/examples/featured-example-3.jpg";

export default {
  title: 'Components/UI/ImageGallery',
  component: ImageGallery,
};

export const Default = () => {
  return (
    <ImageGallery
      mainImage={FeaturedExample1Image}
      secondaryImages={[FeaturedExample2Image, FeaturedExample3Image]}
      alt="Sample Image Gallery"
    />
  );
};
