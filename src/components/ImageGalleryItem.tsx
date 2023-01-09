import { useModal } from 'context/useModalContext';
import { IImages } from 'types/types';

interface IGalleryItem extends IImages {}

export const ImageGalleryItem: React.FC<IGalleryItem> = ({
  id,
  webformatURL,
  tags,
  largeImageURL,
}) => {
  const { openModal } = useModal();

  return (
    <li
      className="shadow-md md:basis-1/3 lg:basis-1/5 ease-in-out duration-300 hover:cursor-pointer hover:scale-105"
      key={id}
    >
      <img
        className="md:h-64 object-cover "
        src={webformatURL}
        alt={tags}
        onClick={() => openModal(largeImageURL)}
      />
    </li>
  );
};
