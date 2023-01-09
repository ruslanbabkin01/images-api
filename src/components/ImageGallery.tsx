import { ImageGalleryItem } from './ImageGalleryItem';
import { IImages } from 'types/types';

interface IGalleryProps {
  images: IImages[];
}

export const ImageGallery: React.FC<IGalleryProps> = ({ images }) => (
  <ul className="flex flex-col gap-3 md:flex-row md:flex-wrap justify-center md:gap-4 mx-auto px-3">
    {images.map(img => (
      <ImageGalleryItem
        key={img.id}
        webformatURL={img.webformatURL}
        largeImageURL={img.largeImageURL}
        tags={img.tags}
      />
    ))}
  </ul>
);
