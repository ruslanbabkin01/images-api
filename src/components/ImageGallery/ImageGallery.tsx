import { ImageGalleryItem } from '../ImageGalleryItem';
import { IImages } from 'types/props';

interface IGalleryProps {
  onModal: () => void;
  images: IImages[];
}

export const ImageGallery: React.FC<IGalleryProps> = ({ images, onModal }) => (
  <ul className="flex flex-wrap gap-4 basis-10 mx-auto my-auto mb-0 mt-0 p-0 list-none">
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
