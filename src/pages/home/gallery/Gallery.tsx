import SectionHeader from "@/components/ui/shared/SectionHeader";
import image1 from "../../../assets/gallery/image1.jpg";
import image2 from "../../../assets/gallery/image2.jpg";
import image3 from "../../../assets/gallery/image3.jpg";
import image4 from "../../../assets/gallery/image4.jpg";
import image5 from "../../../assets/gallery/image5.jpg";
import image6 from "../../../assets/gallery/image6.jpg";
import Container from "@/layout/Container";
import GalleryCard from "./GalleryCard";
const Gallery = () => {
  const images = [image1, image2, image3, image4, image5, image6];
  return (
    <div className="mt-14 lg:mt-32 pb-10">
      <SectionHeader
        subTitle="PHOTO GALLERY"
        title="Explore Our Photo Gallery"
      />
      <Container className="grid grid-cols-3 gap-8 mt-12">
        {images.map((image) => (
          <GalleryCard image={image} key={image} />
        ))}
      </Container>
    </div>
  );
};

export default Gallery;
