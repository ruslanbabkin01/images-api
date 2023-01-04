import { ImageGalleryItem } from './ImageGalleryItem';
import { IImages } from 'types/types';

interface IGalleryProps {
  onModal: (largeImage: string) => void;
  images: IImages[];
}

export const ImageGallery: React.FC<IGalleryProps> = ({ images, onModal }) => (
  <ul className="flex flex-wrap gap-4 mx-auto">
    {images.map(img => (
      <ImageGalleryItem
        key={img.id}
        smallImage={img.webformatURL}
        largeImage={img.largeImageURL}
        tags={img.tags}
        onModal={onModal}
      />
    ))}
  </ul>
);
