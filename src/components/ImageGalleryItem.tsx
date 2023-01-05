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
    <li className="shadow-md w-[(calc(100%-2rem))/4]" key={id}>
      <img
        className="w-full h-64 object-cover ease-in-out duration-300 hover:cursor-pointer hover:scale-105"
        src={webformatURL}
        alt={tags}
        onClick={() => openModal(largeImageURL)}
      />
    </li>
  );
};
